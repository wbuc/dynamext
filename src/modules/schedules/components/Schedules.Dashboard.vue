<template>
     <v-row>
          <v-col cols="12" :md="explorerConfig.fullView ? '3':'3'">
               <v-card class="x-toolbox">
                    <v-card flat style="background-color: #ff000000">
                         <v-card-text>
                              <span class="subtitle-1 font-weight-light">Toolbox</span>
                         </v-card-text>
                         <v-divider></v-divider>
                    </v-card>
                    <v-toolbar class="elevation-2">
                         <v-tabs v-model="toolboxConfig.activeTab" color="grey">
                              <v-tabs-slider color="accent"></v-tabs-slider>
                              <v-tab key="Fields">Fields</v-tab>
                              <v-tab key="Templates">Templates</v-tab>
                         </v-tabs>
                    </v-toolbar>
                    <v-tabs-items
                         v-model="toolboxConfig.activeTab"
                         style="background-color: #ff000000"
                    >
                         <v-tab-item key="Fields" style="background-color: #ff000000">
                              <!-- <v-card flat style="background-color: #ff000000">
                                   <v-card-actions>
                                        <v-btn icon>
                                             <v-icon>mdi-folder-plus</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                             <v-icon>mdi-refresh</v-icon>
                                        </v-btn>

                                        <v-spacer></v-spacer>
                                        <v-btn icon @click="toggleFullView">
                                             <v-icon>mdi-arrow-expand</v-icon>
                                        </v-btn>
                                   </v-card-actions>
                              </v-card>-->
                              <v-card flat style="background-color: #ff000000">
                                   <v-list width="100%">
                                        <draggable
                                             class="dragArea list-group"
                                             :list="toolboxControls"
                                             :group="{ name: 'toolbox', pull: 'clone', put: false }"
                                             :clone="cloneControl"
                                             @change="log"
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
                              </v-card>
                         </v-tab-item>
                         <v-tab-item key="Templates" style="background-color: #ff000000">
                              <v-card flat style="background-color: #ff000000">
                                   <v-card-actions>
                                        <v-btn icon>
                                             <v-icon>mdi-folder-plus</v-icon>
                                        </v-btn>
                                        <v-btn icon>
                                             <v-icon>mdi-refresh</v-icon>
                                        </v-btn>

                                        <v-spacer></v-spacer>
                                        <v-btn icon @click="toggleFullView">
                                             <v-icon>mdi-arrow-expand</v-icon>
                                        </v-btn>
                                   </v-card-actions>
                              </v-card>
                              <v-card flat style="background-color: #ff000000">
                                   <!-- Content here! -->
                              </v-card>
                         </v-tab-item>
                    </v-tabs-items>
               </v-card>
          </v-col>
          <v-col cols="12" :md="explorerConfig.fullView ? '7':'6'">
               <v-card class="x-form">
                    <v-card flat style="background-color: #ff000000">
                         <v-card-text>
                              <span class="subtitle-1 font-weight-light">New Schedule Name</span>
                         </v-card-text>
                         <v-divider></v-divider>
                    </v-card>
                    <v-toolbar class="elevation-2">
                         <v-tabs v-model="designerConfig.activeTab" color="grey">
                              <v-tabs-slider color="accent"></v-tabs-slider>
                              <v-tab key="Design">Design</v-tab>
                              <v-tab key="Properties">Properties</v-tab>
                         </v-tabs>
                    </v-toolbar>
                    <v-tabs-items
                         v-model="designerConfig.activeTab"
                         style="background-color: #ff000000"
                    >
                         <v-tab-item key="Design" style="background-color: #ff000000">
                              <!-- <v-card flat style="background-color: #ff000000">
                                   <v-card-text>
                                        <span class="headline font-weight-light">New Schedule Name</span>
                                   </v-card-text>
                                   <v-divider></v-divider>
                              </v-card>-->
                              <v-card flat style="background-color: #ff000000">
                                   <v-list width="100%">
                                        <draggable
                                             class="dragArea list-group"
                                             :list="formControls"
                                             group="toolbox"
                                             @change="log"
                                             handle=".x-control-handle"
                                        >
                                             <v-list-item
                                                  two-line
                                                  v-for="element in formControls"
                                                  :key="element.id"
                                                  color="primary"
                                                  class="x-control"
                                                  @click="selectControl(element)"
                                             >
                                                  <v-list-item-action class="x-control-handle">
                                                       <v-icon
                                                            class="grey--text text--darken-1"
                                                       >mdi-drag</v-icon>
                                                  </v-list-item-action>
                                                  <v-list-item-action>
                                                       <v-icon>{{element.icon}}</v-icon>
                                                  </v-list-item-action>
                                                  <v-list-item-content>
                                                       <v-list-item-title>{{ element.name }}</v-list-item-title>
                                                  </v-list-item-content>
                                             </v-list-item>
                                        </draggable>
                                   </v-list>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item
                              key="Properties"
                              style="background-color: #ff000000"
                         >Customise properties for schedule!</v-tab-item>
                    </v-tabs-items>
               </v-card>
          </v-col>
          <v-col cols="12" :md="explorerConfig.fullView ? '2':'3'">
               <v-card class="x-form">
                    <v-card flat style="background-color: #ff000000">
                         <v-card-text>
                              <span class="subtitle-1 font-weight-light">Properties</span>
                         </v-card-text>
                         <v-divider></v-divider>
                    </v-card>
                    <v-toolbar class="elevation-2">
                         <v-tabs v-model="propertiesConfig.activeTab" color="grey">
                              <v-tabs-slider color="accent"></v-tabs-slider>
                              <v-tab key="General">General</v-tab>
                              <v-tab key="Advanced">Advanced</v-tab>
                         </v-tabs>
                    </v-toolbar>
                    <v-tabs-items
                         v-model="propertiesConfig.activeTab"
                         style="background-color: #ff000000"
                    >
                         <v-tab-item key="General" style="background-color: #ff000000">
                              <v-card flat style="background-color: #ff000000">
                                   <span
                                        v-if="!controlSelected"
                                        class="text-center"
                                   >No control selected</span>
                                   <v-list
                                        v-else-if="controlSelected"
                                        width="100%"
                                        class="x-control-properties"
                                   >
                                        selected
                                        {{this.selectedControl.name}} !
                                        <v-list-item-group
                                             no-action
                                             v-for="(cat, index) in controlTypeProperties[selectedControl.type]"
                                             :key="index"
                                        >
                                             <v-list-item-content>
                                                  <v-list-item-title>{{cat.group}}</v-list-item-title>
                                             </v-list-item-content>
                                             <v-list flat :ripple="propertiesConfig.ripple">
                                                  <v-list-item
                                                       :ripple="propertiesConfig.ripple"
                                                       v-for="(prop, i) in cat.properties"
                                                       :key="i"
                                                  >
                                                       <v-list-item-content>
                                                            <v-list-item-title>
                                                                 {{prop.name}}
                                                                 <v-text-field
                                                                      style="width:100%"
                                                                      label="Search"
                                                                      outlined
                                                                      single-line
                                                                      hide-details
                                                                      dense
                                                                 ></v-text-field>
                                                            </v-list-item-title>
                                                       </v-list-item-content>
                                                  </v-list-item>
                                             </v-list>
                                        </v-list-item-group>
                                        <!-- <v-list-item 
                                                  two-line
                                                  v-for="element in formControls"
                                                  :key="element.id"
                                                  color="primary"
                                                  class="x-control"
                                             >
                                                  <v-list-item-action class="x-control-handle">
                                                       <v-icon
                                                            class="grey--text text--darken-1"
                                                       >mdi-drag</v-icon>
                                                  </v-list-item-action>
                                                  <v-list-item-action>
                                                       <v-icon>{{element.icon}}</v-icon>
                                                  </v-list-item-action>
                                                  <v-list-item-content>
                                                       <v-list-item-title>{{ element.name }}</v-list-item-title>
                                                  </v-list-item-content>
                                        </v-list-item>-->
                                   </v-list>
                              </v-card>
                         </v-tab-item>
                         <v-tab-item
                              key="Advanced"
                              style="background-color: #ff000000"
                         >Customise properties for schedule!</v-tab-item>
                    </v-tabs-items>
               </v-card>
          </v-col>
     </v-row>
</template>

<script>
import { mapGetters } from "vuex";

import draggable from "vuedraggable";

let idGlobal = 9;
export default {
     name: "Schedules.Dashboard",
     components: { draggable },
     computed: {
          ...mapGetters(["api"]),
          controlSelected() {
               return this.selectedControl ? true : false;
          }
     },
     data() {
          return {
               explorerConfig: {
                    fullView: false
               },
               toolboxConfig: {
                    activeTab: null
               },
               designerConfig: {
                    avctiveTab: null
               },
               propertiesConfig: {
                    avctiveTab: null,
                    ripple: false
               },
               toolboxControls: [
                    {
                         id: 1,
                         name: "Text",
                         type: "text",
                         description: "Single line input field",
                         icon: "mdi-format-text",
                         properties: {
                              default: null
                         }
                    },
                    {
                         id: 2,
                         name: "Paragraph",
                         type: "paragraph",
                         description: "Multi line text inut field",
                         icon: "mdi-format-pilcrow",
                         properties: {
                              default: null
                         }
                    },
                    {
                         id: 3,
                         name: "Header",
                         type: "header",
                         description: "Header used for grouping fields",
                         icon: "mdi-format-header-1",
                         properties: {
                              size: "headline",
                              color: "primary"
                         }
                    },
                    {
                         id: 4,
                         name: "Decimal",
                         type: "decimal",
                         description: "Numbers with decimal values",
                         icon: "mdi-decimal",
                         properties: {}
                    },
                    {
                         id: 5,
                         name: "Number",
                         type: "number",
                         description: "Full number values",
                         icon: "mdi-numeric-10",
                         properties: {}
                    }
               ],
               controlTypeProperties: {
                    text: [
                         {
                              group: "Group 1",
                              properties: [
                                   {
                                        name: "default",
                                        displayName: "Default Value",
                                        value: "",
                                        type: "text",
                                        placeholder:
                                             "Proivde default value for the field."
                                   },
                                   {
                                        name: "minValue",
                                        displayName: "Minimum Value",
                                        value: "",
                                        type: "text",
                                        placeholder:
                                             "Proivde default value for the field."
                                   },
                                   {
                                        name: "maxValue",
                                        displayName: "Maximum Value",
                                        value: "",
                                        type: "text",
                                        placeholder:
                                             "Proivde default value for the field."
                                   }
                              ]
                         }
                    ],
                    paragraph: [],
                    header: [
                         {
                              group: "Group 1",
                              properties: [
                                   {
                                        name: "size",
                                        displayName: "Header Size",
                                        value: "",
                                        type: "option",
                                        options: [
                                             {
                                                  name: "headline",
                                                  displayName: "Biggest"
                                             },
                                             {
                                                  name: "title",
                                                  displayName: "Bigger"
                                             },
                                             {
                                                  name: "subtitle",
                                                  displayName: "Big"
                                             }
                                        ]
                                   },
                                   {
                                        name: "color",
                                        displayName: "Header Color",
                                        value: "",
                                        type: "option",
                                        options: [
                                             {
                                                  name: "primary",
                                                  displayName: "Jade Green"
                                             },
                                             {
                                                  name: "secondary",
                                                  displayName: "Ruby Red"
                                             },
                                             {
                                                  name: "accent",
                                                  displayName: "Lemon Yellow"
                                             }
                                        ]
                                   }
                              ]
                         }
                    ],
                    decimal: [],
                    number: []
               },
               formControls: [
                    {
                         id: 91,
                         name: "Header",
                         value: null,
                         icon: "mdi-format-header-1",
                         type: "header",
                         properties: {
                              color: "primary",
                              default: null
                         },
                         edit: false,
                         config: false
                    },
                    {
                         id: 92,
                         name: "Text",
                         value: null,
                         icon: "mdi-format-text",
                         type: "text",
                         properties: {
                              default: null
                         },
                         edit: false,
                         config: false
                    },
                    {
                         id: 93,
                         name: "Paragraph",
                         value: null,
                         icon: "mdi-format-pilcrow",
                         type: "paragraph",
                         properties: {
                              default: null
                         },
                         edit: false,
                         config: false
                    }
               ],
               selectedControl: null
          };
     },
     methods: {
          toggleFullView() {
               this.explorerConfig.fullView = !this.explorerConfig.fullView;
          },
          selectControl(control) {
               this.selectedControl = control;
               console.log(control);
          },
          log(evt) {
               window.console.log(evt);
          },
          cloneControl(item) {
               console.log(item);
               /* item.name and item.id and item.type */
               return {
                    id: idGlobal++,
                    name: `Control ${item.name}`,
                    value: null,
                    properties: item.properties,
                    icon: item.icon,
                    type: item.type,
                    edit: false,
                    config: false
               };
          }
     },
     created() {}
};
</script>

<style>
.v-treeview-node {
     cursor: pointer;
}
.x-context-panel {
     position: -webkit-sticky;
     position: sticky;
     top: 100px;
}
.x-toolbox .x-control:hover {
     cursor: move;
     /* background-color: #f6f6f6; */
}
.x-toolbox {
     /* position: -webkit-sticky;
     position: sticky;
     top: 100px; */
}
.x-control-properties {
     /* pointer-events: none; */
     cursor: default !important;
}
.x-form .x-control {
     /* border: 1px solid #0000001f; */
     cursor: pointer;
}
.x-form .x-control-handle {
     cursor: move;
}
</style>