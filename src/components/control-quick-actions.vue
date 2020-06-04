<template>
     <div>
          <v-btn :id="formattedControlName" icon text dark color="grey" class="x-branch-activator">
               <v-icon>more_vert</v-icon>
               <span></span>
          </v-btn>
          <v-menu offset-y transition="slide-y-transition" :activator="`#${formattedControlName}`">
               <v-list>
                    <template v-for="(item, index) in actions">
                         <v-list-item :key="index" dense @click="item.action">
                              <v-list-item-action>
                                   <v-icon :class="item.color" small>{{item.icon}}</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                   <v-list-item-title>{{item.text}}</v-list-item-title>
                              </v-list-item-content>
                         </v-list-item>
                    </template>
               </v-list>
          </v-menu>
     </div>
</template>

<script>
export default {
     name: "control.quick.actions",
     props: {
          controlName: { type: String, default: "shortcut" },
          actions: {
               type: Array,
               default: () => {
                    return [
                         {
                              text: "Copy",
                              icon: "mdi-content-duplicate",
                              color: "success--text text--lighten-1",
                              action: () => {
                                   console.log("Sample copied!");
                              }
                         },
                         {
                              text: "Delete",
                              icon: "mdi-delete",
                              color: "error--text",
                              action: () => {
                                   console.log("Sample delete!");
                              }
                         }
                    ];
               }
          }
     },
     computed: {
          formattedControlName() {
               return "quick-actions-" + this.controlName.toString();
          }
     },
     methods: {},
     data() {
          return {};
     }
};
</script>

<style>
</style>