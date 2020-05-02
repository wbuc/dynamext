<template>
     <v-card class="mx-auto text-center" color="green" dark max-width="600">
          <v-card-text>
               <v-sheet color="rgba(0, 0, 0, .12)">
                    <v-sparkline
                         :labels="labels"
                         :value="value"
                         color="white"
                         line-width="2"
                         padding="16"
                    ></v-sparkline>
                    <!-- <v-sparkline
                         :value="value"
                         color="rgba(255, 255, 255, .7)"
                         height="100"
                         padding="24"
                         stroke-linecap="round"
                         smooth
                    >
                    </v-sparkline>-->
               </v-sheet>
          </v-card-text>

          <v-card-text>
               <div class="display-1 font-weight-thin">Review Completed</div>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions class="justify-center">
               <v-btn block text>Go to Report</v-btn>
          </v-card-actions>
     </v-card>
</template>

<script>
export default {
     name: "Component.Chart.Line",
     data: () => ({
          value: [2, 4, 1, 8, 3, 4, 7],
          labels: [
               "01/03",
               "02/03",
               "03/03",
               "06/03",
               "08/03",
               "09/03",
               "13/03"
          ]
     })
};
</script>

<style>
</style>