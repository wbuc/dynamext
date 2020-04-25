<template>
     <v-list two-line>
          <v-list-item-group v-model="selectedList" multiple :active-class="config.selectedColor">
               <template v-for="(item, index) in listData">
                    <v-list-item :key="item.name">
                         <template v-slot:default="{}">
                              <v-list-item-content>
                                   <v-list-item-title v-text="item.name"></v-list-item-title>
                                   <v-list-item-subtitle
                                        v-if="item.description"
                                        v-text="item.description"
                                   ></v-list-item-subtitle>
                              </v-list-item-content>
                         </template>
                    </v-list-item>
                    <v-divider v-if="index + 1 < listData.length" :key="index"></v-divider>
               </template>
          </v-list-item-group>
     </v-list>
</template>

<script>
export default {
     name: "Component.MultiSelect",
     props: {
          selectedListData: {
               Type: Array,
               default: () => []
          },
          listData: {
               Type: Array,
               default: () => {
                    return [
                         {
                              id: "1",
                              name: "Item 1",
                              description: "Description for list item 1"
                         },
                         {
                              id: "2",
                              name: "Item 2",
                              description: "Description for list item 2"
                         }
                    ];
               }
          },
          config: {
               Type: Object,
               default: () => {
                    return {
                         selectedColor: "secondary--text"
                    };
               }
          }
     },
     watch: {
          selectedList: function(data) {
               this.$emit("selectedList", data);
          }
     },
     data() {
          return {
               selectedList: []
          };
     }
};
</script>

<style>
</style>