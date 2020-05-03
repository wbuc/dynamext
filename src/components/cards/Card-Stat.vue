<template>
     <v-hover v-slot:default="{hover}">
          <v-card
               :elevation="hover ? 10 : 3"
               class="mx-auto text-center"
               @click="clickCard"
               :class="backgroundColor"
          >
               <v-card-text>
                    <div class="title" :class="titleColor">
                         <slot name="title">Stat Tile</slot>
                    </div>
                    <div class="title font-weight-light grey--text">
                         <slot name="detail"></slot>
                    </div>
               </v-card-text>
          </v-card>
     </v-hover>
</template>

<script>
export default {
     name: "Card.Stat",
     props: {
          titleColor: {
               Type: String,
               default: ""
          },
          backgroundColor: {
               Type: Object,
               default: ""
          },
          clickCard: {
               Type: Function,
               default: () => {}
          }
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