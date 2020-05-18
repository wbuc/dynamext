<template>
     <x-dialog :show="show">
          <template v-slot:title>
               <slot name="title">Confirmation</slot>
          </template>
          <template v-slot:default>
               <slot name="text">Are you sure?</slot>
          </template>
          <template v-slot:actions>
               <v-spacer></v-spacer>
               <v-btn large text min-width="100" @click="cancelAction">Cancel</v-btn>
               <v-btn large text min-width="100" color="primary" @click="confirmAction">Ok</v-btn>
          </template>
     </x-dialog>
</template>

<script>
export default {
     name: "Dialog.Confirmation",
     props: {
          show: { Type: Boolean, default: false }
     },
     data() {
          return {};
     },
     methods: {
          cancelAction() {
               this.$emit("cancelAction");
          },
          confirmAction() {
               this.$emit("confirmAction");
          }
     }
};
</script>

<style>
.x-dialog-header {
     background-color: #313131 !important;
}
</style>