<template>
     <v-row>
          <v-col cols="12" :md="explorerConfig.fullView ? '7':'4'">
               <v-card tile flat style="background-color: #ff000000">
                    <v-toolbar class="elevation-2">
                         <v-tabs v-model="explorerConfig.activeTab" color="grey">
                              <v-tabs-slider color="accent"></v-tabs-slider>
                              <v-tab key="Fileroom">Fileroom</v-tab>
                              <v-tab key="Personal">Personal</v-tab>
                         </v-tabs>
                         <v-text-field
                              style="width:100%"
                              v-model="fileroomConfig.search"
                              append-icon="mdi-magnify"
                              label="Search"
                              outlined
                              single-line
                              hide-details
                              dense
                         ></v-text-field>
                    </v-toolbar>

                    <v-tabs-items
                         v-model="explorerConfig.activeTab"
                         style="background-color: #ff000000"
                    >
                         <v-tab-item key="Fileroom" style="background-color: #ff000000">
                              <v-card flat style="background-color: #ff000000">
                                   <v-card-actions>
                                        <v-btn icon @click="addFolder">
                                             <v-icon>mdi-folder-plus</v-icon>
                                        </v-btn>
                                        <v-btn icon @click="refreshTreeview">
                                             <v-icon>mdi-refresh</v-icon>
                                        </v-btn>

                                        <v-spacer></v-spacer>
                                        <v-btn icon @click="toggleFullView">
                                             <v-icon>mdi-arrow-expand</v-icon>
                                        </v-btn>
                                   </v-card-actions>
                              </v-card>
                              <v-card flat style="background-color: #ff000000">
                                   <tree
                                        :items="fileroomData.items"
                                        :config="fileroomConfig"
                                        @nodeSelected="getFileroomSelectedNodeData"
                                        @nodesChecked="setFileroomCheckedNodes"
                                   ></tree>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item key="Personal" style="background-color: #ff000000">
                              <v-card flat style="background-color: #ff000000">
                                   <v-card-actions>
                                        <v-btn icon @click="addFolder">
                                             <v-icon>mdi-folder-plus</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                             <v-icon>mdi-refresh</v-icon>
                                        </v-btn>

                                        <v-spacer></v-spacer>
                                        <v-btn icon @click="toggleFullView">
                                             <v-icon>mdi-arrow-expand</v-icon>
                                        </v-btn>
                                   </v-card-actions>
                              </v-card>
                              <v-card flat style="background-color: #ff000000">
                                   <tree></tree>
                              </v-card>
                         </v-tab-item>
                    </v-tabs-items>
               </v-card>
          </v-col>
          <v-col cols="12" :md="explorerConfig.fullView ? '5':'8'">
               <div class="x-context-panel">
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
                              <v-expansion-panel-header
                                   color="title font-weight-light headline grey--text"
                              >
                                   <span>
                                        <v-icon
                                             class="mr-2"
                                             color="warning lighten-1"
                                        >mdi-file-document</v-icon>Documents
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
                              <v-expansion-panel-header
                                   color="title font-weight-light headline grey--text"
                              >
                                   <span>
                                        <v-icon
                                             class="mr-2"
                                             color="success lighten-1"
                                        >mdi-information</v-icon>Findings
                                   </span>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                         </v-expansion-panel>
                         <v-expansion-panel key="schedules">
                              <v-expansion-panel-header
                                   color="title font-weight-light headline grey--text"
                              >
                                   <span>
                                        <v-icon
                                             class="mr-2"
                                             color="purple lighten-2"
                                        >mdi-table-large</v-icon>Schedules
                                   </span>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                         </v-expansion-panel>
                         <v-expansion-panel key="folders">
                              <v-expansion-panel-header
                                   color="title font-weight-light headline grey--text"
                              >
                                   <span>
                                        <v-icon class="mr-2" color="info ">mdi-folder</v-icon>Folders
                                   </span>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-expansion-panel-content>
                         </v-expansion-panel>
                    </v-expansion-panels>
               </div>
          </v-col>
     </v-row>
</template>

<script>
//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

import { mapGetters } from "vuex";

import tree from "@/components/treeview/Treeview";

export default {
     name: "Fileroom.Dashboard",
     components: { tree },
     computed: {
          ...mapGetters(["api"])
     },
     data() {
          return {
               explorerConfig: {
                    fullView: false,
                    activeTab: null
               },
               contextPanelConfig: {
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
               },
               fileroomData: {
                    items: [
                         {
                              id: 1,
                              name: "Project Dymond",
                              type: "folder",
                              children: []
                         }
                    ],
                    currentNodeData: {},
                    checkedNodes: []
               },
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
     },
     methods: {
          toggleFullView() {
               this.explorerConfig.fullView = !this.explorerConfig.fullView;
          },
          addFolder() {},
          refreshTreeview() {
               this.$store.dispatch("getTreeviewDefinition").then(result => {
                    this.fileroomData.items[0].children = result.data;
                    //show progress bar when fecthing the inital record for project 1.
                    this.$store
                         .dispatch("getTreeNodeMetadata", 1)
                         .then(result => {
                              this.fileroomData.currentNodeData = result.data;
                         });
               });
          },
          getFileroomSelectedNodeData(node) {
               const id = node.id;
               this.$store.dispatch("getTreeNodeMetadata", id).then(result => {
                    this.fileroomData.currentNodeData = result.data;
               });
          },
          setFileroomCheckedNodes(data) {
               this.fileroomData.checkedNodes = data;
          }
     },
     created() {
          this.refreshTreeview();
     }
};
</script>

<style>
.v-treeview-node {
     cursor: pointer;
}
.x-context-panel {
     position: -webkit-sticky;
     position: sticky;
     top: 100px;
}
</style>