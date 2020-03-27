<template>
     <v-container class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Fileroom</page-header>
               </v-col>
          </v-row>
          <fileroom-dashboard></fileroom-dashboard>
     </v-container>
</template>

<script>
import FileroomDashboard from "@/modules/fileroom/components/Fileroom.Dashboard";
export default {
     components: { FileroomDashboard }
};
</script>

<style>
</style>