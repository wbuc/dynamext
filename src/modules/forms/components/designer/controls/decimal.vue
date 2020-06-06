<template>
     <div>
          <v-list-item-title class="title font-weight-light">{{control.name}}</v-list-item-title>
          <v-list-item-subtitle class="caption text--secondary">{{control.instruction}}</v-list-item-subtitle>
     </div>
</template>

<script>
export default {
     name: "control.decimal.designer",
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