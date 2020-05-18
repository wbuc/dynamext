<template>
     <v-app>
          <base-view />
     </v-app>
</template>

<script>
export default {
     name: "AnonLayout",
     components: {
          BaseView: () => import("./View")
     }
};
</script>