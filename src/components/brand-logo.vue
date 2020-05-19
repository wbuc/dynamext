<template>
     <div style="width:100%">
          <v-toolbar-title v-if="!large" class="text-uppercase grey--text">
               <span class="font-weight-light" style="border-bottom: solid 1px;">Dynam</span>
               <span style="border-bottom: solid 1px;">ext</span>
          </v-toolbar-title>
          <div v-if="large" class="text-uppercase grey--text display-1" style="text-align:center">
               <span class="font-weight-light" style="border-bottom: solid 3px;">Dynam</span>
               <span style="border-bottom: solid 3px;">ext</span>
          </div>
     </div>
</template>

<script>
export default {
     name: "Brand.Logo",
     props: {
          large: {
               type: Boolean,
               default: false
          }
     }
};
</script>

<style>
</style>