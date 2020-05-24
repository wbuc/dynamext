<template>
     <v-form>
          <x-form-section title="Coming soon">
               <x-form-control title="Report Headings">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Configure differnt report headings"
                    ></v-text-field>
               </x-form-control>
               <x-form-control title="Template Text">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="List view of the template text for sellside and buyside"
                    ></v-text-field>
               </x-form-control>
          </x-form-section>
     </v-form>
</template>

<script>
export default {
     name: "admin-app-report-detail",
     created() {
          console.log("created : admin-app-report-detail");
     },
     mounted() {
          console.log("mounted : admin-app-report-detail");
     }
};
</script>

<style>
</style>