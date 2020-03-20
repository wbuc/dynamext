<template>
     <v-card class="login elevation-5 login">
          <v-card-title class="justify-center">
               <span class="headline font-weight-light">Login form</span>
          </v-card-title>
          <v-form @submit.prevent="onLogin">
               <v-card-text>
                    <v-text-field
                         label="Login"
                         name="login"
                         prepend-icon="person"
                         type="text"
                         v-model="email"
                    ></v-text-field>

                    <v-text-field
                         id="password"
                         label="Password"
                         name="password"
                         prepend-icon="lock"
                         type="password"
                         v-model="password"
                    ></v-text-field>
               </v-card-text>
               <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="gotoSignup" text color="grey" width="100" large>Sign Up</v-btn>
                    <v-btn type="submit" :loading="api.loading" color="primary" width="100" large>
                         <!-- <v-icon small left>check</v-icon> -->
                         <span>Sign In</span>
                    </v-btn>
               </v-card-actions>
          </v-form>
     </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
     name: "Login-comp",
     data() {
          return {
               email: "",
               password: ""
          };
     },
     computed: {
          ...mapGetters(["api"])
     },
     methods: {
          gotoSignup() {
               this.$router.replace({ name: "Register" });
          },
          onLogin() {
               const formData = {
                    email: this.email,
                    password: this.password
               };

               this.$store.dispatch("login", formData);
          }
     }
};
</script>

<style>
</style>