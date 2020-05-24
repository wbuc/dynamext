<template>
     <v-form>
          <x-form-section title="Coming soon">
               <x-form-control title="Title">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Give a title"
                    ></v-text-field>
               </x-form-control>
               <x-form-control title="Date">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Milestone date"
                    ></v-text-field>
               </x-form-control>
          </x-form-section>
     </v-form>
</template>

<script>
export default {
     name: "admin-app-timeline-detail",
     created() {
          console.log("created : admin-app-timeline-detail");
     },
     mounted() {
          console.log("mounted : admin-app-timeline-detail");
     }
};
</script>

<style>
</style>