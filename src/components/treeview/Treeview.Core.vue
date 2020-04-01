<template>
     <ul id="demo">
          <tree-item class="item" :item="treeData" @make-folder="makeFolder" @add-item="addItem"></tree-item>
     </ul>
</template>

<script>
import treeItem from "./Treeview.Node";

import sampleData from "@/config/data";

/*

Need to add custom checkboxes to cater for multi-select. Use a dedicated store for the treeview.
          https://stackoverflow.com/questions/52218020/how-to-add-checkboxes-and-link-to-a-model-in-vuejs-treeview
          https://jsfiddle.net/u91mxc58/14/

NOTE: This component design can be used and turned into a news feed component as well with the repetative catering.

*/

function addNodeProps(node) {
     node.check = false;
     if (node.children) {
          node.children.forEach(x => {
               addNodeProps(x);
          });
     }
}

export default {
     name: "Treeview.Core",
     components: { treeItem },
     data() {
          return {
               treeDataOld: {
                    name: "My Tree",
                    children: [
                         { name: "hello" },
                         { name: "wat" },
                         {
                              name: "child folder",
                              children: [
                                   {
                                        name: "child folder",
                                        children: [
                                             { name: "hello" },
                                             { name: "wat" }
                                        ]
                                   },
                                   { name: "hello" },
                                   { name: "wat" },
                                   {
                                        name: "child folder",
                                        children: [
                                             { name: "hello" },
                                             { name: "wat" }
                                        ]
                                   }
                              ]
                         }
                    ]
               },
               treeData: sampleData.fileroomData2000
          };
     },
     methods: {
          makeFolder: function(item) {
               // Vue.set(item, "children", []);
               item.type = "folder";
               this.$set(item, "children", []);
               this.addItem(item);
          },
          addItem: function(item) {
               item.children.push({
                    name: "new stuff"
               });
          }
     },
     mounted() {
          //need to retrieve the fileroom definition when the app start and store in the state with updated property.
          addNodeProps(this.treeData);
     }
};
</script>

<style>
.item {
     cursor: pointer;
}
.bold {
     font-weight: bold;
}
ul {
     padding-left: 1em;
     line-height: 1.5em;
     list-style-type: dot;
}
</style>