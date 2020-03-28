<template>
     <v-row no-gutters>
          <v-col cols="12" :md="treeviewExpand ? '7':'3'">
               <v-card tile flat style="background-color: #ff000000">
                    <v-tabs v-model="activeTab" fixed-tabs background-color dark>
                         <v-tabs-slider color="red"></v-tabs-slider>
                         <v-tab key="Fileroom">Fileroom</v-tab>
                         <v-tab key="Personal">
                              <v-icon class="mr-2" small color="yellow darken-3">mdi-star-outline</v-icon>Favourites
                         </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="activeTab" style="background-color: #ff000000">
                         <v-tab-item key="Fileroom" style="background-color: #ff000000">
                              <!-- toolbox here -->
                              <v-card flat style="background-color: #ff000000">
                                   <v-treeview
                                        v-model="tree"
                                        :open="open"
                                        :items="items"
                                        item-key="name"
                                        :open-on-click="treeviewConfig.openOnClick"
                                        activatable
                                        color="warning"
                                        :selectable="treeviewConfig.selectable"
                                        selected-color="error"
                                        :transition="treeviewConfig.transition"
                                        dense
                                   >
                                        <template v-slot:prepend="{ item, open }">
                                             <v-icon
                                                  v-if="!item.file"
                                                  color="info"
                                             >{{ open ? 'mdi-folder-open' : 'mdi-folder' }}</v-icon>
                                             <v-icon v-else>{{ files[item.file] }}</v-icon>
                                        </template>

                                        <template v-slot:label="{ item }">
                                             <div class="x-branch">
                                                  <span>{{item.name}} {{item.hover}}</span>
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
                                                            v-for="(dataItem, index) in treeviewItemActions"
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
export default {
     name: "Fileroom.Dashboard",
     data() {
          return {
               treeviewConfig: {
                    selectable: true,
                    transition: true,
                    openOnClick: true
               },
               treeviewExpand: true,
               activeTab: null,
               open: ["public"],
               files: {
                    html: "mdi-language-html5",
                    js: "mdi-nodejs",
                    json: "mdi-json",
                    md: "mdi-markdown",
                    pdf: "mdi-file-pdf",
                    png: "mdi-file-image",
                    txt: "mdi-file-document-outline",
                    doc: "mdi-file",
                    xls: "mdi-file-excel"
               },
               tree: [],
               items: [
                    {
                         name: "1 Corporate", // IMPORTANT: Change the file prop to type and set it to document and folder.
                         hover: false,
                         children: [
                              {
                                   name: "1.2 Board Minutes",
                                   hover: false,
                                   children: [
                                        {
                                             name: "1.2.1 2017 Board Minutes",
                                             hover: false
                                        },
                                        {
                                             name: "1.2.2 2018 Board Minutes",
                                             hover: false
                                        }
                                   ]
                              },
                              {
                                   name: "1.3 Cert of Incorporation",
                                   hover: false,
                                   children: [
                                        {
                                             name:
                                                  " 1.3.1 AUS_Certificate of Registration",
                                             hover: false,
                                             file: "doc"
                                        },
                                        {
                                             name:
                                                  "1.3.2 BR_Gründungsdokument_Sample Brasil",
                                             hover: false,
                                             file: "doc"
                                        },
                                        {
                                             name: "1.3.3 CN_FB",
                                             hover: false,
                                             file: "doc"
                                        },
                                        {
                                             name: "1.3.4 FR_FB",
                                             hover: false,
                                             file: "doc"
                                        },
                                        {
                                             name: "1.3.5 TestG_DE",
                                             hover: false,
                                             file: "doc"
                                        }
                                   ]
                              },
                              { name: "1.5 Intercompany" },
                              { name: "1.6 Org Charts" },
                              { name: "1.7 Prior Names" },
                              { name: "1.8 Articles of Incorporation" }
                         ]
                    },
                    {
                         name: "node_modules",
                         hover: false
                    },
                    {
                         name: "public",
                         hover: false,
                         children: [
                              {
                                   name: "static",
                                   hover: false,
                                   children: [
                                        {
                                             name: "logo.png",
                                             hover: false,
                                             file: "png"
                                        }
                                   ]
                              },
                              {
                                   name: "favicon.ico",
                                   hover: false,
                                   file: "png"
                              },
                              {
                                   name: "index.html",
                                   hover: false,
                                   file: "html"
                              }
                         ]
                    },
                    {
                         name: ".gitignore",
                         hover: false,
                         file: "txt"
                    },
                    {
                         name: "babel.config.js",
                         hover: false,
                         file: "js"
                    },
                    {
                         name: "package.json",
                         hover: false,
                         file: "json"
                    },
                    {
                         name: "README.md",
                         hover: false,
                         file: "md"
                    },
                    {
                         name: "vue.config.js",
                         hover: false,
                         file: "js"
                    },
                    {
                         name: "yarn.lock",
                         hover: false,
                         file: "txt"
                    }
               ],
               treeviewItemActions: [
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
          }
     }
};
</script>

<style>
</style>