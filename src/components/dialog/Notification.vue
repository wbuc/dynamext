<template>
     <v-snackbar v-model="notification.show" bottom right :color="notification.type">
          <span>{{ notification.message }}</span>
          <v-btn color="white" icon text @click="closeNotify">
               <v-icon small>close</v-icon>
          </v-btn>
     </v-snackbar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
     data() {
          return {};
     },
     computed: {
          ...mapGetters(["notification"])
     },
     methods: {
          closeNotify() {
               this.$store.dispatch("closeNotify");
          }
     }
};
</script>

<style>
</style>