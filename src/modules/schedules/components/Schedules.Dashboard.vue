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
                              <!-- <v-spacer></v-spacer> -->
                              <!-- <v-btn color="primary" width="120px">Save</v-btn> -->
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
                              <v-card flat style="background-color: #ff000000">
                                   <v-divider></v-divider>
                                   <!-- <v-card-text>
                                        <span class="subtitle-1 font-weight-light"></span>
                                   </v-card-text>-->
                                   <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="primary" width="120px">Save</v-btn>
                                   </v-card-actions>
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
                                   <div
                                        v-if="!controlSelected"
                                        class="text-center grey--text py-10"
                                   >No control selected</div>
                                   <div v-else-if="controlSelected" class="x-control-properties">
                                        <div
                                             v-for="(cat, index) in controlTypeProperties[currentControl.type]"
                                             :key="index"
                                        >
                                             <div class="px-4 pt-4 d-none">{{cat.group}}</div>

                                             <v-list flat>
                                                  <v-list-item :ripple="propertiesConfig.ripple">
                                                       <v-list-item-content>
                                                            <v-list-item-title>Title</v-list-item-title>
                                                            <v-text-field
                                                                 style="width:100%"
                                                                 outlined
                                                                 single-line
                                                                 hide-details
                                                                 dense
                                                                 v-model="currentControl.name"
                                                            ></v-text-field>
                                                       </v-list-item-content>
                                                  </v-list-item>
                                                  <v-list-item :ripple="propertiesConfig.ripple">
                                                       <v-list-item-content>
                                                            <v-list-item-title>Instructions</v-list-item-title>
                                                            <v-text-field
                                                                 style="width:100%"
                                                                 outlined
                                                                 single-line
                                                                 hide-details
                                                                 dense
                                                                 v-model="currentControl.instruction"
                                                            ></v-text-field>
                                                       </v-list-item-content>
                                                  </v-list-item>
                                                  <v-divider></v-divider>
                                                  <v-list-item
                                                       :ripple="propertiesConfig.ripple"
                                                       v-for="(prop, i) in cat.properties"
                                                       :key="i"
                                                  >
                                                       <v-list-item-content>
                                                            <v-list-item-title>{{prop.displayName}}</v-list-item-title>
                                                            <v-text-field
                                                                 style="width:100%"
                                                                 outlined
                                                                 single-line
                                                                 hide-details
                                                                 dense
                                                                 v-model="currentControl.properties[prop.name]"
                                                            ></v-text-field>
                                                       </v-list-item-content>
                                                  </v-list-item>
                                             </v-list>
                                        </div>
                                   </div>
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
// let newId = ()=>{
//      return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
// }

import { mapGetters } from "vuex";

import draggable from "vuedraggable";

let idGlobal = 9;
export default {
     name: "Schedules.Dashboard",
     components: { draggable },
     computed: {
          ...mapGetters(["api"]),
          controlSelected() {
               return this.currentControl ? true : false;
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
                              default: null,
                              minLength: 1,
                              maxLength: 100
                         }
                    },
                    {
                         id: 2,
                         name: "Paragraph",
                         type: "paragraph",
                         description: "Multi line text inut field",
                         icon: "mdi-format-pilcrow",
                         properties: {
                              default: null,
                              rows: 5
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
                                        name: "minLength",
                                        displayName: "Minimum Length",
                                        value: "",
                                        type: "text",
                                        placeholder:
                                             "Proivde default value for the field."
                                   },
                                   {
                                        name: "maxLength",
                                        displayName: "Maximum Length",
                                        value: "",
                                        type: "text",
                                        placeholder:
                                             "Proivde default value for the field."
                                   }
                              ]
                         }
                    ],
                    paragraph: [
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
                                        name: "rows",
                                        displayName: "Rows",
                                        value: "",
                                        type: "number",
                                        placeholder: 5
                                   }
                              ]
                         }
                    ],
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
                         instruction: "",
                         value: null,
                         icon: "mdi-format-header-1",
                         type: "header",
                         properties: {
                              color: "primary",
                              size: "headline"
                         },
                         edit: false,
                         config: false
                    },
                    {
                         id: 92,
                         name: "Text",
                         instruction: "",
                         value: null,
                         icon: "mdi-format-text",
                         type: "text",
                         properties: {
                              default: null,
                              minLength: 1,
                              maxLength: 100
                         },
                         edit: false,
                         config: false
                    },
                    {
                         id: 93,
                         name: "Paragraph",
                         instruction: "",
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
               currentControl: null
          };
     },
     methods: {
          toggleFullView() {
               this.explorerConfig.fullView = !this.explorerConfig.fullView;
          },
          selectControl(control) {
               this.currentControl = control;
               console.log(control);
          },
          log(evt) {
               window.console.log(evt);
          },
          cloneObject(object) {
               let newObj = {};
               for (let key in object) {
                    newObj[key] = object[key]; // console.log("prop: ", key, " value: ", object[key]);
               }
               return newObj;
          },

          cloneControl(item) {
               let newControl = {
                    id: idGlobal++,
                    name: `Untitled ${item.name}`,
                    instruction: null,
                    value: null,
                    properties: {},
                    icon: item.icon,
                    type: item.type,
                    edit: false,
                    config: false
               };
               let newProps = this.cloneObject(item.properties);
               this.$set(newControl, "properties", newProps);

               return newControl;
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