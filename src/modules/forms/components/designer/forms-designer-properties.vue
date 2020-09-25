<template>
  <div>
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
            >
              No control selected
            </div>
            <div v-else-if="controlSelected" class="x-control-properties">
              <div
                v-for="(cat, index) in controlTypeConfig[currentControl.type]"
                :key="index"
              >
                <div class="px-4 pt-4 d-none">{{ cat.group }}</div>
                <v-list flat>
                  <v-list-item :ripple="propertiesConfig.ripple">
                    <v-list-item-content>
                      <v-list-item-title>Title</v-list-item-title>
                      <v-text-field
                        style="width: 100%"
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
                        style="width: 100%"
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
                    <v-list-item-content v-if="prop.type === 'text'">
                      <v-list-item-title>{{
                        prop.displayName
                      }}</v-list-item-title>
                      <v-text-field
                        type="text"
                        style="width: 100%"
                        outlined
                        single-line
                        hide-details
                        dense
                        v-model="currentControl.properties[prop.name]"
                      ></v-text-field>
                    </v-list-item-content>
                    <v-list-item-content v-if="prop.type === 'number'">
                      <v-list-item-title>{{
                        prop.displayName
                      }}</v-list-item-title>
                      <v-text-field
                        type="number"
                        outlined
                        single-line
                        hide-details
                        dense
                        v-model="currentControl.properties[prop.name]"
                      ></v-text-field>
                    </v-list-item-content>
                    <v-list-item-content v-if="prop.type === 'select'">
                      <v-list-item-title>{{
                        prop.displayName
                      }}</v-list-item-title>
                      <template v-if="currentControl.type !== 'dropdown'">
                        <v-select
                          :items="prop.options"
                          v-model="currentControl.properties[prop.name]"
                          item-text="displayName"
                          item-value="name"
                          dense
                          outlined
                          hide-details
                          v-on="
                            typeof prop.onChange !== 'undefined'
                              ? { change: prop.onChange }
                              : {}
                          "
                        ></v-select>
                      </template>
                      <template v-else-if="currentControl.type === 'dropdown'">
                        <v-select
                          :items="currentControl.properties.selectableOptions"
                          v-model="currentControl.properties[prop.name]"
                          dense
                          outlined
                          hide-details
                          v-on="
                            typeof prop.onChange !== 'undefined'
                              ? { change: prop.onChange }
                              : {}
                          "
                        ></v-select>
                      </template>
                    </v-list-item-content>
                    <v-list-item-content v-if="prop.type === 'tag'">
                      <v-list-item-title>{{
                        prop.displayName
                      }}</v-list-item-title>
                      <tags
                        v-model="currentControl.properties[prop.name]"
                      ></tags>
                    </v-list-item-content>
                    <v-list-item-content v-if="prop.type === 'bool'">
                      <v-list-item-title>{{
                        prop.displayName
                      }}</v-list-item-title>
                      <v-checkbox
                        v-model="currentControl.properties[prop.name]"
                        hide-details
                      ></v-checkbox>
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
            >
              No control selected
            </div>
            <div v-else-if="controlSelected" class="x-control-properties">
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
                    <v-list-item-content v-if="validation.type === 'text'">
                      <v-list-item-title>{{
                        validation.displayName
                      }}</v-list-item-title>
                      <v-text-field
                        type="text"
                        style="width: 100%"
                        outlined
                        single-line
                        hide-details
                        dense
                        v-model="currentControl.validations[validation.name]"
                      ></v-text-field>
                    </v-list-item-content>
                    <v-list-item-content v-if="validation.type === 'number'">
                      <v-list-item-title>{{
                        validation.displayName
                      }}</v-list-item-title>
                      <v-text-field
                        type="number"
                        outlined
                        single-line
                        hide-details
                        dense
                        v-model="currentControl.validations[validation.name]"
                      ></v-text-field>
                    </v-list-item-content>
                    <v-list-item-content v-if="validation.type === 'select'">
                      <v-list-item-title>{{
                        validation.displayName
                      }}</v-list-item-title>
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
  </div>
</template>

<script>
export default {
  name: "forms.designer.properties",
  components: {
    tags: () => import("@/components/control-tag-inline"),
  },
  props: {
    currentControl: {
      type: Object,
    },
  },
  data() {
    return {
      propertiesConfig: {
        avctiveTab: null,
        ripple: false,
      },
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
                placeholder: "Proivde default value for the field.",
              },
              {
                name: "placeholder",
                displayName: "Placeholder Value",
                value: "",
                type: "text",
                placeholder: "",
              },
              {
                name: "isImportant",
                displayName: "High Priority",
                value: false,
                type: "bool",
              },
            ],
            validations: [
              {
                name: "minLength",
                displayName: "Minimum Length",
                value: 0,
                type: "text",
              },
              {
                name: "maxLength",
                displayName: "Maximum Length",
                value: 100,
                type: "text",
              },
              {
                name: "customExpression",
                displayName: "Custom Expression",
                value: null,
                type: "text",
              },
            ],
          },
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
                placeholder: "Proivde default value for the field.",
              },
              {
                name: "placeholder",
                displayName: "Placeholder Value",
                value: "",
                type: "text",
                placeholder: "",
              },
              {
                name: "isImportant",
                displayName: "High Priority",
                value: false,
                type: "bool",
              },
              {
                name: "rows",
                displayName: "Rows",
                value: 5,
                type: "number",
                placeholder: 5,
              },
            ],
            validations: [
              {
                name: "minLength",
                displayName: "Minimum Length",
                value: 0,
                type: "number",
              },
              {
                name: "maxLength",
                displayName: "Maximum Length",
                value: 5000,
                type: "number",
              },
              {
                name: "customExpression",
                displayName: "Custom Expression",
                value: null,
                type: "text",
              },
            ],
          },
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
                    displayName: "Extra Large",
                  },
                  {
                    name: "display-2",
                    displayName: "Large",
                  },
                  {
                    name: "display-1",
                    displayName: "Medium",
                  },
                  {
                    name: "title",
                    displayName: "Small",
                  },
                ],
              },
              {
                name: "color",
                displayName: "Color",
                value: "",
                type: "select",
                options: [
                  {
                    name: "",
                    displayName: "Default",
                  },
                  {
                    name: "primary--text",
                    displayName: "Primary",
                  },
                  {
                    name: "secondary--text",
                    displayName: "Secondary",
                  },
                  {
                    name: "accent--text",
                    displayName: "Accent",
                  },
                  {
                    name: "warning--text",
                    displayName: "Caution",
                  },
                  {
                    name: "error--text",
                    displayName: "Important",
                  },
                ],
              },
              {
                name: "style",
                displayName: "Style",
                value: "",
                type: "select",
                options: [
                  {
                    name: "",
                    displayName: "None",
                  },
                  {
                    name: "border",
                    displayName: "Border",
                  },
                ],
              },
            ],
          },
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
                placeholder: 0,
              },
              {
                name: "placeholder",
                displayName: "Placeholder",
                value: "",
                type: "text",
              },
              {
                name: "isImportant",
                displayName: "High Priority",
                value: false,
                type: "bool",
              },
            ],
            validations: [
              {
                name: "minValue",
                displayName: "Minimum value",
                value: 0,
                type: "number",
              },
              {
                name: "maxValue",
                displayName: "Maximum value",
                value: 1000,
                type: "number",
              },
              {
                name: "customExpression",
                displayName: "Custom expression",
                value: null,
                type: "text",
              },
            ],
          },
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
                    displayName: "Extra Large",
                  },
                  {
                    name: "title",
                    displayName: "Large",
                  },
                  {
                    name: "body-1",
                    displayName: "Medium",
                  },
                  {
                    name: "caption",
                    displayName: "Small",
                  },
                ],
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
                    icon: false,
                  },
                  {
                    name: "info",
                    displayName: "Information",
                  },
                  {
                    name: "warning",
                    displayName: "Caution",
                  },
                  {
                    name: "error",
                    displayName: "Important",
                  },
                ],
              },
              {
                name: "style",
                displayName: "Style",
                value: "",
                type: "select",
                options: [
                  {
                    name: {},
                    displayName: "None",
                  },
                  {
                    name: { outlined: true },
                    displayName: "Outlined",
                  },
                  {
                    name: { prominent: true },
                    displayName: "Prominent",
                  },
                  {
                    name: { dense: true },
                    displayName: "Dense",
                  },
                ],
              },
            ],
          },
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
                    displayName: "None",
                  },
                  {
                    name: "true",
                    displayName: "Yes",
                  },
                  {
                    name: "false",
                    displayName: "No",
                  },
                ],
                onChange: (val) => {
                  // NOTE *** these events can be used on specific properties to execute when needed to perform additional logic.
                  // ensure that the property type in the properties panel has been updated to execute this func. this would
                  // typically only be used when setting a default value from an option field.
                  // Set the current contol value to the new default option selected.
                  this.currentControl.value = val;
                },
              },
              {
                name: "isImportant",
                displayName: "High Priority",
                value: false,
                type: "bool",
              },
            ],
          },
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
                onChange: (val) => {
                  this.currentControl.value = val;
                },
              },

              {
                name: "selectableOptions",
                displayName: "Dropdown options",
                value: "",
                type: "tag",
                placeholder: "",
              },
              {
                name: "isImportant",
                displayName: "High Priority",
                value: false,
                type: "bool",
              },
            ],
            validations: [
              {
                name: "customExpression",
                displayName: "Custom Expression",
                value: null,
                type: "text",
              },
            ],
          },
        ],
      },
    };
  },
  computed: {
    controlSelected() {
      return this.currentControl ? true : false;
    },
  },
  methods: {
    addFieldValidation() {
      if (this.currentControl.hasValidations) {
        const controlType = this.currentControl.type;
        const typeGroups = this.controlTypeConfig[controlType];
        let newObj = {};
        for (let groupIndex in typeGroups) {
          for (let validIndex in typeGroups[groupIndex].validations) {
            const validation = typeGroups[groupIndex].validations[validIndex];
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
  },
};
</script>

<style>
</style>
