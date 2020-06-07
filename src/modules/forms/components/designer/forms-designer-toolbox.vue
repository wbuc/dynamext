
<template>
     <!-- NOT IN USE -->
     <div>
          <v-card class="x-toolbox">
               <v-card style="background-color: #ff000000" class="no-cursor">
                    <v-card-text>
                         <span class="title font-weight-light">Toolbox</span>
                    </v-card-text>
                    <v-divider></v-divider>
               </v-card>
               <v-toolbar class="elevation-2">
                    <v-tabs v-model="toolboxConfig.activeTab" color="grey">
                         <v-tabs-slider color="secondary"></v-tabs-slider>
                         <v-tab key="Fields">Fields</v-tab>
                         <v-tab key="Templates">Templates</v-tab>
                    </v-tabs>
               </v-toolbar>
               <v-tabs-items v-model="toolboxConfig.activeTab" style="background-color: #ff000000">
                    <v-tab-item key="Fields" style="background-color: #ff000000">
                         <div style="background-color: #ff000000">
                              <v-list
                                   width="100%"
                                   dense
                                   class="overflow-y-auto mt-1"
                                   max-height="500px"
                              >
                                   <draggable
                                        class="dragArea list-group"
                                        :list="toolboxControls"
                                        :group="{ name: 'toolbox', pull: 'clone', put: false }"
                                        :clone="cloneFormControl"
                                        @change="formControlsUpdated"
                                   >
                                        <v-list-item
                                             two-line
                                             v-for="element in toolboxControls"
                                             :key="element.id"
                                             color="primary"
                                             class="x-control"
                                             @click.stop="1==1"
                                        >
                                             <v-list-item-action>
                                                  <v-icon>{{element.icon}}</v-icon>
                                             </v-list-item-action>
                                             <v-list-item-content>
                                                  <v-list-item-title
                                                       class="title font-weight-light"
                                                  >{{ element.name }}</v-list-item-title>
                                                  <v-list-item-subtitle
                                                       class="grey--text text--darken-1"
                                                  >{{ element.description }}</v-list-item-subtitle>
                                             </v-list-item-content>
                                        </v-list-item>
                                   </draggable>
                              </v-list>
                         </div>
                    </v-tab-item>
                    <v-tab-item key="Templates" style="background-color: #ff000000">
                         <v-card style="background-color: #ff000000">
                              <div class="text-center grey--text py-10">Templates coming soon!</div>
                         </v-card>
                         <v-card style="background-color: #ff000000">
                              <!-- Content here! -->
                         </v-card>
                    </v-tab-item>
               </v-tabs-items>
          </v-card>
     </div>
</template>

<script>
import draggable from "vuedraggable";
import { controls } from "@/modules/forms/components/designer/config/forms-control-list";

export default {
     name: "forms.designer.toolbox",
     components: {
          draggable
     },
     props: {
          currentControl: {
               type: Object
          }
     },
     data() {
          return {
               toolboxConfig: {
                    activeTab: null
               },
               toolboxControls: controls
          };
     },
     computed: {
          controlSelected() {
               return this.currentControl ? true : false;
          }
     },
     methods: {
          formControlsUpdated(evt) {
               this.$emit("formControlsUpdated", evt);
          },
          cloneFormControl(control) {
               console.log("tb clone: ", control);

               this.$emit("cloneFormControl", control);
          }
     }
};
</script>

<style>
</style>
