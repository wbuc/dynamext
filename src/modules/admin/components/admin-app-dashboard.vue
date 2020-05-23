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
          <v-row justify="center">
               <v-col
                    :xs="fieldSize.xlarge"
                    :sm="fieldSize.xlarge"
                    :md="fieldSize.xlarge"
                    :lg="fieldSize.large"
               >
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
                         <v-tab key="projectinfo">Project</v-tab>
                         <v-tab key="departments">Departments</v-tab>
                         <v-tab key="responsibility">Responsibility</v-tab>
                         <v-tab key="redflag">Redflag</v-tab>
                         <v-tab key="timeline">Timeline</v-tab>
                         <v-tab key="report">Report</v-tab>
                    </v-tabs>
                    <v-tabs-items
                         v-model="tabsConfig.activeTab"
                         style="background-color:transparent"
                         class="py-5"
                    >
                         <v-tab-item key="projectnifo">
                              <v-form>
                                   <x-form-section title="Project Information">
                                        <x-form-control title="Project Title">
                                             <v-text-field
                                                  style="width:100%"
                                                  outlined
                                                  single-line
                                                  hide-details
                                                  dense
                                                  placeholder="Project Dynamext"
                                             ></v-text-field>
                                        </x-form-control>
                                        <x-form-control title="Description">
                                             <v-textarea
                                                  v-bind:auto-grow="false"
                                                  outlined
                                                  hide-details
                                                  :rows="3"
                                                  placeholder="Sameple project description"
                                             ></v-textarea>
                                        </x-form-control>
                                        <x-form-control title="Client Name">
                                             <v-text-field
                                                  style="width:100%"
                                                  outlined
                                                  single-line
                                                  hide-details
                                                  dense
                                                  placeholder="Achme Industries"
                                                  @click.stop
                                             ></v-text-field>
                                        </x-form-control>
                                        <x-form-control title="Client">
                                             <v-btn-toggle
                                                  v-model="clientSide"
                                                  color="primary"
                                                  borderless
                                                  class="ml-0"
                                             >
                                                  <v-btn value="buyside">Buyside</v-btn>
                                                  <v-btn value="sellside">Sellside</v-btn>
                                             </v-btn-toggle>
                                        </x-form-control>
                                        <x-form-control title="Type">
                                             <v-btn-toggle
                                                  v-model="reportType"
                                                  color="primary"
                                                  borderless
                                                  class="ml-0"
                                             >
                                                  <v-btn value="duediligence">Due Diligence</v-btn>
                                                  <v-btn value="redflag">Red Flag</v-btn>
                                             </v-btn-toggle>
                                        </x-form-control>
                                   </x-form-section>
                                   <x-form-section title="Optional">
                                        <v-row>
                                             <v-col cols="6">
                                                  <x-form-control title="CMN">
                                                       <v-text-field
                                                            style="width:100%"
                                                            outlined
                                                            single-line
                                                            hide-details
                                                            dense
                                                            placeholder="CMN"
                                                       ></v-text-field>
                                                  </x-form-control>
                                             </v-col>
                                             <v-col cols="6">
                                                  <x-form-control title="Partner">
                                                       <v-text-field
                                                            style="width:100%"
                                                            outlined
                                                            single-line
                                                            hide-details
                                                            dense
                                                            placeholder="Partner"
                                                       ></v-text-field>
                                                  </x-form-control>
                                             </v-col>
                                             <v-col cols="6">
                                                  <x-form-control title="Partner (Optional)">
                                                       <v-text-field
                                                            style="width:100%"
                                                            outlined
                                                            single-line
                                                            hide-details
                                                            dense
                                                            placeholder="Partner (optional)"
                                                       ></v-text-field>
                                                  </x-form-control>
                                             </v-col>
                                             <v-col cols="6">
                                                  <x-form-control title="Target">
                                                       <v-text-field
                                                            style="width:100%"
                                                            outlined
                                                            single-line
                                                            hide-details
                                                            dense
                                                            placeholder="Target"
                                                       ></v-text-field>
                                                  </x-form-control>
                                             </v-col>
                                             <v-col cols="6">
                                                  <x-form-control title="Deal Type">
                                                       <v-btn-toggle
                                                            v-model="dealType"
                                                            color="primary"
                                                            borderless
                                                            class="ml-0"
                                                       >
                                                            <v-btn
                                                                 value="sharedeal"
                                                                 color="transparent"
                                                            >Share Deal</v-btn>
                                                            <v-btn
                                                                 value="assetdeal"
                                                                 color="transparent"
                                                            >Asset Deal</v-btn>
                                                       </v-btn-toggle>
                                                  </x-form-control>
                                             </v-col>
                                        </v-row>
                                   </x-form-section>
                                   <x-form-footer>
                                        <tempalte>
                                             <v-btn
                                                  text
                                                  large
                                                  width="120px"
                                                  class="mr-2"
                                                  @click="cancelProject"
                                             >Cancel</v-btn>
                                             <v-btn
                                                  large
                                                  color="primary"
                                                  width="120px"
                                                  @click="saveProject"
                                             >
                                                  <v-icon left>mdi-check-bold</v-icon>
                                                  <span>Save</span>
                                             </v-btn>
                                        </tempalte>
                                   </x-form-footer>
                              </v-form>
                         </v-tab-item>
                         <v-tab-item key="departments">
                              <v-card flat tile background-color="transparent">
                                   <v-card-text>
                                        <v-list-item>Department</v-list-item>
                                        <v-list-item>Department Team</v-list-item>
                                   </v-card-text>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item key="responsibility">
                              <v-card flat tile background-color="transparent">
                                   <v-card-text>
                                        <v-list-item>Responsibility</v-list-item>
                                   </v-card-text>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item key="redflag">
                              <v-card flat tile>
                                   <v-card-text>
                                        <div class="text-center grey--text">Red flag coming soon!</div>
                                   </v-card-text>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item key="timeline">
                              <v-card flat tile background-color="transparent">
                                   <v-card-text>
                                        <v-list-item>Title</v-list-item>
                                        <v-list-item>Date</v-list-item>
                                   </v-card-text>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item key="report">
                              <v-card flat tile>
                                   <v-card-text>
                                        <v-list-item>Report Headings</v-list-item>
                                        <v-list-item>Template Text</v-list-item>
                                   </v-card-text>
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
               fieldSize: {
                    xsmall: 3,
                    small: 4,
                    medium: 6,
                    large: 8,
                    xlarge: 12
               },
               tabsConfig: {
                    activeTab: null,
                    centered: false,
                    grow: false,
                    vertical: false,
                    right: false
               },
               clientSide: "buyside",
               reportType: "duediligence",
               dealType: "sharedeal",
               ripple: "false",
               icon: "justify",
               toggle_none: null,
               toggle_one: 0,
               toggle_exclusive: 2,
               toggle_multiple: [0, 1, 2]
          };
     },
     methods: {
          goBack() {
               this.$router.replace({ name: "Admin.Dashboard" });
          },
          cancelProject() {
               this.$router.replace({ name: "Admin.Dashboard" });
               this.$store.dispatch(
                    "notifyError",
                    `Project information has not been saved.`
               );
          },
          saveProject() {
               this.$store.dispatch(
                    "notifySuccess",
                    `Project information has been saved!`
               );
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