<template>
     <v-card class="signup elevation-5">
          <v-toolbar class="text-cetner" color flat>
               <v-toolbar-title class="text-center">Signup form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
               <v-form>
                    <v-text-field label="Email" name="email" prepend-icon="mail" type="text"></v-text-field>

                    <v-text-field
                         id="password"
                         label="Password"
                         name="password"
                         prepend-icon="lock"
                         type="password"
                    ></v-text-field>

                    <!-- <v-divider></v-divider> -->
               </v-form>
          </v-card-text>
          <v-card-actions class="px-4 pb-4">
               <v-spacer></v-spacer>
               <v-btn @click="gotoLogin" text color="grey" width="100">Sign In</v-btn>

               <v-btn color="success" width="100">
                    <!-- <v-icon small left>check</v-icon> -->
                    <span>Sign Up</span>
               </v-btn>
          </v-card-actions>
     </v-card>
</template>

<script>
export default {
     methods: {
          gotoLogin() {
               this.$router.replace({ name: "Login" });
          }
     }
};
</script>

<style lang="sass">

</style>
