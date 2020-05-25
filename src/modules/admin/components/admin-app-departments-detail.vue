<template>
     <div>
          <x-data-list :endPoint="url" :key="listTicker">
               <template v-slot="{data: departments, loading}">
                    <x-form-section>
                         <template v-slot:actions>
                              <v-btn small text class="mr-2" @click="newItem">
                                   <v-icon left color="success">mdi-plus-thick</v-icon>
                                   <span>New</span>
                              </v-btn>
                              <v-btn icon small text @click="refresh">
                                   <v-icon color="primary">mdi-refresh</v-icon>
                              </v-btn>
                         </template>
                         <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
                         <div v-else>
                              <x-dynamic-list :listData="departments">
                                   <template v-slot:title="{item}">{{item.name}}</template>
                                   <template v-slot:actions="{ item }">
                                        <v-btn small icon @click="openItem(item)">
                                             <v-icon small color="secondary">mdi-pencil</v-icon>
                                        </v-btn>
                                        <v-btn small icon @click="deleteItem(item)">
                                             <v-icon small color="error">mdi-delete</v-icon>
                                        </v-btn>
                                   </template>
                              </x-dynamic-list>
                         </div>
                    </x-form-section>
               </template>
          </x-data-list>
          <x-dialog :show="dialogConfig.open" :actions="dialogConfig.actions">
               <template v-slot:title>New department</template>
               <template>
                    <x-form-section flat dense>
                         <x-form-control title="Name" dense>
                              <v-text-field
                                   v-model="departmentDetail.name"
                                   style="width:100%"
                                   outlined
                                   single-line
                                   hide-details
                                   dense
                                   placeholder="Ex. Finance"
                              ></v-text-field>
                         </x-form-control>
                    </x-form-section>
               </template>
          </x-dialog>
     </div>
</template>

<script>
export default {
     name: "admin.app.department.detail",
     data() {
          return {
               url: "/appdata/departments",
               listTicker: 1, // used to force the list refresh
               dialogConfig: {
                    open: false,
                    actions: [
                         {
                              text: "Close",
                              color: "error",
                              action: () => {
                                   this.dialogConfig.open = false;
                              }
                         },
                         {
                              text: "Save",
                              color: "success",
                              action: () => {
                                   this.$store
                                        .dispatch(
                                             "saveNewAdminDepartment",
                                             this.departmentDetail
                                        )
                                        .then(() => {
                                             this.$store.dispatch(
                                                  "notifySuccess",
                                                  `${this.departmentDetail.name} created!`
                                             );
                                             this.refresh();
                                        });
                                   this.dialogConfig.open = false;
                              }
                         }
                    ]
               },
               departmentDetail: { name: "" }
          };
     },
     methods: {
          refresh() {
               this.listTicker++;
          },
          newItem() {
               this.departmentDetail = { name: "" };
               this.dialogConfig.open = true;
          },
          openItem(item) {
               // this should fetch the data from the server using the id, then map it.
               console.log("opening item ", item);
          },
          deleteItem(item) {
               console.log("deleting item ", item);
          }
     },
     created() {
          console.log("created : admin-app-department-detail");
     },
     mounted() {
          console.log("mounted : admin-app-department-detail");
     }
};
</script>
<style>
</style>