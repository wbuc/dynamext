<template>
     <v-row no-gutters>
          <v-col cols="12" md="3">
               <v-card tile flat>
                    <v-tabs v-model="tab" fixed-tabs background-color dark>
                         <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
                    </v-tabs>

                    <v-tabs-items v-model="tab">
                         <v-tab-item v-for="item in items" :key="item.tab">
                              <v-card flat>
                                   <v-card-text>{{ item.component }}</v-card-text>
                              </v-card>
                         </v-tab-item>
                    </v-tabs-items>
               </v-card>
          </v-col>
          <v-col cols="12" md="9">
               <v-card class="pa-2" outlined tile>Data table here!</v-card>
          </v-col>
     </v-row>
</template>

<script>
export default {
     name: "Fileroom.Dashboard",
     data() {
          return {
               tab: null,
               items: [
                    { tab: "Primary", component: "Tab 1 Content" },
                    { tab: "Personal", component: "Tab 2 Content" }
               ]
          };
     }
};
</script>

<style>
</style>