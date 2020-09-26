<template>
  <div>
    <v-list-item-title class="title font-weight-light"
      >{{ control.name }}
      <v-icon
        v-if="control.properties.isImportant === true"
        color="error"
        class="pb-1"
        >mdi-exclamation</v-icon
      >
    </v-list-item-title>
    <v-list-item-subtitle class="caption text--secondary">{{
      control.instruction
    }}</v-list-item-subtitle>

    <v-select
      :items="control.properties.selectableOptions"
      v-model="control.value"
      dense
      disabled
      outlined
      hide-details
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "control.dropdown.designer",
  props: {
    control: {
      Type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>