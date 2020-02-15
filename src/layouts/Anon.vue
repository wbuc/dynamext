<template>
     <v-content>
          <v-container fluid fill-height class="anon-layout">
               <v-layout align-center justify-center class="login">
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
import TransitionPage from "../components/shared/Transition";
export default {
     components: { TransitionPage }
};
</script>

<style scoped>
.anon-layout {
     padding: 0px !important;

     background: rgb(180, 122, 189);
     background: radial-gradient(
          circle,
          rgba(180, 122, 189, 1) 0%,
          rgba(78, 30, 112, 1) 100%
     );

     /* background: rgb(100, 167, 233);
     background: radial-gradient(
          circle,
          rgba(100, 167, 233, 1) 0%,
          rgba(51, 79, 187, 1) 100%
     ); */
}
</style>