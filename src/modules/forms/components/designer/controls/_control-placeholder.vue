<template>
     <v-hover v-slot:default="{ hover }">
          <v-list-item two-line class="x-control px-5" @click="controlClicked">
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
export default {
     name: "forms.control.placeholder",
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
          textControl: () =>
               import("@/modules/forms/components/designer/controls/textbox"),
          paragraphControl: () =>
               import("@/modules/forms/components/designer/controls/paragraph"),
          headerControl: () =>
               import("@/modules/forms/components/designer/controls/header"),
          numberControl: () =>
               import("@/modules/forms/components/designer/controls/number"),
          decimalControl: () =>
               import("@/modules/forms/components/designer/controls/decimal"),
          informationControl: () =>
               import(
                    "@/modules/forms/components/designer/controls/information"
               ),
          yesnoControl: () =>
               import("@/modules/forms/components/designer/controls/yesno"),
          dropdownControl: () =>
               import("@/modules/forms/components/designer/controls/dropdown")
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