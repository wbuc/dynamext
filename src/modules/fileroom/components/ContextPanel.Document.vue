<template>
     <div>
          <v-card class="mb-5" :elevation="contextPanelConfig.elevation">
               <v-card-title flat class="pa-3">
                    <div>
                         <v-icon class="mr-2" color="warning lighten-1">mdi-file-document</v-icon>
                         <span class="title font-weight-light">{{nodeData.name}}</span>
                    </div>
                    <v-spacer></v-spacer>
                    <v-btn id="doc-actions" icon text dark color="grey" class="x-branch-activator">
                         <v-icon>more_vert</v-icon>
                         <span></span>
                    </v-btn>
                    <v-menu offset-y transition="slide-y-transition" activator="#doc-actions">
                         <v-list>
                              <v-list-item
                                   v-for="(dataItem, index) in documentQuickActions"
                                   :key="index"
                                   @click="dataItem.action(index)"
                                   active-class="secondary--text"
                                   dense
                              >
                                   <v-list-item-action>
                                        <v-icon :class="dataItem.color" small>{{dataItem.icon}}</v-icon>
                                   </v-list-item-action>
                                   <v-list-item-content>
                                        <v-list-item-title>{{dataItem.title}}</v-list-item-title>
                                   </v-list-item-content>
                              </v-list-item>
                         </v-list>
                    </v-menu>
               </v-card-title>
               <div style="height:3px">
                    <div v-show="api.loading">
                         <v-progress-linear indeterminate height="3" color="primary"></v-progress-linear>
                    </div>
               </div>

               <div class="pt-5 mb-2 mx-4">
                    <v-row no-gutters>
                         <v-col
                              cols="12"
                              :xs="fieldSize.xlarge"
                              :sm="fieldSize.large"
                              :md="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                              :lg="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                         >
                              <div class="pa-3">
                                   <span class="grey--text">Review Status</span>
                                   <div>
                                        <v-select
                                             :items="lookupData.reviewStatus"
                                             v-model="nodeData.reviewStatus"
                                             item-text="displayName"
                                             item-value="value"
                                             dense
                                             outlined
                                        ></v-select>
                                   </div>
                              </div>
                         </v-col>
                         <v-col
                              cols="12"
                              :xs="fieldSize.xlarge"
                              :sm="fieldSize.large"
                              :md="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                              :lg="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                         >
                              <div class="pa-3">
                                   <span class="grey--text">Red Flag Status</span>
                                   <div>
                                        <v-select
                                             :items="lookupData.redFlagStatus"
                                             v-model="nodeData.redFlagStatus"
                                             item-text="displayName"
                                             item-value="value"
                                             dense
                                             outlined
                                        ></v-select>
                                   </div>
                              </div>
                         </v-col>
                    </v-row>
                    <v-row no-gutters>
                         <v-col
                              cols="12"
                              :xs="fieldSize.xlarge"
                              :sm="fieldSize.large"
                              :md="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                              :lg="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                         >
                              <div class="pa-3">
                                   <span class="grey--text">Reviewer</span>
                                   <div>
                                        <v-select
                                             :items="lookupData.reviewers"
                                             v-model="nodeData.reviewer"
                                             item-text="displayName"
                                             item-value="value"
                                             dense
                                             outlined
                                        ></v-select>
                                   </div>
                              </div>
                         </v-col>
                         <v-col
                              cols="12"
                              :xs="fieldSize.xlarge"
                              :sm="fieldSize.large"
                              :md="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                              :lg="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                         >
                              <div class="pa-3">
                                   <span class="grey--text">Department</span>
                                   <div>
                                        <v-select
                                             :items="lookupData.departments"
                                             v-model="nodeData.department"
                                             item-text="displayName"
                                             item-value="value"
                                             dense
                                             outlined
                                        ></v-select>
                                   </div>
                              </div>
                         </v-col>
                         <v-col
                              cols="12"
                              :xs="fieldSize.xlarge"
                              :sm="fieldSize.large"
                              :md="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                              :lg="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                         >
                              <div class="pa-3">
                                   <span class="grey--text">Responsibility</span>
                                   <div>
                                        <v-select
                                             :items="lookupData.responsibility"
                                             v-model="nodeData.responsibility"
                                             item-text="displayName"
                                             item-value="value"
                                             dense
                                             outlined
                                        ></v-select>
                                   </div>
                              </div>
                         </v-col>

                         <v-col
                              cols="12"
                              :xs="fieldSize.xlarge"
                              :sm="fieldSize.large"
                              :md="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                              :lg="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                         >
                              <div class="pa-3">
                                   <span class="grey--text">Scope of Review</span>
                                   <div>
                                        <v-select
                                             :items="lookupData.scopeOfReview"
                                             v-model="nodeData.scopeOfReview"
                                             item-text="displayName"
                                             item-value="value"
                                             dense
                                             outlined
                                        ></v-select>
                                   </div>
                              </div>
                         </v-col>

                         <v-col
                              cols="12"
                              :xs="fieldSize.xlarge"
                              :sm="fieldSize.large"
                              :md="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                              :lg="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                         >
                              <div class="pa-3">
                                   <span class="grey--text">Language</span>
                                   <div>
                                        <v-text-field
                                             outlined
                                             single-line
                                             hide-details
                                             dense
                                             v-model="nodeData.language"
                                        ></v-text-field>
                                   </div>
                              </div>
                         </v-col>
                         <v-col
                              cols="12"
                              :xs="fieldSize.xlarge"
                              :sm="fieldSize.large"
                              :md="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                              :lg="contextPanelConfig.expanded ? fieldSize.large : fieldSize.medium"
                         >
                              <div class="pa-3">
                                   <span class="grey--text">Reviewed Date</span>
                                   <div>
                                        <!-- <v-date-picker
                                             v-model="nodeData.reviewedDate"
                                             color="green lighten-1"
                                             header-color="primary"
                                        ></v-date-picker>-->
                                   </div>
                              </div>
                         </v-col>
                    </v-row>
                    <v-divider></v-divider>
               </div>

               <v-card-actions class="pr-4 mt-2 pb-4">
                    <v-spacer></v-spacer>

                    <v-btn text large outlined color width="120px" @click="saveDocumentDetail">
                         <v-icon left color="primary">mdi-check-bold</v-icon>
                         <span>Save</span>
                    </v-btn>
               </v-card-actions>
          </v-card>
          <v-expansion-panels
               :accordion="contextPanelConfig.accordion"
               :popout="contextPanelConfig.popout"
               :inset="contextPanelConfig.inset"
               :multiple="contextPanelConfig.multiple"
               :focusable="contextPanelConfig.focusable"
               :disabled="contextPanelConfig.disabled"
               :readonly="contextPanelConfig.readonly"
               :flat="contextPanelConfig.flat"
               :hover="contextPanelConfig.hover"
               :tile="contextPanelConfig.tile"
               :class="`mb-5 elevation-${contextPanelConfig.elevation}`"
          >
               <v-expansion-panel key="findings">
                    <v-expansion-panel-header>
                         <span>
                              <span class="headline">
                                   <v-icon class="mr-2" color="success lighten-1">mdi-information</v-icon>
                                   {{ nodeData.findings.count +' '}}
                              </span>
                              <span class="font-weight-light headline grey--text">findings</span>
                         </span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                         <div class="text-center grey--text py-10">Findings coming soon!</div>
                    </v-expansion-panel-content>
               </v-expansion-panel>
          </v-expansion-panels>
          <v-expansion-panels
               :accordion="contextPanelConfig.accordion"
               :popout="contextPanelConfig.popout"
               :inset="contextPanelConfig.inset"
               :multiple="contextPanelConfig.multiple"
               :focusable="contextPanelConfig.focusable"
               :disabled="contextPanelConfig.disabled"
               :readonly="contextPanelConfig.readonly"
               :flat="contextPanelConfig.flat"
               :hover="contextPanelConfig.hover"
               :tile="contextPanelConfig.tile"
               :class="`mb-5 elevation-${contextPanelConfig.elevation}`"
          >
               <v-expansion-panel key="schedules">
                    <v-expansion-panel-header>
                         <span>
                              <span class="headline">
                                   <v-icon class="mr-2" color="purple lighten-2">mdi-table-large</v-icon>
                                   {{ nodeData.schedules.count +' '}}
                              </span>
                              <span class="font-weight-light headline grey--text">schedules</span>
                         </span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                         <div
                              v-if="!nodeData.schedules.children.length "
                              class="text-center grey--text py-10"
                         >This document does not have any schedules.</div>
                         <x-forms-runtime :form="nodeData.schedules.children[0]" :key="nodeData.id"></x-forms-runtime>
                    </v-expansion-panel-content>
               </v-expansion-panel>
          </v-expansion-panels>

          <x-dialog
               :show="selectScheduleContext.open"
               :actions="selectScheduleContext.dialogActions"
               :config="selectScheduleContext.config"
          >
               <template v-slot:title>Select schedules</template>
               <x-multi-select
                    :listData="selectScheduleContext.data"
                    :selectedListData="selectScheduleContext.selectedData"
                    @selectedList="selectScheduleContext.updateSelectedList"
                    :key="selectScheduleContext.refreshIndex"
               ></x-multi-select>
          </x-dialog>
     </div>
</template>

<script>
import { mapGetters } from "vuex";
import { eventBus } from "@/plugins/eventbus.js";

import formsRuntime from "@/modules/schedules/components/runtime/Schedules.Runtime";

export default {
     name: "Fileroom.ContextPanel.Document",
     components: { "x-forms-runtime": formsRuntime },
     props: {
          nodeData: {
               Type: Object,
               default: () => {
                    return {
                         id: 0,
                         name: null,
                         type: null,
                         reviewStatus: null,
                         department: null,
                         responsibility: null,
                         redFlagStatus: null,
                         reviewer: null,
                         reviewedDate: null,
                         language: null,
                         scopeOfReview: null,
                         documents: {
                              count: 0,
                              children: []
                         },
                         findings: {
                              count: 0,
                              children: []
                         },
                         schedules: {
                              count: 0,
                              children: []
                         }
                    };
               }
          },
          contextPanelConfig: {
               Type: Object,
               default: () => {
                    return {
                         accordion: false,
                         popout: false,
                         inset: false,
                         multiple: true,
                         disabled: false,
                         readonly: false,
                         focusable: true,
                         flat: false,
                         hover: false,
                         tile: false,
                         expanded: false,
                         elevation: 3
                    };
               }
          }
     },
     computed: {
          ...mapGetters(["api"]),
          reviewStatusDisplay() {
               let val = null;
               for (const i of this.lookupReviewStatus) {
                    i.value === this.nodeData.reviewStatus
                         ? (val = i.text)
                         : null;
               }
               return val;
          }
     },
     data() {
          return {
               fieldSize: {
                    small: 3,
                    medium: 4,
                    large: 6,
                    xlarge: 12
               },
               selectScheduleContext: {
                    open: false,
                    refreshIndex: 0,
                    config: {
                         width: 600,
                         maxWidth: 1200,
                         overlayOpacity: 0.7,
                         overlayColor: "#686868",
                         persistent: true
                    },
                    dialogActions: [
                         {
                              text: "Cancel",
                              color: "error",
                              action: () => {
                                   this.selectScheduleContext.open = false;
                              }
                         },
                         {
                              text: "Ok",
                              color: "primary",
                              action: () => {
                                   this.selectScheduleContext.open = false;

                                   let newSchedules = [];
                                   // get the detail for the selected schedules.
                                   for (const i of this.selectScheduleContext
                                        .selectedData) {
                                        newSchedules.push({
                                             id: this.selectScheduleContext
                                                  .data[i].id,
                                             name: this.selectScheduleContext
                                                  .data[i].name,
                                             type: "schedule"
                                        });
                                   }

                                   this.$store
                                        .dispatch("assignDocumentSchedules", {
                                             documentData: this.nodeData,
                                             selectedSchedules: newSchedules
                                        })
                                        .then(updatedCount => {
                                             this.$store.dispatch(
                                                  "notifySuccess",
                                                  `${updatedCount} schedule(s) assigned!`
                                             );
                                        });
                                   //assignDocumentSchedules
                              }
                         }
                    ],
                    data: [],
                    selectedData: [],
                    updateSelectedList: data => {
                         this.selectScheduleContext.selectedData = data;
                    },
                    openDialog: () => {
                         this.selectScheduleContext.data.length = 0; // reset list before re-populating.
                         this.selectScheduleContext.refreshIndex += 1; //force the component to re-load. https://michaelnthiessen.com/force-re-render

                         this.$store
                              .dispatch("getPublishedForms")
                              .then(data => {
                                   for (let form of data) {
                                        this.selectScheduleContext.data.push({
                                             id: form.id,
                                             name: form.name,
                                             description: form.owner
                                        });
                                   }
                                   this.selectScheduleContext.open = true;
                              });
                    }
               },
               documentQuickActions: [
                    {
                         title: "Out of Scope",
                         icon: "mdi-stop",
                         color: "error--text",
                         action: index =>
                              console.log("set out of scope ", index)
                    },
                    {
                         title: "Schedules",
                         icon: "mdi-table-large",
                         color: "purple--text text--lighten-2",
                         action: () => {
                              this.selectScheduleContext.openDialog();
                         }
                    },
                    {
                         title: "Sample Action 3",
                         icon: "mdi-plus-box-outline",
                         color: "primary--text",
                         action: index => {
                              console.log("Sample 3 ", index);
                         }
                    }
               ],
               selectedLookupObjects: {
                    reviewStatus: null
               },
               lookupData: {
                    reviewStatus: [
                         {
                              value: "",
                              displayName: "Not Started",
                              icon: "mdi-do-not-disturb",
                              color: "red"
                         },
                         {
                              value: "pending",
                              displayName: "Review In Progress",
                              icon: "mdi-clock",
                              color: "red"
                         },
                         {
                              value: "complete",
                              displayName: "Review Complete",
                              icon: "mdi-check-bold",
                              color: "success"
                         }
                    ],
                    redFlagStatus: [
                         {
                              value: "",
                              displayName: "Not set",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "green",
                              displayName: "Yellow Flag",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "orange",
                              displayName: "Orange Flag",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "red",
                              displayName: "Red Flag",
                              icon: "",
                              color: ""
                         }
                    ],
                    responsibility: [
                         {
                              value: "",
                              displayName: "Not set",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "uk",
                              displayName: "United Kingdom",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "fr",
                              displayName: "France",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "de",
                              displayName: "Germany",
                              icon: "",
                              color: ""
                         }
                    ],
                    scopeOfReview: [
                         {
                              value: "",
                              displayName: "Not set",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "legalreview",
                              displayName: "Legal Review",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "sanitycheck",
                              displayName: "Sanity Check",
                              icon: "",
                              color: ""
                         }
                    ],
                    departments: [
                         {
                              value: "",
                              displayName: "Not set",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "corporate",
                              displayName: "Corporate",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "finance",
                              displayName: "Finance",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "outofscope",
                              displayName: "Out of Scope",
                              icon: "",
                              color: ""
                         }
                    ],
                    reviewers: [
                         {
                              value: "",
                              displayName: "Not set",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "wessel@wessel.com",
                              displayName: "Wessel Buchling",
                              icon: "",
                              color: ""
                         }
                    ]
               }
          };
     },
     methods: {
          setFieldValue(field, option) {
               this.nodeData[field] = option.value;
               this.selectedLookupObjects[field] = option;
          },
          setDefaultValues() {
               // Review Status
               for (const i of this.lookupData.reviewStatus) {
                    console.log(i);
                    i.value === this.nodeData.reviewStatus
                         ? (this.selectedLookupObjects.reviewStatus = i)
                         : null;
               }
          },
          saveDocumentDetail() {
               this.$store
                    .dispatch("saveDocumentMetadata", this.nodeData)
                    .then(() => {
                         this.$store.dispatch(
                              "notifySuccess",
                              `${this.nodeData.name} saved!`
                         );
                    });
          }
     },
     created() {
          //this.setDefaultValues();
          eventBus.$on("fileroom.click.expandContextPanel", data => {
               this.contextPanelConfig.expanded = data;
          });
     }
};
</script>

<style>
.x-document-detail .x-button-select {
     text-transform: none;
}
</style>