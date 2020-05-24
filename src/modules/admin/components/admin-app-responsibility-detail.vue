<template>
     <v-form>
          <x-form-section title="Coming soon">
               <x-form-control title="Responsibility">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Give a name"
                    ></v-text-field>
               </x-form-control>
          </x-form-section>
     </v-form>
</template>

<script>
export default {
     name: "admin-app-responsibility-detail",
     created() {
          console.log("created : admin-app-responsibility-detail");
     },
     mounted() {
          console.log("mounted : admin-app-responsibility-detail");
     }
};
</script>

<style>
</style>