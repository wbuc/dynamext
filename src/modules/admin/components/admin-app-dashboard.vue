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
                         <v-tab-item key="projectinfo">
                              <project></project>
                         </v-tab-item>
                         <v-tab-item key="departments">
                              <departments></departments>
                         </v-tab-item>
                         <v-tab-item key="responsibility">
                              <responsibility></responsibility>
                         </v-tab-item>
                         <v-tab-item key="redflag">
                              <redflag></redflag>
                         </v-tab-item>
                         <v-tab-item key="timeline">
                              <timeline></timeline>
                         </v-tab-item>
                         <v-tab-item key="report">
                              <report></report>
                         </v-tab-item>
                    </v-tabs-items>
               </v-col>
          </v-row>
     </div>
</template>

<script>
export default {
     name: "admin-app-dashboard",
     components: {
          project: () => import("./admin-app-project-detail"),
          departments: () => import("./admin-app-departments-detail"),
          responsibility: () => import("./admin-app-responsibility-detail"),
          redflag: () => import("./admin-app-redflag-detail"),
          timeline: () => import("./admin-app-timeline-detail"),
          report: () => import("./admin-app-report-detail")
     },
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
               }
          };
     },
     methods: {
          goBack() {
               this.$router.replace({ name: "Admin.Dashboard" });
          }
     },
     created() {},
     mounted() {}
};
</script>

<style>
</style>