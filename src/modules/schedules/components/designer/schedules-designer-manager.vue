<template>
     <v-list width="100%" class="x-form-manager">
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
                    <template v-for="(control,index) in formControls">
                         <v-list-item :key="index" class="x-control">
                              <!-- <v-row>
               <v-col cols="8"></v-col>
               <v-col cols="4"></v-col>
                              </v-row>-->
                              <v-list-item-action class="x-control-handle mr-2">
                                   <v-icon class="grey--text text--darken-1">mdi-drag-vertical</v-icon>
                              </v-list-item-action>
                              <v-list-item-content class="x-control-content">
                                   <v-list-item-title
                                        class="body-1 font-weight-light"
                                   >{{control.name}}</v-list-item-title>
                                   <x-dropdown
                                        v-model="control.type"
                                        :controlName="control.id"
                                        @valueChanged="changeControl(control)"
                                   ></x-dropdown>
                                   <!-- <v-list-item-subtitle
                                        class="grey--text text--darken-1"
                                   >{{control.displayType}}</v-list-item-subtitle>-->
                              </v-list-item-content>

                              <v-list-item-action class="x-control-quick-actions">
                                   <!-- <div>
                                        <v-btn icon small @click.stop="copyControl">
                                             <v-icon
                                                  small
                                                  class="success--text text--lighten-1"
                                             >mdi-content-duplicate</v-icon>
                                        </v-btn>
                                        <v-btn icon small @click.stop="deleteControl">
                                             <v-icon small class="error--text">mdi-delete</v-icon>
                                        </v-btn>
                                   </div>-->
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
          </v-list-item-group>
     </v-list>
</template>

<script>
export default {
     name: "schedules.designer.manager",
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
          controlClicked() {
               this.$emit("selected", this.control);
          },
          deleteControl() {
               this.$emit("deleteControl", this.index);
          },
          copyControl() {
               this.$emit("copyControl", this.control);
          },
          changeControl(control) {
               this.$emit("controlChanged", control);
          },
          log(evt) {
               // draggable changegd.
               window.console.log(evt);
          }
     },
     data() {
          return {};
     }
};
</script>

<style>
</style>