<template>
     <v-row wrap>
          <v-col cols="12" sm="6" md="4" lg="3" v-for="(tile, index) in tiles" :key="index">
               <dashboard-tile
                    :title="tile.title"
                    :primaryAction="tile.action"
                    router
                    :to="{name:'Account'}"
               >
                    <template v-slot:description>{{tile.description}}</template>
               </dashboard-tile>
          </v-col>
     </v-row>
</template>

<script>
import dashboardTile from "@/components/cards/Card-Basic-1";

export default {
     components: { dashboardTile },
     data() {
          return {
               tiles: [
                    {
                         title: "Accounts",
                         description: "Manage all user accounts",
                         action: () =>
                              this.$router.replace({ name: "Accounts" }),
                         route: { name: "Accounts" }
                    },
                    {
                         title: "Data Rooms",
                         description: "Manage all data import and exports",
                         action: () => console.log("show dataroom"),
                         route: { name: "Home" }
                    },
                    {
                         title: "Schedules",
                         description:
                              "Configure and maintain document schedules",
                         action: () => console.log("show schedules"),
                         route: { name: "Home" }
                    },
                    {
                         title: "Document Data",
                         description:
                              "View and manage documents and related data.",
                         action: () => console.log("show dataroom"),
                         route: { name: "Home" }
                    }
               ]
          };
     }
};
</script>

<style>
</style>