<template>
     <v-dialog
          v-model="dialogOpen"
          :width="config.width"
          :max-width="config.maxWidth"
          :overlay-opacity="config.overlayOpacity"
          :overlay-color="config.overlayColor"
          :persistent="config.persistent"
     >
          <v-card>
               <v-card-title class="headline font-weight-light py-5" primary-title>
                    <slot name="title"></slot>
               </v-card-title>

               <v-card-text class="pt-5">
                    <slot></slot>
               </v-card-text>

               <v-divider></v-divider>
               <v-card-actions>
                    <slot name="actions">
                         <v-spacer></v-spacer>
                         <span v-for="(action, index) in actions" :key="index">
                              <v-btn
                                   :color="action.color"
                                   text
                                   large
                                   min-width="100"
                                   @click="action.action"
                              >{{action.text}}</v-btn>
                         </span>
                    </slot>
               </v-card-actions>
          </v-card>
     </v-dialog>
</template>

<script>
export default {
     name: "Component.Dialog",
     props: {
          show: { Type: Boolean, default: false },
          config: {
               Type: Object,
               default: () => {
                    return {
                         width: 600,
                         maxWidth: 1200,
                         overlayOpacity: 0.7,
                         overlayColor: "#686868",
                         persistent: true
                    };
               }
          },
          actions: {
               Type: Array,
               default: () => {
                    return [
                         {
                              name: "ok",
                              text: "Ok",
                              color: "primary",
                              action: () => {
                                   // This is the property from the parent component that controls the visibility of the modal.
                                   // Cannot set it from the child.
                                   //this.open = false;
                              }
                         }
                    ];
               }
          }
     },
     data() {
          return {
               dialogOpen: this.show
          };
     },
     watch: {
          show: function(newVal) {
               this.dialogOpen = newVal;
          }
     },
     methods: {
          closeDialog() {
               this.dialogOpen = false;
          }
     }
};
</script>

<style>
</style>