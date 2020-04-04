<template>
     <v-hover v-slot:default="{hover}">
          <v-card
               @click="primaryAction()"
               :elevation="hover ? 10 : 3"
               max-width="344"
               outlined
               class="mt-3 mx-auto"
          >
               <v-sheet
                    class="v-sheet--offset mx-auto"
                    color="cyan"
                    elevation="1"
                    max-width="calc(100% - 32px)"
               >
                    <v-sparkline
                         :labels="labels"
                         :value="value"
                         color="white"
                         line-width="2"
                         padding="16"
                    ></v-sparkline>
               </v-sheet>

               <v-card-text class="pt-0">
                    <div class="title font-weight-light mb-2">User Registrations</div>
                    <div class="subheading font-weight-light grey--text">Last Campaign Performance</div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small>mdi-clock</v-icon>
                    <span
                         class="caption grey--text font-weight-light"
                    >last registration 26 minutes ago</span>
               </v-card-text>
          </v-card>
     </v-hover>
</template>

<script>
export default {
     name: "Card.Timeline",
     data: () => ({
          labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
          value: [0, 210, 500, 222, 310, 425, 250, 240],
          hover: 3
     }),
     props: {
          title: String,
          primaryAction: Function
     }
};
</script>

<style>
.v-sheet--offset {
     top: -25px;
     position: relative;
}
</style>