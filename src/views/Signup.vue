<template>
     <v-container fluid fill-height>
          <v-layout align-center justify-center class="login">
               <v-flex xs12 sm8 md3>
                    <Signup></Signup>
               </v-flex>
          </v-layout>
     </v-container>
</template>

<script>
import Signup from "@/modules/userprofile/components/Signup";

export default {
     name: "Signup-view",
     components: { Signup }
};
</script>

<style lang="sass">

</style>
