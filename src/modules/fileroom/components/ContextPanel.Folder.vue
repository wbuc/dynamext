<template>
     <div>
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
               <v-expansion-panel key="documents">
                    <v-expansion-panel-header>
                         <span>
                              <span class="headline">
                                   <v-icon class="mr-2" color="warning lighten-1">mdi-file-document</v-icon>
                                   {{ nodeData.documents.count +' '}}
                              </span>
                              <span class="font-weight-light headline grey--text">documents</span>
                         </span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                         <v-data-table
                              :headers="dt.headers"
                              :items="dt.desserts"
                              :items-per-page="5"
                              item-key="name"
                              class="elevation-1"
                              :footer-props="{
                                             showFirstLastPage: true,
                                             firstIcon: 'mdi-arrow-collapse-left',
                                             lastIcon: 'mdi-arrow-collapse-right',
                                             prevIcon: 'mdi-minus',
                                             nextIcon: 'mdi-plus'
                                        }"
                         ></v-data-table>
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
          <!-- 
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
          >
               <v-expansion-panel key="documents">
                    <v-expansion-panel-header>
                         <span>
                              <span class="headline">
                                   <v-icon class="mr-2" color="warning lighten-1">mdi-file-document</v-icon>
                                   {{ nodeData.documents.count +' '}}
                              </span>
                              <span class="font-weight-light headline grey--text">documents</span>
                         </span>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                         <v-data-table
                              :headers="dt.headers"
                              :items="dt.desserts"
                              :items-per-page="5"
                              item-key="name"
                              class="elevation-1"
                              :footer-props="{
                                             showFirstLastPage: true,
                                             firstIcon: 'mdi-arrow-collapse-left',
                                             lastIcon: 'mdi-arrow-collapse-right',
                                             prevIcon: 'mdi-minus',
                                             nextIcon: 'mdi-plus'
                                        }"
                         ></v-data-table>
                    </v-expansion-panel-content>
               </v-expansion-panel>
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
          </v-expansion-panels>-->
     </div>
</template>

<script>
export default {
     name: "ContextPanel.Folder",
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
                         flat: false,
                         hover: false,
                         tile: false
                    };
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

               dt: {
                    headers: [
                         {
                              text: "Dessert (100g serving)",
                              align: "start",
                              value: "name"
                         },
                         { text: "Category", value: "category" }
                    ],
                    desserts: [
                         {
                              name: "Frozen Yogurt",
                              category: "Ice cream"
                         },
                         {
                              name: "Ice cream sandwich",
                              category: "Ice cream"
                         },
                         {
                              name: "Eclair",
                              category: "Cookie"
                         },
                         {
                              name: "Cupcake",
                              category: "Pastry"
                         },
                         {
                              name: "Gingerbread",
                              category: "Cookie"
                         },
                         {
                              name: "Jelly bean",
                              category: "Candy"
                         },
                         {
                              name: "Lollipop",
                              category: "Candy"
                         },
                         {
                              name: "Honeycomb",
                              category: "Toffee"
                         },
                         {
                              name: "Donut",
                              category: "Pastry"
                         },
                         {
                              name: "KitKat",
                              category: "Candy"
                         }
                    ]
               }
          };
     }
};
</script>

<style>
</style>