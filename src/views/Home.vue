<template>
     <v-container fluid class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Home</page-header>
               </v-col>
          </v-row>
          <v-row no-gutters class="pt-3">
               <v-col
                    cols="12"
                    :xs="fieldSize.xlarge"
                    :sm="fieldSize.large"
                    :md="fieldSize.medium"
                    :lg="fieldSize.small"
                    class="px-2"
               >
                    <div>
                         <x-tasklist></x-tasklist>
                    </div>
               </v-col>

               <v-col
                    cols="12"
                    :xs="fieldSize.xlarge"
                    :sm="fieldSize.large"
                    :md="fieldSize.medium"
                    :lg="fieldSize.medium"
                    class="px-2"
               >
                    <div>
                         <x-pie-chart></x-pie-chart>
                    </div>
               </v-col>
               <v-col
                    cols="12"
                    :xs="fieldSize.xlarge"
                    :sm="fieldSize.large"
                    :md="fieldSize.medium"
                    lg="2"
                    class="px-2"
               >
                    <div>
                         <x-card-stat
                              :clickCard="statOutstanding.click"
                              :titleColor="statOutstanding.color"
                         >
                              <template v-slot:title>{{statOutstanding.title}}</template>
                              <template v-slot:detail>{{statOutstanding.description}}</template>
                         </x-card-stat>
                         <x-card-stat
                              class="my-4"
                              :clickCard="statCompleted.click"
                              :titleColor="statCompleted.color"
                         >
                              <template v-slot:title>{{statCompleted.title}}</template>
                              <template v-slot:detail>{{statCompleted.description}}</template>
                         </x-card-stat>
                         <x-card-stat
                              :clickCard="statPersonalDocs.click"
                              :titleColor="statPersonalDocs.color"
                         >
                              <template v-slot:title>{{statPersonalDocs.title}}</template>
                              <template v-slot:detail>{{statPersonalDocs.description}}</template>
                         </x-card-stat>
                    </div>
               </v-col>

               <v-col
                    cols="12"
                    :xs="fieldSize.xlarge"
                    :sm="fieldSize.large"
                    :md="fieldSize.medium"
                    :lg="fieldSize.small"
                    class="px-2"
               >
                    <div>
                         <!-- <x-icon-list
                              :config="history.config"
                              :dataList="history.data"
                              @itemClicked="openHistoryDetail"
                         ></x-icon-list>-->
                         <x-card-overview></x-card-overview>
                    </div>
               </v-col>

               <v-col
                    cols="12"
                    :xs="fieldSize.xlarge"
                    :sm="fieldSize.xlarge"
                    :md="fieldSize.xlarge"
                    :lg="fieldSize.xlarge"
                    class="pa-2"
               >
                    <div class="mt-10">
                         <x-line-chart></x-line-chart>
                    </div>
               </v-col>
          </v-row>
     </v-container>
</template>

<script>
import tasklist from "@/modules/dashboard/components/Tasklist";
import cardOverview from "@/components/cards/Card-Overview";

import cardStat from "@/components/cards/Card-Stat";
import lineChart from "@/components/cards/Chart-Line";
import pieChart from "@/components/cards/Chart-Pie";

export default {
     name: "Home",
     components: {
          "x-tasklist": tasklist,
          "x-line-chart": lineChart,
          "x-pie-chart": pieChart,
          "x-card-stat": cardStat,
          "x-card-overview": cardOverview
     },
     data() {
          return {
               fieldSize: {
                    small: 3,
                    medium: 4,
                    large: 6,
                    xlarge: 12
               },
               history: {
                    config: {
                         link: false,
                         dense: true,
                         ripple: false,
                         divider: false
                    },
                    data: [
                         {
                              id: "1",
                              name: "10 documents imported on 14/04/2020",
                              description: "Fileroom update",
                              icon: "mdi-file-document",
                              color: "warning lighten-1"
                         },
                         {
                              id: "2",
                              name: "190 documents imported on 16/04/2020",
                              description: "Fileroom update",
                              icon: "mdi-file-document",
                              color: "warning lighten-1"
                         },
                         {
                              id: "3",
                              name: "5 findings added on 17/04/2020",
                              description: "Fileroom update",
                              icon: "mdi-information",
                              color: "success lighten-1"
                         },
                         {
                              id: "4",
                              name: "1000 documents imported on 17/04/2020",
                              description: "Fileroom update",
                              icon: "mdi-file-document",
                              color: "warning lighten-1"
                         },
                         {
                              id: "5",
                              name: "700 documents imported on 25/04/2020",
                              description: "Fileroom update",
                              icon: "mdi-file-document",
                              color: "warning lighten-1"
                         }
                    ]
               },

               statOutstanding: {
                    click: () => {
                         console.log("Stat selected!");
                    },
                    color: "warning--text",
                    title: "53",
                    description: "Review Outstanding"
               },
               statCompleted: {
                    click: () => {
                         console.log("Completed selected!");
                    },
                    color: "success--text",
                    title: "29",
                    description: "Review Complete"
               },
               statPersonalDocs: {
                    click: () => {
                         console.log("my docs selected!");
                    },
                    color: "teal--text",
                    title: "82",
                    description: "My Documents"
               }
          };
     },
     methods: {
          sayHello() {
               console.log("Hello!");
          },
          openHistoryDetail(item) {
               console.log("History Clicked! ", item);
          }
     }
};
</script>
