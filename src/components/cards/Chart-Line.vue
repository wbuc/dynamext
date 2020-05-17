<template>
     <v-card class="mx-auto text-center elevation-3">
          <chart-line
               :height="config.chartHeight"
               v-if="loaded"
               :chartdata="chartData"
               :options="chartOptions"
          ></chart-line>
     </v-card>
</template>

<script>
import line from "@/components/charts/Line";

export default {
     name: "Component.Chart.Line",
     components: { "chart-line": line },
     props: {
          config: {
               Type: Object,
               default: () => {
                    return {
                         chartHeight: 300
                    };
               }
          }
     },
     data: () => ({
          loaded: true,
          chartData: {
               labels: [
                    "01/03",
                    "05/03",
                    "07/03",
                    "12/03",
                    "16/03",
                    "21/03",
                    "23/03"
               ],
               datasets: [
                    {
                         label: "Review Complete",
                         backgroundColor: "#4caf50",
                         data: [0, 0, 29, 49, 55, 91, 118],
                         borderColor: ["#9e9e9e3b"],
                         borderWidth: 1
                    },
                    {
                         label: "Review Outstanding",
                         backgroundColor: "#fb8c00",
                         data: [0, 70, 65, 70, 54, 23, 15],
                         borderColor: ["#9e9e9e3b"],
                         borderWidth: 1
                    },
                    {
                         label: "Total Documents",
                         backgroundColor: "#009688",
                         data: [0, 100, 100, 100, 123, 123, 144],
                         borderColor: ["#9e9e9e3b"],
                         borderWidth: 1
                    }
               ]
          },
          chartOptions: {
               responsive: true,
               maintainAspectRatio: false,
               legend: {
                    position: "top"
               },
               scales: {
                    xAxes: [
                         {
                              gridLines: {
                                   display: false
                              }
                         }
                    ],
                    yAxes: [
                         {
                              gridLines: {
                                   display: false
                              }
                         }
                    ]
               }
          }
     }),
     async mounted() {
          //this.loaded = false;

          try {
               // fetch chart data here using await and populate
               // chartData and chartOptions to pass to child component.
               // https://vue-chartjs.org/guide/#chart-with-api-data
               //     this.loaded = true;
          } catch (e) {
               console.error(e);
          }
     }
};
</script>

<style>
</style>