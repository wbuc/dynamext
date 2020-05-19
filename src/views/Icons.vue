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
               <v-col>
                    <v-card>
                         <v-list-item>
                              <v-list-item-action>
                                   <v-icon color="primary" class="mdi-18px" left>mdi-donkey</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                   <v-list-item-title>mdi-18px</v-list-item-title>
                              </v-list-item-content>
                         </v-list-item>
                         <v-list-item>
                              <v-list-item-action>
                                   <v-icon color="primary" class="mdi-24px" left>mdi-donkey</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                   <v-list-item-title>mdi-24px</v-list-item-title>
                              </v-list-item-content>
                         </v-list-item>
                         <v-list-item>
                              <v-list-item-action>
                                   <v-icon color="primary" class="mdi-36px" left>mdi-donkey</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                   <v-list-item-title>mdi-36px</v-list-item-title>
                              </v-list-item-content>
                         </v-list-item>
                         <v-list-item>
                              <v-list-item-action>
                                   <v-icon color="primary" class="mdi-48px" left>mdi-donkey</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                   <v-list-item-title>mdi-48px</v-list-item-title>
                              </v-list-item-content>
                         </v-list-item>
                    </v-card>
                    <v-card class="my-6">
                         <v-list-item>
                              <v-list-item-action>
                                   <v-icon color="accent" class left>mdi-check-bold</v-icon>
                              </v-list-item-action>
                              <v-list-item-action>
                                   <v-icon color="primary" class="mdi-flip-h" left>mdi-check-bold</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                   <v-list-item-title>mdi-flip-h</v-list-item-title>
                              </v-list-item-content>
                         </v-list-item>
                         <v-list-item>
                              <v-list-item-action>
                                   <v-icon color="accent" class left>mdi-elevator-up</v-icon>
                              </v-list-item-action>
                              <v-list-item-action>
                                   <v-icon color="primary" class="mdi-flip-v" left>mdi-elevator-up</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                   <v-list-item-title>mdi-flip-v</v-list-item-title>
                              </v-list-item-content>
                         </v-list-item>
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
                    "mdi-plus-box",
                    "mdi-plus-thick",
                    "mdi-plus-box-outline",
                    "mdi-plus",
                    "mdi-close-thick",
                    "mdi-do-not-disturb",
                    "more_vert",
                    "mdi-cloud-upload",
                    "mdi-information-outline",
                    "mdi-open-in-new",
                    "settings",
                    "mdi-check",
                    "mdi-check-bold",
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
                    "mdi-stop",
                    "mdi-clock",
                    "mdi-do-not-disturb"
               ]
          };
     },
     methods: {}
};
</script>

<style>
</style>