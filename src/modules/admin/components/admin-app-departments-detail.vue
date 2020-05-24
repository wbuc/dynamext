<template>
     <v-form>
          <x-form-section title="Coming soon">
               <x-form-control title="Department Name">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Finance"
                    ></v-text-field>
               </x-form-control>
          </x-form-section>
     </v-form>
</template>

<script>
export default {
     name: "admin-app-department-detail",
     methods: {},
     created() {
          console.log("created : admin-app-department-detail");
     },
     mounted() {
          console.log("mounted : admin-app-department-detail");
     }
};
</script>

<style>
</style>