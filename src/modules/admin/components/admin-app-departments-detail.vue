<template>
     <div>
          <x-data-list :endPoint="url" :key="listTicker">
               <template v-slot="{data: departments, loading}">
                    <x-form-section>
                         <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
                         <div v-else>
                              <x-dynamic-list :listData="departments">
                                   <template v-slot:title="{item}">{{item.name}}</template>
                                   <template v-slot:actions="{ item }">
                                        <v-list-item-action @click="openItem(item)">
                                             <v-btn icon>
                                                  <v-icon color="grey lighten-1">mdi-information</v-icon>
                                             </v-btn>
                                        </v-list-item-action>
                                   </template>
                              </x-dynamic-list>
                         </div>
                    </x-form-section>
               </template>
          </x-data-list>
     </div>
</template>

<script>
export default {
     name: "admin.app.department.detail",
     data() {
          return {
               url: "/appdata/departments",
               listTicker: 1
          };
     },
     methods: {
          refresh() {
               this.listTicker++;
          },
          openItem(item) {
               console.log("opening item ", item);
          }
     },
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