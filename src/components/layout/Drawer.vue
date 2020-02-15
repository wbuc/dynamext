<template>
     <v-navigation-drawer clipped app v-model="drawer">
          <v-layout column align-center>
               <v-flex class="mt-5">
                    <v-avatar size="100">
                         <img src="/logo-black.png" alt />
                    </v-avatar>
                    <p class="grey--text text-center subheading mt-1">John Doe</p>
               </v-flex>
               <v-flex class="mb-4 mt-2">
                    <!-- <popup @projectSaved="showSnackbar" /> -->
               </v-flex>
          </v-layout>
          <v-list dense>
               <template v-for="(link, index) in links">
                    <v-divider v-if="link.divider" :key="index" class="my-3"></v-divider>
                    <v-list-item
                         v-else-if="link.route"
                         :key="index"
                         dense
                         router
                         :to="link.route"
                         active-class="secondary--text"
                    >
                         <v-list-item-action>
                              <v-icon>{{link.icon}}</v-icon>
                         </v-list-item-action>
                         <v-list-item-content>
                              <v-list-item-title>{{link.text}}</v-list-item-title>
                         </v-list-item-content>
                    </v-list-item>
               </template>
          </v-list>
     </v-navigation-drawer>
</template>

<script>
import linkConfig from "../../Data/LinkConfig.js";

export default {
     props: { drawer: { required: true, default: true } },
     computed: {
          compDrawer() {
               console.log(this.drawer);
               return this.drawer;
          }
     },
     data() {
          return {
               links: linkConfig.navbar
          };
     }
};
</script>

<style>
</style>