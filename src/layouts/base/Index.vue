<template>
     <v-app>
          <x-notification></x-notification>
          <base-app-bar @drawer="updateDrawer" />
          <base-drawer :drawer="drawer" />
          <base-view />
     </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
     name: "BaseLayout",
     components: {
          BaseAppBar: () => import("./AppBar"),
          BaseView: () => import("./View"),
          BaseDrawer: () => import("./Drawer")
     },
     data() {
          return {
               drawer: true
          };
     },
     computed: {
          ...mapGetters(["isAuthenticated", "isLoading"])
     },
     methods: {
          updateDrawer(drawer) {
               this.drawer = drawer;
               console.log(this.drawer);
          }
     }
};
</script>