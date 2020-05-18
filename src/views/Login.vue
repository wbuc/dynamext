<template>
     <v-container fluid fill-height>
          <v-layout align-center justify-center class="login">
               <v-flex xs12 sm8 md3>
                    <Login></Login>
               </v-flex>
          </v-layout>
     </v-container>
</template>

<script>
import Login from "@/modules/userprofile/components/Login";
export default {
     name: "Login-view",
     components: { Login }
};
</script>

<style lang="sass">

</style>