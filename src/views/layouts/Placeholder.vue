<template>
     <v-content>
          <v-container fluid fill-height>
               <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md3>
                         <transition-page>
                              <slot></slot>
                         </transition-page>
                    </v-flex>
               </v-layout>
          </v-container>
     </v-content>
</template>

<script>
import TransitionPage from "@/components/shared/Transition";
export default {
     components: { TransitionPage }
};
</script>

<style scoped>
</style>