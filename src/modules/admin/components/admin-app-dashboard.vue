<template>
     <div>
          <x-toolbar>
               <template v-slot:default>
                    <v-btn text icon class="mr-2" @click="goBack">
                         <v-icon color="secondary">mdi-arrow-left-bold</v-icon>
                    </v-btn>
                    <span>Application Data</span>
               </template>
          </x-toolbar>
          <v-row>
               <v-col>
                    <v-tabs
                         v-model="tabsConfig.activeTab"
                         background-color="transparent"
                         color="grey"
                         class="elevation-0"
                         :centered="tabsConfig.centered"
                         :grow="tabsConfig.grow"
                         :vertical="tabsConfig.vertical"
                         :right="tabsConfig.right"
                    >
                         <v-tabs-slider color="primary"></v-tabs-slider>
                         <v-tab key="departments">Departments</v-tab>
                         <v-tab key="redflag">Redflag</v-tab>
                         <v-tab key="timeline">Timeline</v-tab>
                    </v-tabs>
                    <v-tabs-items
                         v-model="tabsConfig.activeTab"
                         style="background-color:transparent"
                         class="py-3"
                    >
                         <v-tab-item key="departments">
                              my content
                              <v-card flat tile background-color="transparent">
                                   <v-card-text>This is for the departments</v-card-text>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item key="redflag">
                              <v-card flat tile>
                                   <v-card-text>This is for the redflag</v-card-text>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item key="timeline">
                              <v-card flat tile>
                                   <v-card-text>This is for the timeline</v-card-text>
                              </v-card>
                         </v-tab-item>
                    </v-tabs-items>
               </v-col>
          </v-row>
     </div>
</template>

<script>
export default {
     name: "Accounts.AppConfig.Dashboard",
     components: {},
     data() {
          return {
               tabsConfig: {
                    activeTab: null,
                    centered: false,
                    grow: false,
                    vertical: false,
                    right: false
               }
          };
     },
     methods: {
          goBack() {
               this.$router.replace({ name: "Admin.Dashboard" });
          }
     },
     // before access to the DOM elements.
     created() {},
     // when access to the DOM elements
     mounted() {
          // this.$store.dispatch("getUsers").then(data => {
          //      data.forEach(item => {
          //           item.quickEdit = {
          //                email: false,
          //                color: false
          //           };
          //      });
          //      this.userData = data;
          // });
     }
};
</script>

<style>
</style>