<template>
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
     >
          <template v-slot:prepend="{ item, open }">
               <v-icon v-if="!item.file" color="info">{{ open ? 'mdi-folder-open' : 'mdi-folder' }}</v-icon>
               <v-icon v-else>{{ files[item.file] }}</v-icon>
          </template>

          <template v-slot:label="{ item }">
               <b>{{item.name}}</b>
          </template>
     </v-treeview>
</template>

<script>
export default {
     data() {
          return {
               open: ["public"],
               files: {
                    html: "mdi-language-html5",
                    js: "mdi-nodejs",
                    json: "mdi-json",
                    md: "mdi-markdown",
                    pdf: "mdi-file-pdf",
                    png: "mdi-file-image",
                    txt: "mdi-file-document-outline",
                    xls: "mdi-file-excel"
               },
               tree: [],
               items: [
                    {
                         name: ".git"
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