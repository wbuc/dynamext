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
               <x-form-control title="Icon">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Select an icon"
                    ></v-text-field>
               </x-form-control>
          </x-form-section>
     </v-form>
</template>

<script>
export default {
     name: "admin-app-redflag-detail",
     created() {
          console.log("created : admin-app-redflag-detail");
     },
     mounted() {
          console.log("mounted : admin-app-redflag-detail");
     }
};
</script>

<style>
</style>