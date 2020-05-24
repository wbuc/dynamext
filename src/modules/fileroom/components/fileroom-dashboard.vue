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
                    <transition name="fade" mode="out-in">
                         <component :is="currentContext" :nodeData="fileroomData.currentNodeData"></component>
                    </transition>
               </div>
          </v-col>
     </v-row>
</template>

<script>
//const pause = ms => new Promise(resolve => setTimeout(resolve, ms));

import { mapGetters } from "vuex";
import { eventBus } from "@/plugins/eventbus.js";

import tree from "@/components/treeview-base";

import folder from "@/modules/fileroom/components/context-panel-folder";
import doc from "@/modules/fileroom/components/context-panel-document";
import finding from "@/modules/fileroom/components/context-panel-finding";
import schedule from "@/modules/fileroom/components/context-panel-schedule";

export default {
     name: "Fileroom.Dashboard",
     components: { tree, folder, doc, finding, schedule },
     computed: {
          ...mapGetters(["api"])
     },
     data() {
          return {
               tg: true,
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
               currentContext: null,
               fileroomData: {
                    items: [
                         {
                              id: 1,
                              name: "Project Dymond",
                              type: "folder",
                              children: []
                         }
                    ],
                    currentNodeData: null,
                    checkedNodes: [],
                    dropdowns: null
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
               eventBus.expandContextPanel(this.explorerConfig.fullView);
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
                              this.currentContext = result.data.type;
                         });
               });
          },
          getFileroomSelectedNodeData(node) {
               const id = node.id;
               this.$store.dispatch("getTreeNodeMetadata", id).then(result => {
                    this.fileroomData.currentNodeData = result.data;
                    this.currentContext = result.data.type;
               });
          },
          setFileroomCheckedNodes(data) {
               this.fileroomData.checkedNodes = data;
          },
          setContextPanelState(fileType) {
               if (fileType === "doc") {
                    Object.keys(this.contextPanelState).forEach(key => {
                         this.contextPanelState[key] = true;
                    });
               }
               if (fileType === "folder") {
                    Object.keys(this.contextPanelState).forEach(key => {
                         this.contextPanelState[key] = true;
                    });
               }
               if (fileType === "finding") {
                    Object.keys(this.contextPanelState).forEach(key => {
                         this.contextPanelState[key] = false;
                    });
               }
          }
     },
     created() {
          this.refreshTreeview();

          // need to call API and retrieve lookup data for the dropdowns.
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