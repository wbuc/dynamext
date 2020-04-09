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
                                   small
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
                                   <v-list></v-list>
                              </v-menu>
                         </v-col>
                    </v-row>
               </v-toolbar>
               <v-card-text>
                    <v-text-field
                         id="password"
                         label="Password"
                         name="password"
                         prepend-icon="lock"
                         outlined
                         dense
                         flat
                    ></v-text-field>
               </v-card-text>
               <v-card-actions></v-card-actions>
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
     name: "ContextPanel.Document",
     props: {
          nodeData: {
               Type: Object,
               default: () => {
                    return {
                         id: 0,
                         name: null,
                         type: null,
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
     methods: {},
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
               }
          };
     }
};
</script>

<style>
</style>