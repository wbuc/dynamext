 <script>
import axios from "axios";
import api from "@/config/api.js";

axios.defaults.baseURL = api.baseURL;

export default {
     props: ["url"],
     data() {
          return {
               data: null,
               loading: true
          };
     },
     created() {
          axios.get(this.url).then(({ data }) => {
               this.data = data;
               this.loaded = false;
          });
     },
     render() {
          return this.$scopedSlots.default({
               data: this.data,
               loading: this.loading
          });
     }
};
</script>

