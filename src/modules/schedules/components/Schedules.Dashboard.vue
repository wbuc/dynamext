<template>
     <v-row>
          <v-col cols="12" :md="explorerConfig.fullView ? '7':'4'">Left</v-col>
          <v-col cols="12" :md="explorerConfig.fullView ? '5':'8'">Right</v-col>
     </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
     name: "Schedules.Dashboard",
     components: {},
     computed: {
          ...mapGetters(["api"])
     },
     data() {
          return {
               explorerConfig: {
                    fullView: true
               }
          };
     },
     methods: {},
     created() {}
};
</script>

<style>
.v-treeview-node {
     cursor: pointer;
}
.x-context-panel {
     position: -webkit-sticky;
     position: sticky;
     top: 100px;
}
</style>