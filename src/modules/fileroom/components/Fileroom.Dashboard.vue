<template>
     <v-row no-gutters>
          <v-col cols="12" :md="treeviewExpand ? '7':'3'">
               <v-card tile flat style="background-color: #ff000000">
                    <v-tabs v-model="activeTab" color="grey" background-color dark>
                         <v-tabs-slider color="accent"></v-tabs-slider>
                         <v-tab key="Fileroom">Fileroom</v-tab>
                         <v-tab key="Personal">
                              <v-icon class="mr-2" small color="yellow darken-3">mdi-star-outline</v-icon>Favourites
                         </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="activeTab" style="background-color: #ff000000">
                         <v-tab-item key="Fileroom" style="background-color: #ff000000">
                              <!-- toolbox here -->
                              <v-card flat style="background-color: #ff000000">
                                   <v-card-actions>
                                        <v-btn icon>
                                             <v-icon>mdi-folder-plus</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                             <v-icon>mdi-refresh</v-icon>
                                        </v-btn>
                                        <v-text-field
                                             v-model="treeviewConfig.search"
                                             append-icon="mdi-magnify"
                                             label="Search"
                                             outlined
                                             single-line
                                             hide-details
                                             dense
                                        ></v-text-field>
                                        <v-spacer></v-spacer>
                                        <v-btn icon @click="toggleTreeviewExpand">
                                             <v-icon>mdi-arrow-expand</v-icon>
                                        </v-btn>
                                   </v-card-actions>
                              </v-card>
                              <v-card flat style="background-color: #ff000000">
                                   <v-treeview
                                        v-model="tree"
                                        :search="treeviewConfig.search"
                                        :open="open"
                                        :items="items"
                                        item-key="name"
                                        :open-on-click="treeviewConfig.openOnClick"
                                        activatable
                                        color="grey"
                                        :selectable="treeviewConfig.selectable"
                                        selected-color="accent"
                                        :transition="treeviewConfig.transition"
                                        dense
                                        :hoverable="treeviewConfig.hoverable"
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
                                                            router
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
                         <v-tab-item key="Personal">
                              <v-card flat>
                                   <v-card-text>And my place!</v-card-text>
                              </v-card>
                         </v-tab-item>
                    </v-tabs-items>
               </v-card>
          </v-col>
          <v-col cols="12" :md="treeviewExpand ? '5':'9'">
               <v-card class="pa-2" outlined tile>Data table here!</v-card>
          </v-col>
     </v-row>
</template>

<script>
//  @mouseover="treeviewConfig.toolbarHover = true"
//  @mouseout="treeviewConfig.toolbarHover = false"
//  :class="{'primary--text': treeviewConfig.toolbarHover}"
import sampleData from "@/config/data";

export default {
     name: "Fileroom.Dashboard",
     data() {
          return {
               treeviewConfig: {
                    search: null,
                    selectable: true,
                    transition: true,
                    openOnClick: false,
                    hoverable: true,
                    toolbarHover: false
               },
               treeviewExpand: false,
               activeTab: null,
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
                         name: "mdi-file-document-outline",
                         color: "danger"
                    },
                    finding: { name: "mdi-file-find", color: "success" }
               },
               tree: [],
               items: sampleData.fileroomData,
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
                    }
               ]
          };
     },
     methods: {
          editme(item) {
               console.log(item);
          },
          toggleTreeviewExpand() {
               this.treeviewExpand = !this.treeviewExpand;
          }
     }
};
</script>

<style>
.v-treeview-node {
     cursor: pointer;
}
</style>