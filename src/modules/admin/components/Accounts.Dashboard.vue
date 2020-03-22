<template>
     <v-container class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Accounts</page-header>
                    <x-breadcrumb :links="breadcrumbs"></x-breadcrumb>
               </v-col>
          </v-row>
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
     </v-container>
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
                              color: "pink",
                              action: items => {
                                   // this.showDialog = true;
                                   // List of selected items in the data table.
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
               quickEditFields: [{ name: "email" }, { name: "colour" }],
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

               //the notification will be driven from the state after the API has been called. Only putting here for testing.
               this.$store.dispatch("notifySuccess", "Accounts deleted!");
          },
          saveDataItem(item) {
               console.log("Event emitted: ", item);
          },
          closeModal() {
               this.showModal = false;
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
                         colour: false
                    };
               });
               this.userData = data;
          });
     }
};
</script>

<style>
</style>