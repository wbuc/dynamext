<template>
     <v-container fluid class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Administration</page-header>
               </v-col>
          </v-row>
          <v-fade-transition mode="out-in">
               <router-view></router-view>
          </v-fade-transition>
     </v-container>
</template>
<script>
export default {
     name: "Admin",

     data() {
          return {
               tiles: [
                    {
                         title: "Accounts",
                         description: "Manage all user accounts",
                         action: () => console.log("show accounts"),
                         route: ""
                    },
                    {
                         title: "Data Rooms",
                         description: "Manage all data import and exports",
                         action: () => console.log("show dataroom")
                    },
                    {
                         title: "Schedules",
                         description:
                              "Configure and maintain document schedules",
                         action: () => console.log("show schedules")
                    },
                    {
                         title: "Document Data",
                         description:
                              "View and manage documents and related data.",
                         action: () => console.log("show dataroom")
                    }
               ]
          };
     },
     methods: {
          showAccounts() {
               console.log("show accounts");
          },
          showDataImport() {
               console.log("show import");
          }
     }
};
</script>