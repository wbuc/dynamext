<template>
     <div>
          <x-toolbar>
               <template v-slot:default>
                    <v-btn @click="closeDesigner" text icon large color>
                         <v-icon color="secondary">mdi-arrow-left-bold</v-icon>
                         <span></span>
                    </v-btn>
               </template>
               <template v-slot:right>
                    <v-btn depressed large icon color="grey">
                         <v-icon>mdi-flag-variant-outline</v-icon>
                    </v-btn>
               </template>
          </x-toolbar>
          <v-row>
               <v-col cols="12" :md="explorerConfig.fullView ? '3':'3'">
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
                         <v-tabs-items
                              v-model="toolboxConfig.activeTab"
                              style="background-color: #ff000000"
                         >
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
                                   </div>
                              </v-tab-item>
                              <v-tab-item key="Templates" style="background-color: #ff000000">
                                   <v-card style="background-color: #ff000000">
                                        <div
                                             class="text-center grey--text py-10"
                                        >Templates coming soon!</div>
                                   </v-card>
                                   <v-card style="background-color: #ff000000">
                                        <!-- Content here! -->
                                   </v-card>
                              </v-tab-item>
                         </v-tabs-items>
                    </v-card>
               </v-col>
               <v-col cols="12" :md="explorerConfig.fullView ? '7':'6'">
                    <v-card class="x-form-design">
                         <v-card flat style="background-color: #ff000000">
                              <v-card-text>
                                   <span
                                        v-if="!canvasConfig.editName"
                                        @click="editScheduleName"
                                        class="title accent--text font-weight-light cursor-editable"
                                   >{{formData.name}}</span>
                                   <v-text-field
                                        v-else-if="canvasConfig.editName"
                                        v-model="formData.name"
                                        @blur="editScheduleName"
                                        v-on:keyup.enter="editScheduleName"
                                        ref="schedulename"
                                        outlined
                                        single-line
                                        hide-details
                                        dense
                                   ></v-text-field>
                                   <br />
                              </v-card-text>
                              <v-divider></v-divider>
                         </v-card>
                         <v-toolbar class="elevation-2">
                              <v-tabs v-model="canvasConfig.activeTab" color="grey">
                                   <v-tabs-slider color="secondary"></v-tabs-slider>
                                   <v-tab key="Design">Design</v-tab>
                                   <v-tab key="Manager">Manager</v-tab>
                                   <v-tab key="Settings">Settings</v-tab>
                              </v-tabs>
                              <v-spacer></v-spacer>
                         </v-toolbar>
                         <v-tabs-items
                              v-model="canvasConfig.activeTab"
                              style="background-color: #ff000000"
                         >
                              <v-tab-item key="Design" style="background-color: #ff000000">
                                   <div class="mt-1" style="background-color: #ff000000">
                                        <v-list width="100%">
                                             <v-list-item-group>
                                                  <div
                                                       v-if="formControls.length === 0"
                                                       class="text-center grey--text py-5"
                                                  >Add fields from the toolbox</div>
                                                  <draggable
                                                       class="dragArea list-group"
                                                       :list="formControls"
                                                       group="toolbox"
                                                       @change="log"
                                                       handle=".x-control-handle"
                                                       :class="{'empty-form-placeholder': isEmptyForm}"
                                                  >
                                                       <v-list-item
                                                            two-line
                                                            :ripple="canvasConfig.ripple"
                                                            v-for="(control,index) in formControls"
                                                            :key="control.id"
                                                            class="x-control"
                                                            @click="setCurrentControl(control)"
                                                            @mouseover="formControlHover = control.id"
                                                            @mouseout="formControlHover = null"
                                                       >
                                                            <v-list-item-action
                                                                 class="x-control-handle mr-2"
                                                            >
                                                                 <v-icon
                                                                      v-show="formControlHover === control.id"
                                                                      class="grey--text text--darken-1"
                                                                 >mdi-drag-vertical</v-icon>
                                                            </v-list-item-action>
                                                            <v-list-item-content
                                                                 class="x-control-content"
                                                            >
                                                                 <component
                                                                      :is="`${control.type}Control`"
                                                                      v-bind:control="control"
                                                                 ></component>
                                                            </v-list-item-content>
                                                            <v-list-item-action
                                                                 class="x-control-quick-actions"
                                                            >
                                                                 <div
                                                                      v-show="formControlHover === control.id"
                                                                 >
                                                                      <v-btn
                                                                           icon
                                                                           @click.stop="copyFormControl(control)"
                                                                      >
                                                                           <v-icon
                                                                                class="success--text text--lighten-1"
                                                                           >mdi-content-duplicate</v-icon>
                                                                      </v-btn>
                                                                      <v-btn
                                                                           icon
                                                                           @click.stop="deleteFormControl(index)"
                                                                      >
                                                                           <v-icon
                                                                                class="error--text"
                                                                           >mdi-delete</v-icon>
                                                                      </v-btn>
                                                                 </div>
                                                            </v-list-item-action>
                                                       </v-list-item>
                                                  </draggable>
                                             </v-list-item-group>
                                        </v-list>
                                   </div>
                                   <v-card flat style="background-color: #ff000000">
                                        <v-divider></v-divider>
                                        <v-card-actions class="pr-4 mt-2 pb-4">
                                             <v-spacer></v-spacer>
                                             <v-btn
                                                  text
                                                  large
                                                  outlined
                                                  @click="closeDesigner"
                                                  width="120px"
                                                  class="mr-2"
                                             >
                                                  <v-icon left color="error">mdi-close-thick</v-icon>
                                                  <span>Cancel</span>
                                             </v-btn>
                                             <v-btn
                                                  text
                                                  large
                                                  outlined
                                                  color
                                                  @click="saveForm"
                                                  width="120px"
                                             >
                                                  <v-icon left color="primary">mdi-check-bold</v-icon>
                                                  <span>Save</span>
                                             </v-btn>
                                        </v-card-actions>
                                   </v-card>
                              </v-tab-item>
                              <v-tab-item key="Manager" style="background-color: #ff000000">
                                   <div
                                        class="text-center grey--text py-10"
                                   >Schedule Manager coming soon!</div>
                              </v-tab-item>
                              <v-tab-item key="Settings" style="background-color: #ff000000">
                                   <div class="pt-5 mb-2 no-cursor">
                                        <v-row no-gutters>
                                             <v-col cols="12" xs="12" sm="12" md="12" lg="5">
                                                  <div class="pa-3">
                                                       <div class="grey--text">Schedule Name</div>
                                                       <div>{{formData.name}}</div>
                                                  </div>
                                             </v-col>
                                             <v-col cols="12" xs="12" sm="6" md="6" lg="5">
                                                  <div class="pa-3">
                                                       <div class="grey--text">Owner</div>
                                                       <div>{{formData.owner}}</div>
                                                  </div>
                                             </v-col>
                                             <v-col cols="12" xs="12" sm="6" md="6" lg="2">
                                                  <div class="pa-3">
                                                       <div class="grey--text">Created</div>
                                                       <div>{{formData.createdDate}}</div>
                                                  </div>
                                             </v-col>
                                        </v-row>
                                        <v-divider></v-divider>
                                        <v-row no-gutters>
                                             <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                                                  <v-card flat>
                                                       <v-card-text>
                                                            <div
                                                                 class="title font-weight-light my-3"
                                                            >Configuration</div>
                                                            <div class="grey--text">More to come...</div>
                                                       </v-card-text>
                                                  </v-card>
                                             </v-col>
                                        </v-row>
                                   </div>
                              </v-tab-item>
                         </v-tabs-items>
                    </v-card>
               </v-col>
               <v-col cols="12" :md="explorerConfig.fullView ? '2':'3'">
                    <v-card class="x-form">
                         <v-card flat style="background-color: #ff000000" class="no-cursor">
                              <v-card-text>
                                   <span class="title font-weight-light">Properties</span>
                              </v-card-text>
                              <v-divider></v-divider>
                         </v-card>
                         <v-toolbar class="elevation-2">
                              <v-tabs v-model="propertiesConfig.activeTab" color="grey">
                                   <v-tabs-slider color="secondary"></v-tabs-slider>
                                   <v-tab key="General">General</v-tab>
                                   <v-tab key="Advanced">Advanced</v-tab>
                              </v-tabs>
                         </v-toolbar>
                         <v-tabs-items
                              v-model="propertiesConfig.activeTab"
                              style="background-color: #ff000000"
                         >
                              <v-tab-item key="General" style="background-color: #ff000000">
                                   <div class="mt-1" style="background-color: #ff000000">
                                        <div
                                             v-if="!controlSelected"
                                             class="text-center grey--text py-10 no-cursor"
                                        >No control selected</div>
                                        <div
                                             v-else-if="controlSelected"
                                             class="x-control-properties"
                                        >
                                             <div
                                                  v-for="(cat, index) in controlTypeConfig[currentControl.type]"
                                                  :key="index"
                                             >
                                                  <div class="px-4 pt-4 d-none">{{cat.group}}</div>
                                                  <v-list flat>
                                                       <v-list-item
                                                            :ripple="propertiesConfig.ripple"
                                                       >
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
                                                       <v-list-item
                                                            :ripple="propertiesConfig.ripple"
                                                       >
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
                                                            <v-list-item-content
                                                                 v-if="prop.type === 'text'"
                                                            >
                                                                 <v-list-item-title>{{prop.displayName}}</v-list-item-title>
                                                                 <v-text-field
                                                                      type="text"
                                                                      style="width:100%"
                                                                      outlined
                                                                      single-line
                                                                      hide-details
                                                                      dense
                                                                      v-model="currentControl.properties[prop.name]"
                                                                 ></v-text-field>
                                                            </v-list-item-content>
                                                            <v-list-item-content
                                                                 v-if="prop.type === 'number'"
                                                            >
                                                                 <v-list-item-title>{{prop.displayName}}</v-list-item-title>
                                                                 <v-text-field
                                                                      type="number"
                                                                      outlined
                                                                      single-line
                                                                      hide-details
                                                                      dense
                                                                      v-model="currentControl.properties[prop.name]"
                                                                 ></v-text-field>
                                                            </v-list-item-content>
                                                            <v-list-item-content
                                                                 v-if="prop.type === 'select'"
                                                            >
                                                                 <v-list-item-title>{{prop.displayName}}</v-list-item-title>
                                                                 <template
                                                                      v-if="currentControl.type !== 'dropdown'"
                                                                 >
                                                                      <v-select
                                                                           :items="prop.options"
                                                                           v-model="currentControl.properties[prop.name]"
                                                                           item-text="displayName"
                                                                           item-value="name"
                                                                           dense
                                                                           outlined
                                                                           hide-details
                                                                           v-on="typeof prop.onChange !== 'undefined' ? {change: prop.onChange} : {}"
                                                                      ></v-select>
                                                                 </template>
                                                                 <template
                                                                      v-else-if="currentControl.type === 'dropdown'"
                                                                 >
                                                                      <v-select
                                                                           :items="currentControl.properties.selectableOptions"
                                                                           v-model="currentControl.properties[prop.name]"
                                                                           dense
                                                                           outlined
                                                                           hide-details
                                                                           v-on="typeof prop.onChange !== 'undefined' ? {change: prop.onChange} : {}"
                                                                      ></v-select>
                                                                 </template>
                                                            </v-list-item-content>
                                                            <v-list-item-content
                                                                 v-if="prop.type === 'tag'"
                                                            >
                                                                 <v-list-item-title>{{prop.displayName}}</v-list-item-title>
                                                                 <tags
                                                                      v-model="currentControl.properties[prop.name]"
                                                                 ></tags>
                                                            </v-list-item-content>
                                                       </v-list-item>
                                                  </v-list>
                                             </div>
                                        </div>
                                   </div>
                              </v-tab-item>
                              <v-tab-item key="Advanced" style="background-color: #ff000000">
                                   <v-card flat style="background-color: #ff000000">
                                        <div
                                             v-if="!controlSelected"
                                             class="text-center grey--text py-10 no-cursor"
                                        >No control selected</div>
                                        <div
                                             v-else-if="controlSelected"
                                             class="x-control-properties"
                                        >
                                             <!-- <div>{{currentControl.hasValidations}}</div> -->
                                             <v-card-text class="px-4 pb-0">
                                                  <v-checkbox
                                                       class="mt-0"
                                                       id="fieldValidation"
                                                       v-model="currentControl.hasValidations"
                                                       label="Add field validation"
                                                       @change="addFieldValidation"
                                                  ></v-checkbox>
                                             </v-card-text>

                                             <div v-if="currentControl.hasValidations">
                                                  <div
                                                       v-for="(cat, index) in controlTypeConfig[currentControl.type]"
                                                       :key="index"
                                                  >
                                                       <v-list-item
                                                            :ripple="propertiesConfig.ripple"
                                                            v-for="(validation, i) in cat.validations"
                                                            :key="i"
                                                       >
                                                            <v-list-item-content
                                                                 v-if="validation.type === 'text'"
                                                            >
                                                                 <v-list-item-title>{{validation.displayName}}</v-list-item-title>
                                                                 <v-text-field
                                                                      type="text"
                                                                      style="width:100%"
                                                                      outlined
                                                                      single-line
                                                                      hide-details
                                                                      dense
                                                                      v-model="currentControl.validations[validation.name]"
                                                                 ></v-text-field>
                                                            </v-list-item-content>
                                                            <v-list-item-content
                                                                 v-if="validation.type === 'number'"
                                                            >
                                                                 <v-list-item-title>{{validation.displayName}}</v-list-item-title>
                                                                 <v-text-field
                                                                      type="number"
                                                                      outlined
                                                                      single-line
                                                                      hide-details
                                                                      dense
                                                                      v-model="currentControl.validations[validation.name]"
                                                                 ></v-text-field>
                                                            </v-list-item-content>
                                                            <v-list-item-content
                                                                 v-if="validation.type === 'select'"
                                                            >
                                                                 <v-list-item-title>{{validation.displayName}}</v-list-item-title>
                                                                 <v-select
                                                                      :items="prop.options"
                                                                      v-model="currentControl.validations[validation.name]"
                                                                      item-text="displayName"
                                                                      item-value="name"
                                                                      dense
                                                                      outlined
                                                                 ></v-select>
                                                            </v-list-item-content>
                                                       </v-list-item>
                                                  </div>
                                             </div>
                                        </div>
                                   </v-card>
                              </v-tab-item>
                         </v-tabs-items>
                    </v-card>
               </v-col>
          </v-row>
     </div>
</template>

<script>
import draggable from "vuedraggable";
import tags from "@/components/control-tag-inline";

import { mapGetters } from "vuex";

// All controls that will be used in the toolbox
import { controls } from "@/modules/schedules/components/designer/controlList";

// import { controlTypes } from "@/modules/schedules/components/designer/controlTypes";

// *** CONTROL TEMPLATES START
import textControl from "@/modules/schedules/components/designer/controls/textbox";
import paragraphControl from "@/modules/schedules/components/designer/controls/paragraph";
import headerControl from "@/modules/schedules/components/designer/controls/header";
import numberControl from "@/modules/schedules/components/designer/controls/number";
import decimalControl from "@/modules/schedules/components/designer/controls/decimal";
import informationControl from "@/modules/schedules/components/designer/controls/information";
import yesnoControl from "@/modules/schedules/components/designer/controls/yesno";
import dropdownControl from "@/modules/schedules/components/designer/controls/dropdown";
// *** CONTROL TEMPLATES END

export default {
     name: "Schedules.Canvas.Designer",
     components: {
          draggable,
          tags,
          textControl,
          paragraphControl,
          headerControl,
          numberControl,
          decimalControl,
          informationControl,
          yesnoControl,
          dropdownControl
     },
     computed: {
          ...mapGetters(["api", "dynamicForm"]),
          controlSelected() {
               return this.currentControl ? true : false;
          },
          isEmptyForm() {
               return this.formControls.length === 0;
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
               canvasConfig: {
                    avctiveTab: null,
                    ripple: false,
                    editName: false,
                    globalId: 0
               },
               propertiesConfig: {
                    avctiveTab: null,
                    ripple: false
               },
               toolboxControls: controls,
               controlTypeConfig: {
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
                                        name: "placeholder",
                                        displayName: "Placeholder Value",
                                        value: "",
                                        type: "text",
                                        placeholder: ""
                                   }
                              ],
                              validations: [
                                   {
                                        name: "minLength",
                                        displayName: "Minimum Length",
                                        value: 0,
                                        type: "text"
                                   },
                                   {
                                        name: "maxLength",
                                        displayName: "Maximum Length",
                                        value: 100,
                                        type: "text"
                                   },
                                   {
                                        name: "customExpression",
                                        displayName: "Custom Expression",
                                        value: null,
                                        type: "text"
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
                                        name: "placeholder",
                                        displayName: "Placeholder Value",
                                        value: "",
                                        type: "text",
                                        placeholder: ""
                                   },
                                   {
                                        name: "rows",
                                        displayName: "Rows",
                                        value: 5,
                                        type: "number",
                                        placeholder: 5
                                   }
                              ],
                              validations: [
                                   {
                                        name: "minLength",
                                        displayName: "Minimum Length",
                                        value: 0,
                                        type: "number"
                                   },
                                   {
                                        name: "maxLength",
                                        displayName: "Maximum Length",
                                        value: 5000,
                                        type: "number"
                                   },
                                   {
                                        name: "customExpression",
                                        displayName: "Custom Expression",
                                        value: null,
                                        type: "text"
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
                                        displayName: "Size",
                                        value: "",
                                        type: "select",
                                        options: [
                                             {
                                                  name: "display-3",
                                                  displayName: "Extra Large"
                                             },
                                             {
                                                  name: "display-2",
                                                  displayName: "Large"
                                             },
                                             {
                                                  name: "display-1",
                                                  displayName: "Medium"
                                             },
                                             {
                                                  name: "title",
                                                  displayName: "Small"
                                             }
                                        ]
                                   },
                                   {
                                        name: "color",
                                        displayName: "Color",
                                        value: "",
                                        type: "select",
                                        options: [
                                             {
                                                  name: "",
                                                  displayName: "Default"
                                             },
                                             {
                                                  name: "primary--text",
                                                  displayName: "Primary"
                                             },
                                             {
                                                  name: "secondary--text",
                                                  displayName: "Secondary"
                                             },
                                             {
                                                  name: "accent--text",
                                                  displayName: "Accent"
                                             },
                                             {
                                                  name: "warning--text",
                                                  displayName: "Caution"
                                             },
                                             {
                                                  name: "error--text",
                                                  displayName: "Important"
                                             }
                                        ]
                                   },
                                   {
                                        name: "style",
                                        displayName: "Style",
                                        value: "",
                                        type: "select",
                                        options: [
                                             {
                                                  name: "",
                                                  displayName: "None"
                                             },
                                             {
                                                  name: "border",
                                                  displayName: "Border"
                                             }
                                        ]
                                   }
                              ]
                         }
                    ],
                    decimal: [],
                    number: [
                         {
                              group: "Group 1",
                              properties: [
                                   {
                                        name: "default",
                                        displayName: "Default value",
                                        value: "",
                                        type: "number",
                                        placeholder: 0
                                   },
                                   {
                                        name: "placeholder",
                                        displayName: "Placeholder",
                                        value: "",
                                        type: "text"
                                   }
                              ],
                              validations: [
                                   {
                                        name: "minValue",
                                        displayName: "Minimum value",
                                        value: 0,
                                        type: "number"
                                   },
                                   {
                                        name: "maxValue",
                                        displayName: "Maximum value",
                                        value: 1000,
                                        type: "number"
                                   },
                                   {
                                        name: "customExpression",
                                        displayName: "Custom expression",
                                        value: null,
                                        type: "text"
                                   }
                              ]
                         }
                    ],
                    information: [
                         {
                              group: "Group 1",
                              properties: [
                                   {
                                        name: "size",
                                        displayName: "Size",
                                        value: "",
                                        type: "select",
                                        options: [
                                             {
                                                  name: "display-1",
                                                  displayName: "Extra Large"
                                             },
                                             {
                                                  name: "title",
                                                  displayName: "Large"
                                             },
                                             {
                                                  name: "body-1",
                                                  displayName: "Medium"
                                             },
                                             {
                                                  name: "caption",
                                                  displayName: "Small"
                                             }
                                        ]
                                   },
                                   {
                                        name: "type",
                                        displayName: "Type",
                                        value: "",
                                        type: "select",
                                        options: [
                                             {
                                                  name: null,
                                                  displayName: "None",
                                                  icon: false
                                             },
                                             {
                                                  name: "info",
                                                  displayName: "Information"
                                             },
                                             {
                                                  name: "warning",
                                                  displayName: "Caution"
                                             },
                                             {
                                                  name: "error",
                                                  displayName: "Important"
                                             }
                                        ]
                                   },
                                   {
                                        name: "style",
                                        displayName: "Style",
                                        value: "",
                                        type: "select",
                                        options: [
                                             {
                                                  name: {},
                                                  displayName: "None"
                                             },
                                             {
                                                  name: { outlined: true },
                                                  displayName: "Outlined"
                                             },
                                             {
                                                  name: { prominent: true },
                                                  displayName: "Prominent"
                                             },
                                             {
                                                  name: { dense: true },
                                                  displayName: "Dense"
                                             }
                                        ]
                                   }
                              ]
                         }
                    ],
                    yesno: [
                         {
                              group: "Group 1",
                              properties: [
                                   {
                                        name: "default",
                                        displayName: "Default value",
                                        value: null,
                                        type: "select",
                                        options: [
                                             {
                                                  name: null,
                                                  displayName: "None"
                                             },
                                             {
                                                  name: "true",
                                                  displayName: "Yes"
                                             },
                                             {
                                                  name: "false",
                                                  displayName: "No"
                                             }
                                        ],
                                        onChange: val => {
                                             // NOTE *** these events can be used on specific properties to execute when needed to perform additional logic.
                                             // ensure that the property type in the properties panel has been updated to execute this func. this would
                                             // typically only be used when setting a default value from an option field.
                                             // Set the current contol value to the new default option selected.
                                             this.currentControl.value = val;
                                        }
                                   }
                              ]
                         }
                    ],
                    dropdown: [
                         {
                              group: "Group 1",
                              properties: [
                                   {
                                        name: "default",
                                        displayName: "Default value",
                                        value: null,
                                        type: "select",
                                        options: [],
                                        onChange: val => {
                                             this.currentControl.value = val;
                                        }
                                   },
                                   {
                                        name: "selectableOptions",
                                        displayName: "Dropdown options",
                                        value: "",
                                        type: "tag",
                                        placeholder: ""
                                   }
                              ],
                              validations: [
                                   {
                                        name: "customExpression",
                                        displayName: "Custom Expression",
                                        value: null,
                                        type: "text"
                                   }
                              ]
                         }
                    ]
               },
               formData: null,
               formControls: [],
               currentControl: null,
               formControlHover: null
          };
     },
     methods: {
          toggleFullView() {
               this.explorerConfig.fullView = !this.explorerConfig.fullView;
          },
          setCurrentControl(control) {
               this.currentControl = control;
          },
          addFieldValidation() {
               if (this.currentControl.hasValidations) {
                    const controlType = this.currentControl.type;
                    const typeGroups = this.controlTypeConfig[controlType];
                    let newObj = {};
                    for (let groupIndex in typeGroups) {
                         for (let validIndex in typeGroups[groupIndex]
                              .validations) {
                              const validation =
                                   typeGroups[groupIndex].validations[
                                        validIndex
                                   ];
                              newObj[validation.name] = validation.value;
                         }
                    }
                    // bind the new object to the actual control validations
                    this.$set(this.currentControl, "validations", newObj);
               } else {
                    // empty the control validations
                    this.$set(this.currentControl, "validations", {});
               }
          },
          log(evt) {
               // draggable changegd.
               window.console.log(evt);
          },
          cloneObject(object) {
               let newObj = {};
               for (let key in object) {
                    newObj[key] = object[key];
               }
               return newObj;
          },
          cloneFormControl(item) {
               let newControl = {
                    id: this.canvasConfig.globalId++,
                    name: `Untitled ${item.name}`,
                    instruction: item.instruction,
                    value: item.value,
                    hasValidations: item.hasValidations,
                    properties: {},
                    validations: {},
                    icon: item.icon,
                    type: item.type,
                    edit: false,
                    config: false
               };
               let newProps = this.cloneObject(item.properties);
               let newValids = this.cloneObject(item.validations);

               this.$set(newControl, "properties", newProps);
               this.$set(newControl, "validations", newValids);

               return newControl;
          },
          copyFormControl(control) {
               const copiedControl = this.cloneFormControl(control);
               this.formControls.push(copiedControl);
          },
          deleteFormControl(itemIndex) {
               this.formControls.splice(itemIndex, 1);
          },
          toggleControlLabelEdit(event, control) {
               //use this link for howTo on list edits.
               //https://jsfiddle.net/wbuc/mnybh4dq/2/

               this.$set(control, "edit", !control.edit);
               // Focus input field
               if (control.edit) {
                    //    this.$nextTick(() => {
                    //           this.$refs[field].focus();
                    //      });
                    this.$nextTick(() => {
                         event.$$.input.focus();
                    });
               }
          },
          closeDesigner() {
               this.$router.replace({ name: "Schedule.Dashboard" });
          },
          saveForm() {
               this.$store
                    .dispatch("saveFormDefinition", this.formData)
                    .then(() => {
                         this.$store.dispatch(
                              "notifySuccess",
                              `${this.formData.name} has been updated!`
                         );
                    });
          },
          editScheduleName() {
               this.canvasConfig.editName = !this.canvasConfig.editName;
               if (this.canvasConfig.editName)
                    this.$nextTick(() => {
                         this.$refs["schedulename"].focus();
                    });
          }
     },
     created() {
          // By reference assignment.
          this.formData = this.dynamicForm;
          this.formControls = this.formData.formControls;
          // set the new index to use for field controls. TODO FIX ID.
          this.canvasConfig.globalId = this.formControls.length + 1;
     }
};
</script>

<style>
.no-cursor {
     cursor: default;
}
.cursor-editable {
     cursor: pointer;
}
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

.x-form-design .x-control {
     /* border: 1px solid #0000001f; */
     cursor: pointer;
}
.x-form-design .x-control-handle {
     cursor: move;
}
.x-form-design .x-control-content {
     min-height: 74px !important;
}
.x-form-design .x-control-quick-actions {
     width: 30px;
     margin-top: 0px !important;
     margin-bottom: 0px !important;
}

.x-form-design .empty-form-placeholder {
     border: 2px dashed #9e9e9e;
     min-height: 80px;
     margin-left: 8px;
     margin-right: 8px;
}
.x-form-design {
}
</style>