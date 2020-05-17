<template>
     <v-fade-transition mode="out-in">
          <router-view />
     </v-fade-transition>
</template>

<script>
export default {
     name: "App",
     created() {
          this.$store.dispatch("tryAutoLogin"); // try sign user in
     }
};
</script>
