<template>
     <v-card class="mx-auto elevation-3">
          <template v-for="(item, index) in dataList">
               <v-list-item
                    two-line
                    :key="index"
                    :link="config.link"
                    :dense="config.dense"
                    :ripple="config.ripple"
               >
                    <v-list-item-icon :class="{'mt-4': config.dense}">
                         <v-icon :color="item.color">{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content :class="{'py-0':  config.dense}">
                         <div class="caption grey--text">{{item.description}}</div>
                         <div>{{item.name}}</div>
                    </v-list-item-content>
               </v-list-item>
               <v-divider v-if="index + 1 < dataList.length" :key="index"></v-divider>
          </template>
     </v-card>
</template>

<script>
export default {
     name: "Component.CompactList",
     props: {
          config: {
               Type: Object,
               default: () => {
                    return { link: true, dense: false, ripple: true };
               }
          },
          dataList: {
               Type: Array,
               default: () => {
                    return [
                         {
                              id: "1",
                              name: "Example list item #1",
                              description: "Re-assign request",
                              icon: "mdi-information-outline",
                              color: "primary"
                         },
                         {
                              id: "2",
                              name: "Example list item #2",
                              description: "Review required",
                              icon: "mdi-do-not-disturb",
                              color: "error"
                         },
                         {
                              id: "3",
                              name: "Example list item #3",
                              description: "Review complete",
                              icon: "mdi-check-bold",
                              color: "success"
                         },
                         {
                              id: "4",
                              name: "Example list item #4",
                              description: "Re-assign request",
                              icon: "mdi-account-question",
                              color: "warning"
                         }
                    ];
               }
          }
     }
};
</script>

<style>
</style>