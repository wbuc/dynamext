<template>
     <v-app>
          <component :is="layout">
               <!-- transition here over router-view -->
               <router-view></router-view>
          </component>
     </v-app>
</template>

<script>
const DEFAULT_LAYOUT = "default";
export default {
     name: "App",

     computed: {
          layout() {
               return (this.$route.meta.layout || DEFAULT_LAYOUT) + "-layout";
          }
     },
     created() {
          // any initial setup here.
     }
};
</script>
