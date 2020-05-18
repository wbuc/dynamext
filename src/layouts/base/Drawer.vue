<template>
     <v-card>
          <v-navigation-drawer v-model="drawer" app clipped>
               <v-layout column align-center>
                    <v-flex class="mt-5">
                         <v-avatar size="100">
                              <img src="/logo-user1.jpg" alt />
                         </v-avatar>
                         <p class="grey--text text-center subheading mt-1">Wessel Büchling</p>
                    </v-flex>
                    <v-flex class="mb-4 mt-2"></v-flex>
               </v-layout>
               <v-list dense nav>
                    <template v-for="(link, index) in links">
                         <v-divider v-if="link.divider" :key="index" class="my-3"></v-divider>
                         <v-list-item
                              v-else-if="link.route"
                              :to="link.route"
                              link
                              :key="index"
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
     </v-card>
</template>

<script>
import linkConfig from "@/config/navigationLinks";
export default {
     name: "Drawer",
     props: { drawer: { default: true } },
     data() {
          return {
               links: linkConfig.drawer
          };
     }
};
</script>

<style>
</style>