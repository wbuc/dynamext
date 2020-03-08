<template>
     <v-app>
          <component :is="layout">
               <!-- transition here over router-view -->
               <router-view></router-view>
          </component>
     </v-app>
</template>

<script>
const DEFAULT_LAYOUT = "anon";
export default {
     name: "App",
     computed: {
          layout() {
               return (this.$route.meta.layout || DEFAULT_LAYOUT) + "-layout";
          }
     },
     created() {
          // component created, no access to DOM - fetch data here.
          this.$store.dispatch("tryAutoLogin"); // try sign user in
     },
     mounted() {
          // component created, access to DOM - do DOM stuff here !
     }
};
</script>
