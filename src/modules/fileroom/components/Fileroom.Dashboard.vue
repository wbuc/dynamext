<template>
     <v-row no-gutters>
          <v-col cols="12" md="3">
               <v-card tile flat>
                    <v-tabs v-model="activeTab" fixed-tabs background-color dark>
                         <v-tabs-slider color="red"></v-tabs-slider>
                         <v-tab key="Fileroom">Fileroom</v-tab>
                         <v-tab key="Personal">
                              <v-icon class="mr-2" small color="yellow darken-3">mdi-star-outline</v-icon>Favourites
                         </v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="activeTab">
                         <v-tab-item key="Fileroom">
                              <v-card flat>
                                   <v-treeview
                                        v-model="tree"
                                        :open="open"
                                        :items="items"
                                        item-key="name"
                                        open-on-click="true"
                                        activatable
                                        color="warning"
                                        selectable="true"
                                        selected-color="error"
                                        transition="true"
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
                                             <b>{{item.name}}</b>
                                             <v-btn icon v-on:click.stop="editme(item.name)">
                                                  <v-icon small>edit</v-icon>
                                             </v-btn>
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
          <v-col cols="12" md="9">
               <v-card class="pa-2" outlined tile>Data table here!</v-card>
          </v-col>
     </v-row>
</template>

<script>
export default {
     name: "Fileroom.Dashboard",
     data() {
          return {
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
                         name: "1 Corporate",
                         children: [
                              {
                                   name: "1.2 Board Minutes",
                                   children: [
                                        { name: "1.2.1 2017 Board Minutes" },
                                        { name: "1.2.2 2018 Board Minutes" }
                                   ]
                              },
                              {
                                   name: "1.3 Cert of Incorporation",
                                   children: [
                                        {
                                             name:
                                                  " 1.3.1 AUS_Certificate of Registration",
                                             file: "doc"
                                        },
                                        {
                                             name:
                                                  "1.3.2 BR_Gründungsdokument_Sample Brasil",
                                             file: "doc"
                                        },
                                        { name: "1.3.3 CN_FB", file: "doc" },
                                        { name: "1.3.4 FR_FB", file: "doc" },
                                        { name: "1.3.5 TestG_DE", file: "doc" }
                                   ]
                              },
                              { name: "1.5 Intercompany" },
                              { name: "1.6 Org Charts" },
                              { name: "1.7 Prior Names" },
                              { name: "1.8 Articles of Incorporation" }
                         ]
                    },
                    {
                         name: "node_modules"
                    },
                    {
                         name: "public",
                         children: [
                              {
                                   name: "static",
                                   children: [
                                        {
                                             name: "logo.png",
                                             file: "png"
                                        }
                                   ]
                              },
                              {
                                   name: "favicon.ico",
                                   file: "png"
                              },
                              {
                                   name: "index.html",
                                   file: "html"
                              }
                         ]
                    },
                    {
                         name: ".gitignore",
                         file: "txt"
                    },
                    {
                         name: "babel.config.js",
                         file: "js"
                    },
                    {
                         name: "package.json",
                         file: "json"
                    },
                    {
                         name: "README.md",
                         file: "md"
                    },
                    {
                         name: "vue.config.js",
                         file: "js"
                    },
                    {
                         name: "yarn.lock",
                         file: "txt"
                    }
               ]
          };
     }
};
</script>

<style>
</style>