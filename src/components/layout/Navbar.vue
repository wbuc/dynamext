<template>
     <div>
          <!-- DRAWER -->
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
                    <template v-for="(link, index) in drawerLinks">
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
          <!-- TOPBAR -->
          <v-app-bar clipped-left :flat="false" app>
               <v-app-bar-nav-icon class="grey--text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
               <v-toolbar-title class="text-uppercase grey--text">
                    <span class="font-weight-light">Dynam</span>
                    <span>ext</span>
               </v-toolbar-title>
               <v-spacer></v-spacer>
               <v-btn @click="setTheme" icon color="orange darken-4">
                    <v-icon>wb_sunny</v-icon>
               </v-btn>

               <v-menu offset-y transition="slide-y-transition">
                    <template v-slot:activator="{ on }">
                         <v-btn text color="grey" dark v-on="on">
                              <v-icon left>expand_more</v-icon>
                              <span>Menu</span>
                         </v-btn>
                    </template>
                    <v-list>
                         <v-list-item
                              v-for="(link, index) in navbarLinks"
                              :key="index"
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
                    </v-list>
               </v-menu>
               <v-btn @click="logout" text color="grey">
                    <span>Sign Out</span>
                    <v-icon right>exit_to_app</v-icon>
               </v-btn>
          </v-app-bar>
     </div>
</template>

<script>
import linkConfig from "@/config/navigationLinks";
import { mapGetters } from "vuex";

export default {
     name: "Navbar",
     data() {
          return {
               drawer: true,
               goDark: false,
               navbarLinks: linkConfig.navbar,
               drawerLinks: linkConfig.drawer
          };
     },
     computed: {
          ...mapGetters(["isAuthenticated", "isLoading"])
     },
     methods: {
          setTheme() {
               this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          },
          logout() {
               this.$store.dispatch("logout");
          }
     }
};
</script>

<style>
</style>