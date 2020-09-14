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
                                   <template v-slot:title="{item}">{{item.displayName}}</template>
                                   <template v-slot:actions="{ item }">
                                        <v-btn small icon @click="editItem(item)">
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
               <template v-slot:title>{{dialogConfig.title}}</template>
               <template>
                    <x-form-section flat dense>
                         <x-form-control title="Name" dense>
                              <v-text-field
                                   v-model="currentDepartment.name"
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
          <x-confirmation
               :show="deleteConfirmConfig.open"
               @confirmAction="deleteConfirmConfig.confirmAction"
               @cancelAction="deleteConfirmConfig.cancelAction"
          >
               <template v-slot:title>{{deleteConfirmConfig.title}}</template>
               <template v-slot:text>{{deleteConfirmConfig.text}}</template>
          </x-confirmation>
     </div>
</template>

<script>
export default {
     name: "admin.app.department.detail",
     data() {
          return {
               url: "/department",
               listTicker: 1, // used to force the list refresh
               dialogConfig: {
                    open: false,
                    title: null,
                    newActions: [
                         {
                              text: "Close",
                              color: "error",
                              action: () => {
                                   this.dialogConfig.open = false;
                              }
                         },
                         {
                              text: "Save",
                              color: "primary",
                              action: () => {
                                   this.$store
                                        .dispatch(
                                             "saveDepartment",
                                             this.currentDepartment
                                        )
                                        .then(() => {
                                             this.$store.dispatch(
                                                  "notifySuccess",
                                                  `${this.currentDepartment.name} created!`
                                             );
                                             this.refresh();
                                        });
                                   this.dialogConfig.open = false;
                              }
                         }
                    ],
                    editActions: [
                         {
                              text: "Close",
                              color: "error",
                              action: () => {
                                   this.dialogConfig.open = false;
                              }
                         },
                         {
                              text: "Update",
                              color: "primary",
                              action: () => {
                                   this.$store
                                        .dispatch(
                                             "updateAdminDepartmentDetail",
                                             this.currentDepartment
                                        )
                                        .then(() => {
                                             this.$store.dispatch(
                                                  "notifySuccess",
                                                  `${this.currentDepartment.name} has been updated!`
                                             );
                                             this.refresh();
                                        });
                                   this.dialogConfig.open = false;
                              }
                         }
                    ],
                    actions: []
               },
               deleteConfirmConfig: {
                    open: false,
                    title: null,
                    text: null,
                    confirmAction: () => {
                         this.$store
                              .dispatch(
                                   "deleteAdminDepartment",
                                   this.currentDepartment
                              )
                              .then(() => {
                                   this.$store.dispatch(
                                        "notifySuccess",
                                        `${this.currentDepartment.name} has been deleted!`
                                   );
                                   this.refresh();
                              });
                         this.deleteConfirmConfig.open = false;
                    },
                    cancelAction: () => {
                         this.deleteConfirmConfig.open = false;
                         this.currentDepartment = {};
                    }
               },
               currentDepartment: {}
          };
     },
     methods: {
          refresh() {
               this.listTicker++;
          },
          newItem() {
               // Dialog presets
               this.dialogConfig.title = "New department";
               this.dialogConfig.actions = this.dialogConfig.newActions;
               // Empty object
               this.currentDepartment = { name: "" };
               // show dialog when ready
               this.dialogConfig.open = true;
          },
          editItem(item) {
               // Dialog presets
               this.dialogConfig.title = "Edit department";
               this.dialogConfig.actions = this.dialogConfig.editActions;
               // fetch item data from the server.
               this.$store
                    .dispatch("getAdminDepartmentDetail", item)
                    .then(data => {
                         this.currentDepartment = data;
                         this.dialogConfig.open = true;
                    });
          },
          deleteItem(item) {
               // Always set the current item being used in any dialog.
               this.currentDepartment = item;
               // Dialog presets
               this.deleteConfirmConfig.title = "Delete department";
               this.deleteConfirmConfig.text = `Are you sure you want to delete ${this.currentDepartment.name}?`;
               // Show dialog when ready
               this.deleteConfirmConfig.open = true;
          }
     },
     created() {},
     mounted() {}
};
</script>
<style>
</style>