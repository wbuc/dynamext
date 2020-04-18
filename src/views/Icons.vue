<template>
     <v-container class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>
                         <v-icon large left class="grey--text">mdi-material-design</v-icon>Material Icons
                    </page-header>
               </v-col>
          </v-row>
          <v-row>
               <v-col>
                    <v-card flat class="pa-5">
                         <div>
                              <v-btn
                                   large
                                   class="mx-0 font-weight-light"
                                   color="accent"
                                   href="https://cdn.materialdesignicons.com/5.0.45/"
                                   target="_blank"
                                   round
                              >
                                   <span>Seel All Icons</span>
                              </v-btn>
                         </div>
                         <v-layout align-center wrap mt-2>
                              <v-list>
                                   <v-list-item
                                        v-for="(icon, index) in icons"
                                        :key="index"
                                        active-class="secondary--text"
                                   >
                                        <v-list-item-action>
                                             <v-icon color="primary" left>{{icon}}</v-icon>
                                        </v-list-item-action>
                                        <v-list-item-content>
                                             <v-list-item-title>{{icon}}</v-list-item-title>
                                        </v-list-item-content>
                                   </v-list-item>
                              </v-list>
                         </v-layout>
                    </v-card>
               </v-col>
          </v-row>
     </v-container>
</template>

<script>
export default {
     data() {
          return {
               icons: [
                    "add_box",
                    "mdi-close-thick",
                    "more_vert",
                    "settings",
                    "linear_scale",
                    "mdi-chevron-right",
                    "mdi-chevron-left",
                    "mdi-delete",
                    "mdi-content-duplicate",
                    "exit_to_app",
                    "mdi-file-document",
                    "mdi-table-large",
                    "mdi-file-find",
                    "mdi-pencil",
                    "mdi-stop"
               ]
          };
     },
     methods: {}
};
</script>

<style>
</style>