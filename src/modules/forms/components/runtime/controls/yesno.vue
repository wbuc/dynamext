<template>
     <div>
          <v-list-item-title class="title font-weight-light">{{control.name}}</v-list-item-title>
          <v-list-item-subtitle class="caption text--secondary">{{control.instruction}}</v-list-item-subtitle>

          <v-radio-group v-bind="{mandatory: false}" v-model="control.value">
               <v-radio label="Yes" value="true"></v-radio>
               <v-radio label="No" value="false"></v-radio>
          </v-radio-group>
     </div>
</template>

<script>
export default {
     name: "Control.YesNo.Runtime",
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