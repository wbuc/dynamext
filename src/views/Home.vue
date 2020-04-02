<template>
     <v-container class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Home</page-header>
               </v-col>
          </v-row>
          <v-row>
               <v-col>
                    <x-timeline-card></x-timeline-card>
               </v-col>
               <v-col>
                    <v-card class="mx-auto elevation" max-width="344" outlined>
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
                    </v-card>
               </v-col>
               <v-col>
                    <v-card class="mx-auto" max-width="344" outlined>
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
                    </v-card>
               </v-col>
               <v-col></v-col>
          </v-row>
     </v-container>
</template>

<script>
export default {
     name: "Home",
     components: {},
     methods: {
          sayHello() {
               console.log("Hello!");
          }
     }
};
</script>
