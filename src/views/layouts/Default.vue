<template>
     <div>
          <x-notification></x-notification>
          <Navbar />
          <v-content>
               <transition-page>
                    <slot />
               </transition-page>
          </v-content>
     </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import TransitionPage from "@/components/shared/Transition";

export default {
     name: "DefaultLayout",
     components: { Navbar, TransitionPage },
     computed: {},
     data() {
          return {};
     },
     methods: {}
};
</script>

<style>
</style>