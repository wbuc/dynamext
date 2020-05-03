<template>
     <v-card class="mx-auto text-center elevation-3 py-3">
          <chart-pie
               :height="config.chartHeight"
               v-if="loaded"
               :chartdata="chartData"
               :options="chartOptions"
          ></chart-pie>
     </v-card>
</template>

<script>
import pie from "@/components/charts/Pie";

export default {
     name: "Component.Chart.Pie",
     components: { "chart-pie": pie },
     props: {
          config: {
               Type: Object,
               default: () => {
                    return {
                         chartHeight: 296
                    };
               }
          }
     },
     data: () => ({
          loaded: true,
          chartData: {
               labels: ["Review Complete", "Review Outstanding"],
               datasets: [
                    {
                         backgroundColor: ["#4caf50", "#fb8c00"],
                         borderColor: "#9e9e9e3b",
                         borderWidth: 1,
                         data: [29, 53]
                    }
               ]
          },
          chartOptions: {
               responsive: true,
               maintainAspectRatio: false,
               legend: {
                    position: "bottom"
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