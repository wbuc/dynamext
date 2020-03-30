<template>
     <ul id="demo">
          <tree-item class="item" :item="treeData" @make-folder="makeFolder" @add-item="addItem"></tree-item>
     </ul>
</template>

<script>
import treeItem from "./Treeview.Node";
export default {
     name: "Treeview.Core",
     components: { treeItem },
     data() {
          return {
               treeData: {
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
               }
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
                    name: "new stuff"
               });
          }
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