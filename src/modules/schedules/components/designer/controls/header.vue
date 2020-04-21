<template>
     <div>
          <v-list-item-title
               :class="[control.properties.size, control.properties.color]"
               class="font-weight-light"
          >{{control.name}}</v-list-item-title>
          <v-list-item-subtitle class="caption text--secondary">{{control.instruction}}</v-list-item-subtitle>
          <v-divider v-if="control.properties.style === 'border'"></v-divider>
     </div>
</template>

<script>
export default {
     name: "Control.Header.Designer",
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