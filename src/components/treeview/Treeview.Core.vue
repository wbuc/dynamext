<template>
     <ul id="demo">
          <tree-item class="item" :item="treeData" @make-folder="makeFolder" @add-item="addItem"></tree-item>
     </ul>
</template>

<script>
import treeItem from "./Treeview.Node";

import sampleData from "@/config/data";

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

               this.$set(item, "children", []);
               this.addItem(item);
          },
          addItem: function(item) {
               item.children.push({
                    name: "new stuff",
                    type: "folder"
               });
          }
     },
     created() {
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