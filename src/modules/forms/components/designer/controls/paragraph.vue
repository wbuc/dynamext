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
    <v-textarea
      v-bind:auto-grow="false"
      v-bind:clearable="true"
      disabled
      outlined
      :rows="control.properties.rows ? control.properties.rows : 1"
      :counter="control.validations ? control.validations.maxLength : false"
      v-model="control.value"
      :placeholder="control.properties.placeholder"
    ></v-textarea>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "control.paragraph.designer",
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