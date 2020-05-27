<template>
     <v-hover v-slot:default="{ hover }">
          <v-list-item two-line class="x-control" @click="controlClicked">
               <v-list-item-action class="x-control-handle mr-2">
                    <v-icon v-show="hover" class="grey--text text--darken-1">mdi-drag-vertical</v-icon>
               </v-list-item-action>
               <v-list-item-content class="x-control-content">
                    <component :is="`${control.type}Control`" v-bind:control="control"></component>
               </v-list-item-content>
               <v-list-item-action class="x-control-quick-actions">
                    <div v-show="hover">
                         <v-btn icon @click.stop="copyControl">
                              <v-icon class="success--text text--lighten-1">mdi-content-duplicate</v-icon>
                         </v-btn>
                         <v-btn icon @click.stop="deleteControl">
                              <v-icon class="error--text">mdi-delete</v-icon>
                         </v-btn>
                    </div>
               </v-list-item-action>
          </v-list-item>
     </v-hover>
</template>

<script>
import textControl from "@/modules/schedules/components/designer/controls/textbox";
import paragraphControl from "@/modules/schedules/components/designer/controls/paragraph";
import headerControl from "@/modules/schedules/components/designer/controls/header";
import numberControl from "@/modules/schedules/components/designer/controls/number";
import decimalControl from "@/modules/schedules/components/designer/controls/decimal";
import informationControl from "@/modules/schedules/components/designer/controls/information";
import yesnoControl from "@/modules/schedules/components/designer/controls/yesno";
import dropdownControl from "@/modules/schedules/components/designer/controls/dropdown";

export default {
     name: "schedules.control.placeholder",
     props: {
          index: {
               type: Number,
               required: true
          },
          control: {
               type: Object,
               default: () => ({})
          },
          config: {
               type: Object,
               default: () => ({})
          }
     },
     components: {
          textControl,
          paragraphControl,
          headerControl,
          numberControl,
          decimalControl,
          informationControl,
          yesnoControl,
          dropdownControl
     },
     data() {
          return {
               localControl: this.control,
               localIndex: this.index
          };
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
          }
     }
};
</script>

<style>
</style>