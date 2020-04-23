<template>
     <div>
          <v-card outlined class="mb-5">
               <v-toolbar class="elevation-0">
                    <v-row>
                         <v-col>
                              <v-icon class="mr-2" color="warning lighten-1">mdi-file-document</v-icon>1.1.1.1 Very long document name!
                         </v-col>
                         <v-spacer></v-spacer>
                         <v-col class="text-right">
                              <v-btn class="mr-2 error--text" small outlined color="primary" dark>
                                   <v-icon left>mdi-home-modern</v-icon>Out of scope
                              </v-btn>
                              <v-btn
                                   id="doc-actions"
                                   icon
                                   text
                                   dark
                                   color="grey"
                                   class="x-branch-activator"
                              >
                                   <v-icon>more_vert</v-icon>
                                   <span></span>
                              </v-btn>
                              <v-menu
                                   offset-y
                                   transition="slide-y-transition"
                                   activator="#doc-actions"
                              >
                                   <v-list>
                                        <v-list-item
                                             v-for="(dataItem, index) in documentQuickActions"
                                             :key="index"
                                             @click="dataItem.action(index)"
                                             active-class="secondary--text"
                                             dense
                                        >
                                             <v-list-item-action>
                                                  <v-icon
                                                       :class="dataItem.color"
                                                       small
                                                  >{{dataItem.icon}}</v-icon>
                                             </v-list-item-action>
                                             <v-list-item-content>
                                                  <v-list-item-title>{{dataItem.title}}</v-list-item-title>
                                             </v-list-item-content>
                                        </v-list-item>
                                   </v-list>
                              </v-menu>
                         </v-col>
                    </v-row>
               </v-toolbar>

               <div class="pt-5 mb-2 mx-4">
                    <v-row no-gutters>
                         <v-col cols="12" xs="12" sm="12" md="12" lg="5">
                              <div class="pa-3 x-document-detail">
                                   <div class="grey--text">Review Status</div>
                                   <div>
                                        <v-btn
                                             id="lookup-reviewStatus"
                                             class="x-button-select"
                                             text
                                             dark
                                        >
                                             <span>
                                                  <v-icon
                                                       left
                                                  >{{selectedLookupObjects.reviewStatus.icon}}</v-icon>
                                                  <span>{{ selectedLookupObjects.reviewStatus.text}}</span>
                                             </span>
                                        </v-btn>
                                        <v-menu
                                             offset-y
                                             transition="slide-y-transition"
                                             activator="#lookup-reviewStatus"
                                        >
                                             <v-list>
                                                  <v-list-item
                                                       v-for="(rs, index) in lookupData.reviewStatus"
                                                       :key="index"
                                                       @click="setFieldValue('reviewStatus', rs)"
                                                  >
                                                       <v-list-item-action>
                                                            <v-icon>{{rs.icon}}</v-icon>
                                                       </v-list-item-action>
                                                       {{rs.text}}
                                                       <!-- <v-list-item-action>
                                                            <v-icon>{{lookupData.reviewStatus[rs].icon}}</v-icon>
                                                       </v-list-item-action>
                                                       <v-list-item-content>
                                                            <v-list-item-title>{{ lookupData.reviewStatus[rs].text }}</v-list-item-title>
                                                       </v-list-item-content>-->
                                                  </v-list-item>
                                             </v-list>
                                        </v-menu>
                                   </div>
                              </div>
                         </v-col>
                         <v-col cols="12" xs="12" sm="6" md="6" lg="5">
                              <div class="pa-3">
                                   <div class="grey--text">Out of Scope</div>
                                   <div>xxx</div>
                              </div>
                         </v-col>
                    </v-row>
                    <v-row no-gutters>
                         <v-col cols="12" xs="12" sm="12" md="12" lg="5">
                              <div class="pa-3">
                                   <div class="grey--text">Responsibility</div>
                                   <div>Bla bla bla</div>
                              </div>
                         </v-col>
                         <v-col cols="12" xs="12" sm="6" md="6" lg="5">
                              <div class="pa-3">
                                   <div class="grey--text">Department</div>
                                   <div>Wessel Buchling</div>
                              </div>
                         </v-col>
                         <v-col cols="12" xs="12" sm="6" md="6" lg="2">
                              <div class="pa-3">
                                   <div class="grey--text">Red Flag Status</div>
                                   <div>1900</div>
                              </div>
                         </v-col>
                         <v-col cols="12" xs="12" sm="12" md="12" lg="5">
                              <div class="pa-3">
                                   <div class="grey--text">Reviewer</div>
                                   <div>Bla bla bla</div>
                              </div>
                         </v-col>
                         <v-col cols="12" xs="12" sm="6" md="6" lg="5">
                              <div class="pa-3">
                                   <div class="grey--text">Reviewed Date</div>
                                   <div>Wessel Buchling</div>
                              </div>
                         </v-col>
                         <v-col cols="12" xs="12" sm="6" md="6" lg="2">
                              <div class="pa-3">
                                   <div class="grey--text">Language</div>
                                   <div>1900</div>
                              </div>
                         </v-col>
                         <v-col cols="12" xs="12" sm="6" md="6" lg="2">
                              <div class="pa-3">
                                   <div class="grey--text">Scope of Review</div>
                                   <div>1900</div>
                              </div>
                         </v-col>
                    </v-row>
                    <v-divider></v-divider>
               </div>

               <v-card-actions class="pr-4 mt-2 pb-4">
                    <v-spacer></v-spacer>

                    <v-btn text large outlined color width="120px">
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
               class="mb-5"
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
                    <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
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
               class="mb-5"
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
                    <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
               </v-expansion-panel>
          </v-expansion-panels>
     </div>
</template>

<script>
export default {
     name: "Fileroom.ContextPanel.Document",
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
                         Language: null,
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
                         flat: true,
                         hover: false,
                         tile: false
                    };
               }
          }
     },
     computed: {
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
          }
     },
     data() {
          return {
               fileroomConfig: {
                    search: null,
                    selectable: true, // prepend node checkboxes.
                    transition: true,
                    openOnClick: false, // click anywhere on the node to expand.
                    hoverable: true,
                    toolbarHover: false,
                    returnObject: true, // retrieve the json object, or identifier.
                    selectionType: "all" //leaf or independent or all(throws error in console).
               },
               documentQuickActions: [
                    {
                         title: "Edit",
                         icon: "mdi-pencil",
                         color: "secondary--text",
                         action: index => console.log("editing ", index)
                    },
                    {
                         title: "Out of Scope",
                         icon: "mdi-stop",
                         color: "error--text",
                         action: index => console.log("deleting ", index)
                    }
               ],
               documentAction: {
                    quick: [],
                    reviewStatus: []
               },
               selectedLookupObjects: {
                    reviewStatus: null
               },

               lookupData: {
                    reviewStatus: [
                         {
                              value: "none",
                              displayText: "Not Started",
                              icon: "mdi-do-not-disturb",
                              color: "red"
                         },
                         {
                              value: "pending",
                              displayText: "Review In Progress",
                              icon: "mdi-clock",
                              color: "red"
                         },
                         {
                              value: "complete",
                              displayText: "Review Complete",
                              icon: "mdi-check-bold",
                              color: "success"
                         }
                    ],
                    redFlagStatus: [
                         {
                              value: "none",
                              displayText: "Not set",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "green",
                              displayText: "Yellow Flag",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "orange",
                              displayText: "Orange Flag",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "red",
                              displayText: "Red Flag",
                              icon: "",
                              color: ""
                         }
                    ],
                    responsibitlity: [
                         {
                              value: "none",
                              displayText: "Not set",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "uk",
                              displayText: "United Kingdom",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "fr",
                              displayText: "France",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "de",
                              displayText: "Germany",
                              icon: "",
                              color: ""
                         }
                    ],
                    scopeOfReview: [
                         {
                              value: "none",
                              displayText: "Not set",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "legalreview",
                              displayText: "Legal Review",
                              icon: "",
                              color: ""
                         },
                         {
                              value: "sanitycheck",
                              displayText: "Sanity Check",
                              icon: "",
                              color: ""
                         }
                    ]
               },
               lookupReviewStatus: [
                    {
                         value: "none",
                         text: "Not Started",
                         icon: "mdi-do-not-disturb"
                    },
                    {
                         value: "pending",
                         text: "Review In Progress",
                         icon: "mdi-clock"
                    },
                    {
                         value: "complete",
                         text: "Review Complete",
                         icon: "mdi-check-bold"
                    }
               ]
          };
     },
     created() {
          this.setDefaultValues();
     }
};
</script>

<style>
.x-document-detail .x-button-select {
     text-transform: none;
}
</style>