<template>
     <div>
          <!-- <v-card elevation="3" class="mt-2">
               <v-row no-gutters class="mb-3">
                    <v-col cols="12" xs="12" sm="12" md="6">
                         <div class="pa-3">
                              <v-list-item class="subtitle-1 pl-0">
                                   <v-btn text icon class="mr-2" @click="goBack">
                                        <v-icon color="secondary">mdi-arrow-left-bold</v-icon>
                                   </v-btn>
                                   <span>Accounts</span>
                              </v-list-item>
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
          </v-card>-->
          <x-toolbar>
               <template v-slot:default>
                    <v-btn text icon class="mr-2" @click="goBack">
                         <v-icon color="secondary">mdi-arrow-left-bold</v-icon>
                    </v-btn>
                    <span>Accounts</span>
               </template>
               <template v-slot:right></template>
          </x-toolbar>
          <v-row>
               <v-col>
                    <x-data-table
                         :toolbarActions="toolbarActions"
                         :data="userData"
                         :headers="userHeaders"
                         :dataItemActions="itemActions"
                         :quickEditFields="quickEditFields"
                         @itemEditDone="saveDataItem"
                         @newClicked="handleNewClick"
                         @editClicked="handleEditClick"
                         @deleteClicked="handleDeleteClick"
                    ></x-data-table>
               </v-col>
          </v-row>
          <account-detail :showDialog="showDetail" @detailClosed="showDetail =false"></account-detail>
     </div>
</template>

<script>
import DataTable from "@/components/table/Data-Table";
import AccountDetail from "./Accounts.Detail";

export default {
     name: "Accounts.Dashboard",
     components: { "x-data-table": DataTable, "account-detail": AccountDetail },
     data() {
          return {
               breadcrumbs: [
                    {
                         text: "Admin",
                         disabled: false,
                         link: true,
                         to: { name: "Admin" }
                    },
                    {
                         text: "Accounts",
                         disabled: true,
                         link: true
                    }
               ],
               toolbarActions: {
                    showNew: true,
                    showEdit: true,
                    showDelete: true,
                    custom: [
                         {
                              text: "Summary",
                              icon: "change_history",
                              color: "teal accent-3",
                              action: items => {
                                   // List of selected items in the data table.
                                   console.log(items);
                              }
                         },
                         {
                              text: "Histoy",
                              icon: "bar_chart",
                              color: "orange",
                              action: items => {
                                   // this.showDialog = true;
                                   // List of selected items in the data table.
                                   console.log(items);
                              }
                         },
                         {
                              text: "Disable",
                              icon: "accessible_forward",

                              action: items => {
                                   console.log(items);
                              }
                         }
                    ]
               },
               userData: [],
               userHeaders: [
                    {
                         text: "Id",
                         value: "id",
                         width: "20%"
                    },
                    {
                         text: "Email",
                         value: "email",
                         width: "40%"
                    },
                    {
                         text: "Favourite Colour",
                         value: "colour",
                         width: "25%"
                    },
                    {
                         text: "",
                         value: "action",
                         sortable: false,
                         align: "end",
                         width: "15%"
                    }
               ],
               itemActions: [
                    {
                         title: "Edit",
                         icon: "mdi-pencil",
                         color: "secondary--text",
                         action: item => console.log("editing ", item.email)
                    },
                    {
                         title: "Delete",
                         icon: "mdi-delete",
                         color: "error--text",
                         action: item => console.log("deleting ", item.email)
                    }
               ],
               quickEditFields: [{ name: "email", type: "text" }],
               showDetail: false
          };
     },
     methods: {
          handleNewClick() {
               console.log("new emitted!");
               this.showDetail = true;
          },
          handleEditClick(data) {
               console.log("edit emitted ", data);
          },
          handleDeleteClick(data) {
               // do delete stuff here call api ect.
               console.log("Delete emitted ", data);

               //check if it makes sense to trigger notification from here or from the component itself.
               this.$store.dispatch("notifySuccess", "Accounts deleted!");
          },
          saveDataItem(item) {
               console.log("Event emitted: ", item);
          },
          closeModal() {
               this.showModal = false;
          },
          goBack() {
               this.$router.replace({ name: "Admin.Dashboard" });
          }
     },
     // before access to the DOM elements.
     created() {},
     // when access to the DOM elements
     mounted() {
          this.$store.dispatch("getUsers").then(data => {
               data.forEach(item => {
                    item.quickEdit = {
                         email: false,
                         color: false
                    };
               });
               this.userData = data;
          });
     }
};
</script>

<style>
</style>