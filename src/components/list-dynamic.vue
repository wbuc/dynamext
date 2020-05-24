<template>
     <div>
          <template v-for="(item, index) in listData">
               <v-list-item
                    two-line
                    :key="index"
                    :link="config.link"
                    :dense="config.dense"
                    :ripple="config.ripple"
               >
                    <v-list-item-content>
                         <v-list-item-title>
                              <slot name="title" v-bind:item="item">{{`${item.name}`}}</slot>
                         </v-list-item-title>
                         <v-list-item-subtitle>
                              <slot name="detail" v-bind:item="item"></slot>
                         </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                         <slot name="actions" v-bind:item="item"></slot>
                    </v-list-item-action>
               </v-list-item>
               <v-divider
                    v-if="index + 1 < listData.length && config.divider"
                    :key="`divider${index}`"
               ></v-divider>
          </template>
     </div>
</template>

<script>
export default {
     name: "List.Dynamic.Display",
     props: {
          listData: { type: Array, default: () => [] },
          config: {
               Type: Object,
               default: () => {
                    return {
                         link: false,
                         dense: true,
                         ripple: false,
                         divider: true
                    };
               }
          }
     },
     data() {
          return { searchText: null };
     }
};
</script>
