<template>
     <v-container fluid class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Schedules</page-header>
               </v-col>
          </v-row>
          <v-fade-transition mode="out-in">
               <router-view></router-view>
          </v-fade-transition>
     </v-container>
</template>
<script>
export default {
     name: "Schedules",
     data() {
          return {};
     },
     methods: {}
};
</script>
