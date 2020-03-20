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
                    ></x-data-table>
               </v-col>
          </v-row>
          <v-dialog v-model="showDialog" max-width="290">
               <v-card>
                    <v-card-title class="headline">Use Google's location service?</v-card-title>

                    <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

                    <v-card-actions>
                         <v-spacer></v-spacer>

                         <v-btn color="green darken-1" text @click="showDialog = false">Disagree</v-btn>

                         <v-btn color="green darken-1" text @click="showDialog = false">Agree</v-btn>
                    </v-card-actions>
               </v-card>
          </v-dialog>
     </v-container>
</template>

<script>
import DataTable from "@/components/table/Data-Table";

export default {
     components: { "x-data-table": DataTable },
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
                    showNew: false,
                    showEdit: false,
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
                              color: "pink accent-3",
                              action: items => {
                                   this.showDialog = true;
                                   // List of selected items in the data table.
                                   console.log(items);
                              }
                         }
                    ]
               },
               userData: [],
               userHeaders: [
                    { text: "Id", value: "id", width: "20%" },
                    { text: "Email", value: "email", width: "40%" },
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
               quickEditFields: [{ name: "email" }],
               showDialog: false
          };
     },
     methods: {
          saveDataItem(item) {
               console.log("Event emitted: ", item);
          }
     },
     // before access to the DOM elements.
     created() {},
     // when access to the DOM elements
     mounted() {
          this.$store.dispatch("getUsers").then(data => {
               data.forEach(item => {
                    item.quickEdit = {
                         email: false
                    };
               });
               this.userData = data;
          });
     }
};
</script>

<style>
</style>