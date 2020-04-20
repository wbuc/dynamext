<template>
     <div>
          <v-card :elevation="pageElevation">
               <v-row no-gutters class="mb-3">
                    <v-col cols="12" xs="12" sm="12" md="6">
                         <div class="pa-3">
                              <v-btn text outlined large color @click="openDesigner">
                                   <v-icon left color="primary">mdi-plus-thick</v-icon>
                                   <span>New Schedule</span>
                              </v-btn>
                         </div>
                    </v-col>
                    <v-col cols="12" xs="12" sm="12" md="6" class="hidden-sm-and-down">
                         <div class="pa-3 text-right">
                              <v-btn depressed large icon color="grey">
                                   <v-icon>mdi-repeat</v-icon>
                              </v-btn>

                              <v-btn depressed large icon color="grey">
                                   <v-icon>mdi-flag-variant-outline</v-icon>
                              </v-btn>
                         </div>
                    </v-col>
               </v-row>
          </v-card>

          <v-row no-gutters class="mb-3">
               <v-col cols="12" xs="12" sm="12" md="9" class="d-flex align-center">
                    <div>
                         <v-btn id="sort-schedule" small text color="grey" @click="sortBy('name')">
                              <v-icon left small>mdi-file-document</v-icon>
                              <span class="caption text-lowercase">by schedule name</span>
                         </v-btn>
                         <v-tooltip activator="#sort-schedule" top>
                              <span>Sort all items by schedule name</span>
                         </v-tooltip>
                         <v-btn id="sort-owner" small text color="grey" @click="sortBy('owner')">
                              <v-icon left small>person</v-icon>
                              <span class="caption text-lowercase">by owner</span>
                         </v-btn>
                         <v-tooltip activator="#sort-owner" top>
                              <span>Sort all items by owner</span>
                         </v-tooltip>
                    </div>
               </v-col>
               <v-col cols="12" xs="12" sm="12" md="3" class="hidden-sm-and-down">
                    <div>
                         <v-text-field
                              append-icon="mdi-magnify"
                              v-model="searchText"
                              label="Search"
                              outlined
                              single-line
                              hide-details
                              dense
                         ></v-text-field>
                    </div>
               </v-col>
          </v-row>

          <v-card :elevation="pageElevation">
               <div
                    v-for="(schedule,index) in filteredSchedules"
                    :key="index"
                    :class="`schedule  ${schedule.status}`"
               >
                    <v-row no-gutters>
                         <v-col cols="12" xs="12" sm="12" md="5">
                              <v-card flat class="pa-3">
                                   <div class="caption grey--text">Name</div>
                                   <div>{{schedule.name}}</div>
                              </v-card>
                         </v-col>
                         <v-col cols="6" xs="12" sm="4" md="2">
                              <v-card flat class="pa-3">
                                   <div class="caption grey--text">Owner</div>
                                   <div>{{schedule.owner}}</div>
                              </v-card>
                         </v-col>
                         <v-col cols="6" xs="12" sm="4" md="2">
                              <v-card flat class="pa-3">
                                   <div class="caption grey--text">Created on</div>
                                   <div>{{schedule.createdDate}}</div>
                              </v-card>
                         </v-col>
                         <v-col cols="6" sm="3" md="2" class="d-flex align-center">
                              <v-card flat>
                                   <div>
                                        <v-chip
                                             :class="`chip ${schedule.status} 
                                                  ${statusClass(schedule.status)} caption white--text my-2`"
                                             small
                                        >{{schedule.status}}</v-chip>
                                   </div>
                              </v-card>
                         </v-col>
                         <v-col cols="6" sm="1" md="1" class="d-flex align-center justify-center">
                              <v-card flat>
                                   <div>
                                        <v-menu offset-y transition="slide-y-transition">
                                             <template v-slot:activator="{ schedule, on }">
                                                  <v-btn
                                                       icon
                                                       text
                                                       dark
                                                       color="grey"
                                                       v-on="on"
                                                       class="mx-auto"
                                                  >
                                                       <v-icon>more_vert</v-icon>
                                                       <span></span>
                                                  </v-btn>
                                             </template>
                                             <v-list>
                                                  <v-list-item
                                                       v-for="(action, index) in quickActions"
                                                       :key="index"
                                                       @click="action.action(schedule)"
                                                       active-class="secondary--text"
                                                       dense
                                                  >
                                                       <v-list-item-action>
                                                            <v-icon
                                                                 :class="action.color"
                                                                 small
                                                            >{{action.icon}}</v-icon>
                                                       </v-list-item-action>
                                                       <v-list-item-content>
                                                            <v-list-item-title>{{action.title}}</v-list-item-title>
                                                       </v-list-item-content>
                                                  </v-list-item>
                                             </v-list>
                                        </v-menu>
                                   </div>
                              </v-card>
                         </v-col>
                    </v-row>

                    <v-divider></v-divider>
               </div>
          </v-card>
     </div>
</template>

<script>
export default {
     name: "Schedules.Dashboard",
     data() {
          return {
               pageElevation: 3,
               searchText: null,
               schedules: [],
               quickActions: [
                    {
                         title: "Design",
                         icon: "mdi-draw",
                         color: "primary--text",
                         action: item => {
                              // navigate to the form designer route
                              console.log("design  ", item.id);
                         }
                    },
                    {
                         title: "View Copies",
                         icon: "mdi-open-in-new",
                         color: "success--text",
                         action: item => console.log("view copies ", item)
                    },
                    {
                         title: "Delete",
                         icon: "mdi-delete",
                         color: "error--text",
                         action: item => {
                              this.deleteFormDefinition(item);
                         }
                    }
               ]
          };
     },
     computed: {
          filteredSchedules() {
               if (!this.searchText) return this.schedules;

               const _search = this.searchText.toLowerCase().trim();
               return this.schedules.filter(
                    c => c.name.toLowerCase().indexOf(_search) > -1
               );
          }
     },
     methods: {
          statusClass(status) {
               // NOTE: dynamically add vuetify class based on status. This works but not using anymore for the demo. Future reference.
               if (status === "published") return "success";
               if (status === "disabled") return "error";
               if (status === "draft") return "warning";
               return "none";
          },
          sortBy(prop) {
               this.schedules.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
          },
          refreshDashboard(cb) {
               this.$store.dispatch("getAllForms").then(result => {
                    this.schedules = result.data;
                    if (cb) cb();
               });
          },
          openDesigner() {
               this.$store.dispatch("createNewSchedule").then(data => {
                    console.log("New schedule created: ", data);
                    this.$router.replace({ name: "Schedule.Designer" });
               });
          },
          deleteFormDefinition(form) {
               this.$store.dispatch("deleteFormDefinition", form).then(() => {
                    this.refreshDashboard(() => {
                         this.$store.dispatch(
                              "notifyInfo",
                              `${form.name} is now deleted!`
                         );
                    });
               });
          }
     },
     created() {
          this.refreshDashboard();
     }
};
</script>

<style>
.schedule.published {
     border-left: 5px solid #4caf50;
}
.schedule.disabled {
     border-left: 5px solid #ff5252;
}
.schedule.draft {
     border-left: 5px solid #fb8c00;
}

/* .v-chip.chip.published {
     background: #3cd1c2 !important;
}
.v-chip.chip.disabled {
     background: tomato !important;
}
.v-chip.chip.draft {
     background: orange !important;
} */
</style>