<template>
     <v-container class="my-5">
          <v-row>
               <v-col>
                    <page-header>Administration</page-header>
               </v-col>
          </v-row>
          <v-row wrap>
               <v-col cols="12" sm="6" md="4" lg="3" v-for="(tile, index) in tiles" :key="index">
                    <dashboard-tile :title="tile.title" :primaryAction="tile.action">
                         <template v-slot:description>{{tile.description}}</template>
                    </dashboard-tile>
               </v-col>
          </v-row>
     </v-container>
</template>
<script>
import DashboardTile from "@/components/cards/Card-Basic-1";

export default {
     components: { DashboardTile },
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