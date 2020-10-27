<template>
     <!-- <v-list width="100%" class="x-form-manager" :link="link"> -->
     <!-- <v-list-item-group class="x-form-manager"> -->
     <div width="100%" class="x-form-manager">
          <div
               v-if="formControls.length === 0"
               class="text-center grey--text py-5"
          >Add fields from the toolbox</div>
          <draggable
               class="dragArea list-group"
               :list="formControls"
               group="toolbox"
               @change="formControlsUpdate"
               handle=".x-control-handle"
               :class="{'empty-form-placeholder': isEmptyForm}"
          >
               <template v-for="(control,index) in formControls">
                    <v-list-item
                         :key="index"
                         :link="link"
                         class="x-control"
                         @click="controlClicked(control)"
                    >
                         <v-list-item-action class="x-control-handle mr-2">
                              <v-icon class="grey--text text--darken-1">mdi-drag-vertical</v-icon>
                         </v-list-item-action>
                         <v-list-item-content class="x-control-content">
                              <v-row align="center" class="responsive-text">
                                   <v-col>
                                        <v-list-item-title class="body-1 font-weight-light">
                                             <v-icon class="mr-1">{{control.icon}}</v-icon>
                                             {{control.name}}
                                        </v-list-item-title>
                                   </v-col>
                              </v-row>
                         </v-list-item-content>
                         <v-list-item-action class>
                              <div>
                                   <v-list-item-title class="responsive-text">
                                        <x-dropdown
                                             v-model="control.type"
                                             :controlName="control.clientId"
                                             @valueChanged="changeControl(control)"
                                        ></x-dropdown>
                                   </v-list-item-title>
                              </div>
                         </v-list-item-action>
                         <v-list-item-action class="x-control-quick-actions">
                              <div>
                                   <v-btn
                                        :id="`quick-actions-${control.clientId}`"
                                        icon
                                        text
                                        dark
                                        color="grey"
                                        class="x-branch-activator"
                                   >
                                        <v-icon>more_vert</v-icon>
                                        <span></span>
                                   </v-btn>
                                   <v-menu
                                        offset-y
                                        transition="slide-y-transition"
                                        :activator="`#quick-actions-${control.clientId}`"
                                   >
                                        <v-list>
                                             <template v-for="(item, i) in quickActions">
                                                  <v-list-item
                                                       :key="i"
                                                       dense
                                                       @click="item.action(control)"
                                                  >
                                                       <v-list-item-action>
                                                            <v-icon
                                                                 :class="item.color"
                                                                 small
                                                            >{{item.icon}}</v-icon>
                                                       </v-list-item-action>
                                                       <v-list-item-content>
                                                            <v-list-item-title>{{item.text}}</v-list-item-title>
                                                       </v-list-item-content>
                                                  </v-list-item>
                                             </template>
                                        </v-list>
                                   </v-menu>
                              </div>
                         </v-list-item-action>
                    </v-list-item>
                    <!-- New template goes here -->

                    <!-- <control-template
                              v-bind:index="index"
                              v-bind:control="control"
                              v-bind:config="controlConfig"
                              @selected="setCurrentControl"
                              @deleteControl="deleteFormControl"
                              @copyControl="copyFormControl"
                              :key="index"
                    ></control-template>-->
               </template>
          </draggable>
     </div>
</template>

<script>
export default {
     name: "forms.designer.manager",
     components: {
          draggable: () => import("vuedraggable")
     },
     props: {
          formControls: {
               type: Array,
               default: () => []
          }
     },
     computed: {
          isEmptyForm() {
               return this.formControls.length === 0;
          }
     },
     methods: {
          controlClicked(control) {
               this.$emit("controlSelected", control);
          },
          deleteControl(control) {
               const index = this.formControls.findIndex(
                    x => x.clientId === control.clientId
               );

               this.$emit("deleteControl", index);
          },
          copyControl(control) {
               this.$emit("copyControl", control);
          },
          changeControl(control) {
               this.$emit("controlChanged", control);
          },
          formControlsUpdate(evt) {
               // controls changed.
               //console.log("Manager controls updated: ", evt);
               this.$emit("controlsUpdated", evt);
          }
     },
     data() {
          return {
               link: false,
               quickActions: [
                    {
                         text: "Copy",
                         icon: "mdi-content-duplicate",
                         color: "success--text text--lighten-1",
                         action: control => {
                              this.copyControl(control);
                         }
                    },
                    {
                         text: "Delete",
                         icon: "mdi-delete",
                         color: "error--text",
                         action: control => {
                              this.deleteControl(control);
                         }
                    }
               ]
          };
     }
};
</script>

<style>
.x-form-design .x-form-manager .x-control {
     /* min-height: 0px !important; */
     cursor: pointer;
}
.x-form-design .x-form-manager .x-control-content {
     min-height: 0px !important;
     padding: 0px;
}

.x-form-design .x-form-manager .x-control-handle {
     cursor: move;
     margin: 0px;
}

.x-form-design .x-form-manager .responsive-text {
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
}
</style>
