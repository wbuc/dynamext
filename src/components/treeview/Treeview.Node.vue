<template>
     <li>
          <div @click="toggle" @dblclick="makeFolder">
               <span v-if="isParent">
                    <span v-if="isOpen">
                         <v-icon small class="mr-3">mdi-chevron-down</v-icon>
                         <v-icon>mdi-folder-open</v-icon>
                    </span>
               </span>
               <span v-if="isFolder">
                    <span v-if="!isOpen">
                         <v-icon small class="mr-3">mdi-chevron-right</v-icon>
                         <v-icon>mdi-folder</v-icon>
                    </span>
               </span>
               <span v-if="isDoc">
                    <span class="ml-7">
                         <v-icon>mdi-file-document</v-icon>
                    </span>
               </span>
               {{ item.name }}
          </div>
          <ul v-show="isOpen" v-if="isFolder">
               <tree-item
                    class="item"
                    v-for="(child, index) in item.children"
                    :key="index"
                    :item="child"
                    @make-folder="$emit('make-folder', $event)"
                    @add-item="$emit('add-item', $event)"
               ></tree-item>
               <li class="add" @click="$emit('add-item', item)">+</li>
          </ul>
     </li>
</template>

<script>
export default {
     name: "tree-item",
     props: { item: Object },
     data: function() {
          return {
               isOpen: false
          };
     },
     computed: {
          isParent: function() {
               return this.item.children && this.item.children.length;
          },
          isFolder: function() {
               //return this.item.children && this.item.children.length;
               return this.item.type == "folder";
          },
          isDoc: function() {
               return this.item.type == "doc";
          }
     },
     methods: {
          toggle: function() {
               if (this.isFolder) {
                    this.isOpen = !this.isOpen;
               }
          },
          makeFolder: function() {
               if (!this.isFolder) {
                    console.log("item added");
                    this.$emit("make-folder", this.item);
                    this.isOpen = true;
               }
          }
     }
};
</script>

<style>
.item {
     cursor: pointer;
     padding: 4px;
}
.item:hover {
     /* opacity: 0.08; */
}
.bold {
     font-weight: bold;
}
ul {
     padding-left: 1em;
     line-height: 1.5em;
     list-style-type: none;
}
</style>