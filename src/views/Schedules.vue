<template>
     <v-container fluid class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Schedules</page-header>
               </v-col>
          </v-row>
          <schedule-dashboard></schedule-dashboard>
     </v-container>
</template>
<script>
import ScheduleDashboard from "@/modules/schedules/components/Schedules.Dashboard";
export default {
     name: "Schedules",
     components: { ScheduleDashboard },
     data() {
          return {};
     },
     methods: {}
};
</script>