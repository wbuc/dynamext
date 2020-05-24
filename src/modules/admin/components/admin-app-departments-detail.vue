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
                                        <v-btn small icon @click="openItem(item)">
                                             <v-icon small color="secondary">mdi-pencil</v-icon>
                                        </v-btn>
                                        <v-btn small icon @click="deleteItem(item)">
                                             <v-icon small color="error">mdi-delete</v-icon>
                                        </v-btn>
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
          },
          deleteItem(item) {
               console.log("deleting item ", item);
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