<script>
import { Pie } from "vue-chartjs";

export default {
     extends: Pie,
     props: {
          options: {
               type: Object,
               default: null
          },
          chartdata: {
               type: Object,
               default: null
          }
     },
     mounted() {
          this.renderChart(this.chartdata, this.options);
     }
};
</script>
