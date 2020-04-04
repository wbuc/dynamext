<template>
     <v-row>
          <v-col cols="12" :md="treeviewExpand ? '7':'4'">
               <v-card tile flat style="background-color: #ff000000">
                    <v-toolbar class="elevation-2">
                         <v-tabs v-model="activeTab" color="grey">
                              <v-tabs-slider color="accent"></v-tabs-slider>
                              <v-tab key="Fileroom">Fileroom</v-tab>
                              <v-tab key="Personal">Personal</v-tab>
                         </v-tabs>
                         <v-text-field
                              style="width:100%"
                              v-model="treeviewConfig.search"
                              append-icon="mdi-magnify"
                              label="Search"
                              outlined
                              single-line
                              hide-details
                              dense
                         ></v-text-field>
                    </v-toolbar>

                    <v-tabs-items v-model="activeTab" style="background-color: #ff000000">
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
                                        <v-btn icon @click="toggleTreeviewExpand">
                                             <v-icon>mdi-arrow-expand</v-icon>
                                        </v-btn>
                                   </v-card-actions>
                              </v-card>
                              <v-card flat style="background-color: #ff000000">
                                   <v-treeview
                                        :items="items"
                                        v-model="selectedNodes"
                                        :search="treeviewConfig.search"
                                        :return-object="treeviewConfig.returnObject"
                                        :open-on-click="treeviewConfig.openOnClick"
                                        :selectable="treeviewConfig.selectable"
                                        :selection-type="treeviewConfig.selectionType"
                                        :transition="treeviewConfig.transition"
                                        :hoverable="treeviewConfig.hoverable"
                                        @update:active="getNodeMetadata"
                                        :open="open"
                                        item-key="id"
                                        activatable
                                        color="grey"
                                        selected-color="grey lighten-3"
                                        dense
                                   >
                                        <template v-slot:prepend="{ item, open }">
                                             <v-icon
                                                  v-if="item.type == 'folder'"
                                                  :color="fileType[item.type].open.color"
                                             >{{ open ? fileType[item.type].open.name: fileType[item.type].closed.name }}</v-icon>
                                             <v-icon
                                                  :color="fileType[item.type].color"
                                                  v-else
                                             >{{ fileType[item.type].name }}</v-icon>
                                        </template>
                                        <template v-slot:label="{ item }">
                                             <div class="x-branch">
                                                  <span class>{{item.name}}</span>
                                             </div>
                                        </template>
                                        <template v-slot:append="{ item }">
                                             <v-menu offset-y transition="slide-y-transition">
                                                  <template v-slot:activator="{ item, on }">
                                                       <v-btn
                                                            icon
                                                            text
                                                            dark
                                                            color="grey"
                                                            v-on="on"
                                                            class="x-branch-activator"
                                                       >
                                                            <v-icon>more_vert</v-icon>
                                                            <span></span>
                                                       </v-btn>
                                                  </template>
                                                  <v-list>
                                                       <v-list-item
                                                            v-for="(dataItem, index) in treeviewDocumentActions"
                                                            :key="index"
                                                            @click="dataItem.action(item)"
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
                                        </template>
                                   </v-treeview>
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
                                        <v-btn icon @click="toggleTreeviewExpand">
                                             <v-icon>mdi-arrow-expand</v-icon>
                                        </v-btn>
                                   </v-card-actions>
                              </v-card>
                              <v-card flat style="background-color: #ff000000">
                                   <tree-view></tree-view>
                              </v-card>
                         </v-tab-item>
                    </v-tabs-items>
               </v-card>
          </v-col>
          <v-col cols="12" :md="treeviewExpand ? '5':'8'">
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
import treeView from "@/components/treeview/Treeview.Core";
export default {
     name: "Fileroom.Dashboard",
     components: { treeView },
     computed: {
          ...mapGetters(["api"])
     },
     data() {
          return {
               treeviewConfig: {
                    search: null,
                    selectable: true,
                    transition: true,
                    openOnClick: false,
                    hoverable: true,
                    toolbarHover: false,
                    returnObject: true,
                    selectionType: "all" //leaf or independent or all(throws error in console.)
               },
               treeviewExpand: false,
               activeTab: null,
               selectedNodes: [],
               open: ["public"],
               fileType: {
                    folder: {
                         open: {
                              name: "mdi-folder-open",
                              color: "info lighten"
                         },
                         closed: { name: "mdi-folder", color: "info" }
                    },
                    doc: {
                         name: "mdi-file-document",
                         color: "warning lighten-1"
                    },
                    schedule: {
                         name: "mdi-table-large",
                         color: "purple lighten-2"
                    },
                    finding: { name: "mdi-file-find", color: "success" }
               },
               selectedItems: [],
               selectNodeMetadata: {},
               items: [
                    {
                         id: 1,
                         name: "Project Dymond",
                         type: "folder",
                         children: []
                    }
               ],
               treeviewDocumentActions: [
                    {
                         title: "Edit",
                         icon: "mdi-pencil",
                         color: "secondary--text",
                         action: item => console.log("editing ", item)
                    },
                    {
                         title: "Delete",
                         icon: "mdi-delete",
                         color: "error--text",
                         action: item => console.log("deleting ", item)
                    },
                    {
                         title: "Set Favourite",
                         icon: "mdi-star-outline",
                         color: "yellow--text darken-3",
                         action: item => console.log("editing ", item)
                    }
               ],
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
               }
          };
     },
     methods: {
          toggleTreeviewExpand() {
               this.treeviewExpand = !this.treeviewExpand;
          },
          addFolder() {
               //placeholder, won't impletment this now.
               console.log(this.selectedNodes);
          },
          refreshTreeview() {
               this.$store.dispatch("getTreeviewDefinition").then(result => {
                    this.items[0].children = result.data;
               });
          },
          getNodeMetadata(node) {
               //NOTE: vuetify node always an array.
               const id = node[0].id;
               this.$store.dispatch("getTreeNodeMetadata", id).then(result => {
                    this.selectNodeMetadata = result.data;
                    console.log(this.selectNodeMetadata);
               });
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