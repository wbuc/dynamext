<template>
     <v-card elevation="3" class="mt-2">
          <v-row no-gutters class="mb-3">
               <v-col cols="12" xs="12" sm="12" md="6">
                    <div class="pa-3">
                         <v-list-item class="subtitle-1 pl-0">
                              <slot>
                                   <v-btn text icon class="mr-2">
                                        <v-icon color="secondary">mdi-arrow-left-bold</v-icon>
                                   </v-btn>
                                   <span>Toolbar</span>
                              </slot>
                         </v-list-item>
                    </div>
               </v-col>
               <v-col cols="12" xs="12" sm="12" md="6" class="hidden-sm-and-down">
                    <div class="pa-3">
                         <v-list-item class="caption pr-0">
                              <v-spacer></v-spacer>
                              <slot name="right">
                                   <v-btn depressed large icon color="grey">
                                        <v-icon>mdi-flag-variant-outline</v-icon>
                                   </v-btn>
                              </slot>
                         </v-list-item>
                    </div>
               </v-col>
          </v-row>
     </v-card>
</template>

<script>
export default {
     name: "Components.Toolbar"
};
</script>

<style>
</style>