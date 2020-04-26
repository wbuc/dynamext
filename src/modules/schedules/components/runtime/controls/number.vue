<template>
     <div>
          <v-list-item-title class="title font-weight-light">{{control.name}}</v-list-item-title>
          <v-list-item-subtitle class="caption text--secondary">{{control.instruction}}</v-list-item-subtitle>
          <v-text-field
               type="number"
               style="width:100%"
               outlined
               single-line
               hide-details
               disabled
               dense
               v-model="control.value"
               :placeholder="control.properties.placeholder"
               @click.stop
          ></v-text-field>
     </div>
</template>

<script>
export default {
     name: "Control.number.Runtime",
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