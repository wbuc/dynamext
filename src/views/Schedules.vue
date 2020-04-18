<template>
     <v-container fluid class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Schedules</page-header>
               </v-col>
          </v-row>
          <transition-page>
               <router-view></router-view>
          </transition-page>
     </v-container>
</template>
<script>
import TransitionPage from "@/components/shared/Transition";

export default {
     name: "Schedules",
     components: { TransitionPage },
     data() {
          return {};
     },
     methods: {}
};
</script>
20, 12, 12 = 42
48