<template>
     <div>
          <v-btn :id="`${name}-dropdown`" icon text dark color="grey" class="x-branch-activator">
               <v-icon>more_vert</v-icon>
               <span></span>
          </v-btn>
          <v-menu offset-y transition="slide-y-transition" :activator="`#${name}-dropdown`">
               <v-list>
                    <v-list-item
                         v-for="(item, index) in data"
                         :key="index"
                         @click="setCurrentItem(item)"
                         active-class="secondary--text"
                         dense
                    >
                         <v-list-item-action>
                              <v-icon :color="item.color" small>{{item.icon}}</v-icon>
                         </v-list-item-action>
                         <v-list-item-content>
                              <v-list-item-title>{{item.text}}</v-list-item-title>
                         </v-list-item-content>
                    </v-list-item>
               </v-list>
          </v-menu>
     </div>
</template>

<script>
export default {
     name: "control-dropdown",
     props: {
          name: { type: String, default: "sample" },
          data: {
               type: Array,
               default: () => {
                    return [
                         {
                              text: "Item 1",
                              icon: "mdi-delete",
                              color: "error",
                              action: index => {
                                   console.log(
                                        "Sample dropdown item clicked! Index: ",
                                        index
                                   );
                              }
                         }
                    ];
               }
          }
     },
     methods: {
          setCurrentItem(item) {
               console.log("Proxy clicked ", item);
          }
     },
     data() {
          return {
               currentItem: null
          };
     }
};
</script>

<style>
</style>