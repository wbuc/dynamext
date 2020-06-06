<template>
     <div>
          <v-alert
               :type="control.properties.type"
               :class="[control.properties.size]"
               v-bind="control.properties.style"
               class="font-weight-light x-control-information"
          >{{control.name}}</v-alert>
     </div>
</template>

<script>
export default {
     name: "control.information.designer",
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