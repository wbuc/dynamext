<template>
     <v-card class="elevation-3 mx-auto" max-width="400">
          <v-list-item two-line>
               <v-list-item-content>
                    <v-list-item-title class="headline">Fileroom Overview</v-list-item-title>
               </v-list-item-content>
          </v-list-item>
          <v-card-text class="px-0">
               <v-row align="center" class="text-center" no-gutters>
                    <!-- <v-col class="display-1" cols="4">23&deg;C</v-col> -->
                    <v-col cols="4">
                         <v-card
                              class="warning py-2"
                              style="border-radius:0px"
                              @click="openPending"
                         >
                              <v-card-title class="justify-center">Pending</v-card-title>
                              <v-card-subtitle class="headline">54</v-card-subtitle>
                         </v-card>
                    </v-col>
                    <v-col cols="4">
                         <v-card
                              class="success py-2"
                              style="border-radius:0px"
                              @click="openComplete"
                         >
                              <v-card-title class="justify-center">Complete</v-card-title>
                              <v-card-subtitle class="headline">27</v-card-subtitle>
                         </v-card>
                    </v-col>
                    <v-col cols="4">
                         <v-card class="teal py-2" style="border-radius:0px" @click="openTotal">
                              <v-card-title class="justify-center">Total</v-card-title>
                              <v-card-subtitle class="headline">122</v-card-subtitle>
                         </v-card>
                    </v-col>
               </v-row>
          </v-card-text>

          <v-list-item class="text-center">
               <v-list-item-subtitle>
                    <v-icon color="error" class="mr-2 mdi-36px">mdi-flag-variant</v-icon>23
               </v-list-item-subtitle>
               <v-list-item-icon></v-list-item-icon>
               <v-list-item-subtitle>
                    <v-icon color="orange" class="mr-2 mdi-36px">mdi-flag-variant</v-icon>43
               </v-list-item-subtitle>
               <v-list-item-subtitle>
                    <v-icon color="amber" class="mr-2 mdi-36px">mdi-flag-variant</v-icon>12
               </v-list-item-subtitle>
          </v-list-item>

          <!-- <v-list class="transparent">
               <v-list-item dense v-for="item in forecast" :key="item.day">
                    <v-list-item-title>
                         <v-icon class="mr-2">{{ item.icon }}</v-icon>
                         {{ item.day }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-left">21/02/2021</v-list-item-subtitle>
                    <v-list-item-subtitle class="text-right">{{ item.temp }}</v-list-item-subtitle>
               </v-list-item>
          </v-list>-->

          <v-divider></v-divider>

          <v-card-actions>
               <v-btn color="primary" text>
                    <v-icon left>mdi-open-in-new</v-icon>View fileroom
               </v-btn>
          </v-card-actions>
     </v-card>
</template>

<script>
export default {
     name: "Card.Overview",
     props: {
          listData: { Type: Array, default: () => [] }
     },
     data() {
          return {
               forecast: [
                    {
                         day: "Tuesday",
                         icon: "mdi-white-balance-sunny",
                         temp: "24\xB0/12\xB0"
                    },
                    {
                         day: "Wednesday",
                         icon: "mdi-white-balance-sunny",
                         temp: "22\xB0/14\xB0"
                    },
                    {
                         day: "Thursday",
                         icon: "mdi-cloud",
                         temp: "25\xB0/15\xB0"
                    }
               ]
          };
     },
     methods: {
          openPending() {},
          openComplete() {},
          openTotal() {}
     }
};
</script>

<style>
</style>