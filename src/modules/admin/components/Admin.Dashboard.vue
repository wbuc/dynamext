<template>
     <v-row no-gutters class="pt-3">
          <v-col
               cols="12"
               :xs="fieldSize.xlarge"
               :sm="fieldSize.large"
               :md="fieldSize.medium"
               :lg="fieldSize.small"
               class="pa-2"
               v-for="(tile, index) in tiles"
               :key="index"
          >
               <div>
                    <x-card-basic>
                         <template v-slot:title>{{tile.title}}</template>
                         <template v-slot:detail>{{tile.description}}</template>
                         <template v-slot:actions>
                              <v-btn color text @click="tile.primaryAction">
                                   <v-icon color="primary" left>mdi-open-in-new</v-icon>Open
                              </v-btn>
                              <v-spacer></v-spacer>
                              <v-btn icon color="secondary" @click="tile.addAction">
                                   <v-icon small>mdi-plus-thick</v-icon>
                              </v-btn>
                              <v-btn
                                   v-if="tile.secondaryAction"
                                   icon
                                   color="accent lighten-1"
                                   @click="tile.secondaryAction.action"
                              >
                                   <v-icon>{{tile.secondaryAction.icon}}</v-icon>
                              </v-btn>
                         </template>
                    </x-card-basic>
               </div>
          </v-col>

          <x-dialog :show="dialogConfig.open" :actions="dialogConfig.actions">
               <template v-slot:title>{{dialogConfig.title}}</template>
               <template>{{dialogConfig.description}}</template>
          </x-dialog>
     </v-row>
</template>

<script>
export default {
     data() {
          return {
               fieldSize: {
                    small: 3,
                    medium: 4,
                    large: 6,
                    xlarge: 12
               },
               tiles: [
                    {
                         title: "Accounts",
                         description: "Manage all user accounts",
                         primaryAction: () => {
                              this.$router.replace({ name: "Admin.Accounts" });
                         },
                         addAction: () => {
                              this.dialogConfig.title = "Create New Account";
                              this.dialogConfig.description =
                                   "Now you can quickly add a new account!";
                              this.dialogConfig.open = true;
                         }
                    },
                    {
                         title: "Filerooms",
                         description:
                              "Configure filerooms and import documents",
                         primaryAction: () => console.log("show dataroom"),
                         addAction: () => {
                              // things to do here when clicked
                         },
                         secondaryAction: {
                              icon: "mdi-cloud-upload",
                              action: () => {
                                   console.log("secondary action clicked!");
                              }
                         }
                    },
                    {
                         title: "Schedules",
                         description:
                              "Configure and maintain document schedules",
                         primaryAction: () => console.log("show schedules"),
                         addAction: () => {
                              // things to do here when clicked
                         }
                    },
                    {
                         title: "Document Data",
                         description:
                              "View and manage documents and related data.",
                         primaryAction: () => console.log("show dataroom"),
                         addAction: () => {
                              // things to do here when clicked
                         }
                    },
                    {
                         title: "Application Data",
                         description:
                              "Add or edit data used by the application.",
                         primaryAction: () => {
                              this.$router.replace({ name: "Admin.AppConfig" });
                         },
                         addAction: () => {
                              // things to do here when clicked
                         }
                    }
               ],
               dialogConfig: {
                    open: false,
                    title: "",
                    description: "",
                    actions: [
                         {
                              text: "Close",
                              color: "error",
                              action: () => {
                                   this.dialogConfig.open = false;
                              }
                         }
                    ]
               }
          };
     },
     methods: {
          showAdmin() {
               this.$router.replace({ name: "Admin.Accounts" });
          }
     }
};
</script>

<style>
</style>