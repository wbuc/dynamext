<script>
// import axios from "axios";
import api from "@/config/presets";
import apiClient from "@/modules/shared/api/apiClient";

export default {
  props: {
    endPoint: { type: String },
    baseURL: {
      type: String,
      default: api.baseURL,
    },
  },
  data() {
    return {
      api: apiClient, //axios.create({ baseURL: this.baseURL }),
      data: null,
      loading: true,
    };
  },
  created() {
    this.api.get(this.endPoint).then(({ data }) => {
      this.data = data;
      this.loading = false;
    });
  },
  render() {
    return this.$scopedSlots.default({
      data: this.data,
      loading: this.loading,
    });
  },
};
</script>