<template>
     <v-container class="px-12 my-5">
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
               >
                    <div class="pl-3">
                         <x-tasklist></x-tasklist>
                    </div>
               </v-col>

               <v-col
                    cols="12"
                    :xs="fieldSize.xlarge"
                    :sm="fieldSize.large"
                    :md="fieldSize.medium"
                    :lg="fieldSize.large"
               >
                    <div class="pa-3">
                         <x-timeline-card></x-timeline-card>
                    </div>
               </v-col>
               <v-col
                    cols="12"
                    :xs="fieldSize.xlarge"
                    :sm="fieldSize.large"
                    :md="fieldSize.medium"
                    :lg="fieldSize.small"
               >
                    <div class="pl-3">
                         <x-basic-list
                              :config="history.config"
                              :dataList="history.data"
                              @itemClicked="openHistoryDetail"
                         ></x-basic-list>
                    </div>
               </v-col>
               <v-col>
                    <!-- <v-card class="mx-auto elevation" max-width="344">
                         <v-list-item three-line>
                              <v-list-item-content>
                                   <div class="overline mb-4">OVERLINE 1</div>
                                   <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                                   <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                              </v-list-item-content>

                              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                         </v-list-item>

                         <v-card-actions>
                              <v-btn text color="primary">Button</v-btn>
                              <v-btn color="cyan" text>Button</v-btn>
                         </v-card-actions>
                    </v-card>-->
               </v-col>
               <v-col>
                    <!-- <v-card class="mx-auto" max-width="344" outlined>
                         <v-list-item three-line>
                              <v-list-item-content>
                                   <div class="overline mb-4">OVERLINE 2</div>
                                   <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                                   <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                              </v-list-item-content>

                              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                         </v-list-item>

                         <v-card-actions>
                              <v-btn color="pink" text>Button</v-btn>
                              <v-btn color="success" text>Button</v-btn>
                         </v-card-actions>
                    </v-card>-->
               </v-col>
               <v-col></v-col>
          </v-row>
     </v-container>
</template>

<script>
import tasklist from "@/modules/dashboard/components/Tasklist";

export default {
     name: "Home",
     components: { "x-tasklist": tasklist },
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
