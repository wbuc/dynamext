<template>
     <v-container class="my-5">
          <v-row>
               <v-col>
                    <page-header>Administration</page-header>
               </v-col>
          </v-row>
          <admin-dashboard></admin-dashboard>
     </v-container>
</template>
<script>
import AdminDashboard from "@/modules/admin/components/Admin.Dashboard";
export default {
     components: { AdminDashboard },
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