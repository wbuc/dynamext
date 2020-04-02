<template>
     <v-hover v-slot:default="{hover}">
          <v-card
               @click="primaryAction()"
               :elevation="hover ? 10 : 3"
               class="mx-auto"
               max-width="344"
               outlined
          >
               <v-list-item three-line>
                    <v-list-item-content>
                         <!-- <div class="overline mb-4">OVERLINE 1</div> -->
                         <v-list-item-title
                              class="title font-weight-light mb-2 headline"
                              :class="`${hover? 'accent--text':''}`"
                         >{{ title }}</v-list-item-title>
                         <v-list-item-subtitle
                              small
                              class="subheading font-weight-light grey--text"
                         >
                              <slot name="description"></slot>
                         </v-list-item-subtitle>
                    </v-list-item-content>
               </v-list-item>

               <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- <v-btn
                         small
                         @click="primaryAction()"
                         text
                         color="success"
                    >Detail</v-btn>-->
               </v-card-actions>
          </v-card>
     </v-hover>
</template>

<script>
export default {
     name: "Card.Basic1",
     props: {
          title: String,
          primaryAction: Function
     },
     data() {
          return {
               hover: 3
          };
     }
};
</script>

<style>
</style>