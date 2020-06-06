<template functional>
     <div>
          <v-list-item-title class="title font-weight-light">{{ props.control.name }}</v-list-item-title>
          <v-list-item-subtitle class="caption text--secondary">{{ props.control.instruction }}</v-list-item-subtitle>
          <v-text-field
               style="width:100%"
               outlined
               single-line
               hide-details
               dense
               disabled
               v-model="props.control.value"
               :placeholder="props.control.properties.placeholder"
               @click.stop
          ></v-text-field>
     </div>
     <!-- </div> -->
</template>

<script>
export default {
     name: "f.control.textbox.designer",
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