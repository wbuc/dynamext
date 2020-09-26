<template>
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
    <v-list-item-subtitle class="caption text--secondary"
      >{{ control.instruction }}
    </v-list-item-subtitle>

    <v-radio-group
      v-bind="{ mandatory: false }"
      v-model="control.value"
      readonly
    >
      <v-radio label="Yes" value="true"></v-radio>
      <v-radio label="No" value="false"></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  name: "control.yesNo.designer",
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