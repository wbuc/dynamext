<template>
  <!-- <div v-if="element.type === 'text'"> -->
  <div>
    <v-list-item-title class="title font-weight-light">
      {{ control.name }}
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
    <v-text-field
      style="width: 100%"
      outlined
      single-line
      hide-details
      dense
      disabled
      v-model="control.value"
      :placeholder="control.properties.placeholder"
      @click.stop
    ></v-text-field>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "control.textbox.designer",
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