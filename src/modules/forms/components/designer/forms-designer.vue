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
      <v-col cols="12" :md="explorerConfig.fullView ? '3' : '3'">
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
                    :sort="false"
                    @change="formControlsUpdated"
                  >
                    <v-list-item
                      two-line
                      v-for="element in toolboxControls"
                      :key="element.id"
                      color="primary"
                      class="x-control"
                      @click.stop="1 == 1"
                    >
                      <v-list-item-action>
                        <v-icon>{{ element.icon }}</v-icon>
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title class="title font-weight-light">{{
                          element.name
                        }}</v-list-item-title>
                        <v-list-item-subtitle
                          class="grey--text text--darken-1"
                          >{{ element.description }}</v-list-item-subtitle
                        >
                      </v-list-item-content>
                    </v-list-item>
                  </draggable>
                </v-list>
              </div>
            </v-tab-item>
            <v-tab-item key="Templates" style="background-color: #ff000000">
              <v-card style="background-color: #ff000000">
                <div class="text-center grey--text py-10">
                  Templates coming soon!
                </div>
              </v-card>
              <v-card style="background-color: #ff000000">
                <!-- Content here! -->
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
      <v-col cols="12" :md="explorerConfig.fullView ? '7' : '6'">
        <v-card class="x-form-design">
          <v-card flat style="background-color: #ff000000">
            <v-card-actions class="pa-4">
              <span
                v-if="!canvasConfig.editName"
                @click="editScheduleName"
                class="title accent--text font-weight-light cursor-editable"
                >{{ formData.name }}</span
              >
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
              <v-spacer></v-spacer>
              <v-chip
                color="green"
                :class="[
                  formData.status === formConfig.status.Published
                    ? 'success'
                    : 'warning',
                ]"
                class="text-uppercase caption"
                text-color="white"
                label
                @click="toggleFormStatus"
                >{{ formFriendlyStatus }}</v-chip
              >
            </v-card-actions>
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
                    >
                      Add fields from the toolbox
                    </div>
                    <draggable
                      class="dragArea list-group"
                      :list="formControls"
                      group="toolbox"
                      @change="formControlsUpdated"
                      handle=".x-control-handle"
                      :class="{ 'empty-form-placeholder': isEmptyForm }"
                    >
                      <template v-for="(control, index) in formControls">
                        <control-template
                          v-bind:index="index"
                          v-bind:control="control"
                          v-bind:config="controlConfig"
                          @selected="setCurrentControl"
                          @deleteControl="deleteFormControl"
                          @copyControl="copyFormControl"
                          :key="index"
                        ></control-template>
                      </template>
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
              <div class="mt-1" style="background-color: #ff000000">
                <form-manager
                  :formControls="formControls"
                  @controlSelected="setCurrentControl"
                  @controlChanged="updateControlType"
                  @deleteControl="deleteFormControl"
                  @copyControl="copyFormControl"
                  @controlsUpdated="managerControlsUpdated"
                  :key="managerKey"
                ></form-manager>
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
            <v-tab-item key="Settings" style="background-color: #ff000000">
              <div class="pt-5 mb-2 no-cursor">
                <v-row no-gutters>
                  <v-col cols="12" xs="12" sm="12" md="12" lg="5">
                    <div class="pa-3">
                      <div class="grey--text">Schedule Name</div>
                      <div>{{ formData.name }}</div>
                    </div>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="6" lg="5">
                    <div class="pa-3">
                      <div class="grey--text">Owner</div>
                      <div>{{ formData.owner }}</div>
                    </div>
                  </v-col>
                  <v-col cols="12" xs="12" sm="6" md="6" lg="2">
                    <div class="pa-3">
                      <div class="grey--text">Created</div>
                      <div>{{ formData.createdDate }}</div>
                    </div>
                  </v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row no-gutters>
                  <v-col cols="12" xs="12" sm="12" md="12" lg="12">
                    <v-card flat>
                      <v-card-text class="pl-3 pb-1">
                        <div class="title font-weight-light ml-0 pl-0">
                          Configuration
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="12" xs="12" sm="12" md="12" lg="5">
                    <div class="pa-3">
                      <div class="grey--text">Icon</div>
                      <x-picker-icon
                        v-model="formData.icon"
                        :dataItems="formConfig.icons"
                        :colour="formData.colour"
                        name="formdata"
                      ></x-picker-icon>
                      <x-picker-colour
                        v-model="formData.colour"
                        name="formdata"
                      ></x-picker-colour>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
      <v-col cols="12" :md="explorerConfig.fullView ? '2' : '3'">
        <form-properties :currentControl="currentControl"></form-properties>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import draggable from "vuedraggable";
import { controls } from "@/modules/forms/components/designer/config/forms-control-list";
import formHelper from "@/modules/forms/helpers/forms-helper";

export default {
  name: "forms.Canvas.Designer",
  components: {
    draggable,
    FormProperties: () => import("./forms-designer-properties"),
    FormManager: () => import("./forms-designer-manager"),
    ControlTemplate: () =>
      import(
        "@/modules/forms/components/designer/controls/_control-placeholder"
      ),
    xPickerIcon: () => import("@/components/control-picker-icon"),
    xPickerColour: () => import("@/components/control-picker-colour"),
  },
  computed: {
    ...mapGetters(["api", "dynamicForm"]),
    controlSelected() {
      return this.currentControl ? true : false;
    },
    isEmptyForm() {
      return this.formControls.length === 0;
    },
    formFriendlyStatus() {
      return formHelper.getEnumKey(
        this.formConfig.status,
        this.formData.status
      );
    },
  },
  data() {
    return {
      explorerConfig: {
        fullView: false,
      },
      toolboxConfig: {
        activeTab: null,
      },
      canvasConfig: {
        avctiveTab: null,
        ripple: false,
        editName: false,
        globalId: 0,
      },
      controlConfig: {
        ripple: false,
      },
      toolboxControls: controls,
      formConfig: {
        status: { ...formHelper.enum_FormStatus },
        icons: formHelper.formIcons,
      },
      formState: {
        controlsDeleted: [],
        controlsAdded: [],
      },
      formData: null,
      formControls: [],
      currentControl: null,
      formControlHover: null,
      managerKey: 1,
    };
  },
  methods: {
    toggleFullView() {
      this.explorerConfig.fullView = !this.explorerConfig.fullView;
    },
    setCurrentControl(control) {
      this.currentControl = control;
    },
    formControlsUpdated(evt) {
      // Control Updated
      if (evt.moved) {
        let startIndex = evt.moved.oldIndex;
        let endIndex = evt.moved.newIndex;

        // Step 1 - We need to update the current dragged element with the new position.
        evt.moved.element.sort = endIndex;

        // Step 2 - Determine other elements that needs an index update.
        if (startIndex < endIndex) {
          // update the items before the re-ordered item
          for (let i = endIndex - 1; i >= 0; i--) {
            this.formControls[i].sort = i;
          }
        } else {
          // update the items after the re-orderd item
          for (let i = endIndex + 2; i <= this.formControls.length; i++) {
            this.formControls[i - 1].sort = i - 1;
          }
        }
        // console.log(this.formControls);
      }

      // Control Added
      if (evt.added) {
        console.log(`New Index: ${evt.added.newIndex}`);
        console.log(evt.added.element);

        // Step 1 - Update new control added sort order.
        let newIndex = evt.added.newIndex;
        evt.added.element.sort = newIndex;

        // Step 2 - Update all preceding controls sort index.
        for (let i = newIndex + 1; i < this.formControls.length; i++) {
          let originalSort = this.formControls[i].sort;
          this.formControls[i].sort = originalSort + 1;

          console.log(this.formControls[i].sort);
        }
      }
    },
    managerControlsUpdated() {
      this.managerKey++;
    },
    deepClone(object) {
      let newObj = {};
      for (let key in object) {
        newObj[key] = object[key];
      }
      return newObj;
    },
    cloneFormControl(item) {
      let newControl = {
        //id: this.canvasConfig.globalId++,
        clientId: formHelper.generateFormControlId(),
        name: `Untitled ${item.name}`,
        instruction: item.instruction,
        value: item.value,
        hasValidations: item.hasValidations,
        properties: {},
        validations: {},
        icon: item.icon,
        type: item.type,
        isNew: true,
        //displayType: item.name,
        edit: false,
        config: false,
      };
      let newProps = this.deepClone(item.properties);
      let newValids = this.deepClone(item.validations);

      this.$set(newControl, "properties", newProps);
      this.$set(newControl, "validations", newValids);
      // track the client id's of the added controls.
      this.formState.controlsAdded.push(newControl.clientId);

      return newControl;
    },
    copyFormControl(control) {
      const copiedControl = this.cloneFormControl(control);
      this.formControls.push(copiedControl);
    },
    deleteFormControl(itemIndex) {
      // ensure that the controls state is in sync.
      this.checkFormState(itemIndex);
      // remove from the form definition control list.
      this.formControls.splice(itemIndex, 1);
    },
    updateControlType(control) {
      // (control)
      // The current control that was changed.
      // Get default values from toolbox and overwrite control properties.

      let newProps = null;
      let newValids = null;
      for (const c of this.toolboxControls) {
        if (c.type === control.type) {
          control.value = c.value;
          control.icon = c.icon;
          control.hasValidations = c.hasValidations;
          newProps = this.deepClone(c.properties);
          newValids = this.deepClone(c.validations);
          break;
        }
      }

      this.$set(control, "properties", newProps);
      this.$set(control, "validations", newValids);
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
      // attach the form definition to the form state before sending to server.
      this.formState.formData = this.formData;
      console.log(this.formState);
      this.$store.dispatch("saveFormDefinition", this.formState).then(() => {
        // save success, reset the form state.
        this.resetFormstate(); // NOTE:  Need to include the reset functions again when done and working!

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
    },
    toggleFormStatus() {
      this.formData.status =
        this.formData.status === this.formConfig.status.Published
          ? this.formConfig.status.Draft
          : this.formConfig.status.Published;
    },
    checkFormState(index) {
      const deletedClientId = this.formControls[index].clientId;
      console.log(this.formControls[index]);
      // check if the control has recently been added - not yet sent to the server.
      const addedIndex = this.formState.controlsAdded.indexOf(
        deletedClientId.toString()
      );

      if (addedIndex >= 0) {
        // control found, now remove from the added form state to prevent sending it to server.
        this.formState.controlsAdded.splice(addedIndex, 1);
      } else {
        // the control is already part of the form from the server, add to the list so it can be deleted on the server.
        this.formState.controlsDeleted.push(deletedClientId);
      }
    },
    resetFormstate() {
      //this.formState.controlsAdded = [];
      //this.formState.controlsDeleted = [];
    },
  },
  created() {
    // By reference assignment.
    this.formData = this.dynamicForm;
    this.formControls = this.formData.formControls;
    // set the new index to use for field controls. TODO FIX ID.
    this.canvasConfig.globalId = this.formControls.length + 1;
  },
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
</style>