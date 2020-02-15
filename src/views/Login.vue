<template>
     <v-card class="login elevation-5 login">
          <v-card-title class="justify-center">
               <span class="headline font-weight-light">Login form</span>
          </v-card-title>
          <!-- <v-toolbar color>
                         <div class="justify-center">
                              <v-toolbar-title class="justify-center"></v-toolbar-title>
                         </div>
          </v-toolbar>-->
          <v-card-text>
               <v-form>
                    <v-text-field label="Login" name="login" prepend-icon="person" type="text"></v-text-field>

                    <v-text-field
                         id="password"
                         label="Password"
                         name="password"
                         prepend-icon="lock"
                         type="password"
                    ></v-text-field>
               </v-form>
          </v-card-text>
          <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn @click="gotoSignup" text color="grey" width="100">Sign Up</v-btn>
               <v-btn color="success" width="100">
                    <!-- <v-icon small left>check</v-icon> -->
                    <span>Sign In</span>
               </v-btn>
          </v-card-actions>
     </v-card>
</template>

<script>
export default {
     name: "Login",
     methods: {
          gotoSignup() {
               console.log("sss");
               this.$router.replace({ name: "Signup" });
          }
     }
};
</script>

<style lang="sass">

</style>