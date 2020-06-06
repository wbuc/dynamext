<template>
     <div>
          <v-list-item-title class="title font-weight-light">{{control.name}}</v-list-item-title>
          <v-list-item-subtitle class="caption text--secondary">{{control.instruction}}</v-list-item-subtitle>

          <v-select
               :items="control.properties.selectableOptions"
               v-model="control.value"
               dense
               outlined
               hide-details
          ></v-select>
     </div>
</template>

<script>
export default {
     name: "Control.Dropdown.Runtime",
     props: {
          control: {
               Type: Object,
               default: () => ({})
          }
     }
};
</script>

<style>
</style>