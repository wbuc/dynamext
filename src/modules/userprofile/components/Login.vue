<template>
     <v-card flat dark class="login" :style="{background:'#272727'}">
          <v-card-title class="mb-10">
               <x-logo large></x-logo>
               <!-- <div>
                    <span class="font-weight-light" style="border-bottom: solid 3px;">Dynam</span>
                    <span style="border-bottom: solid 3px;">ext</span>
               </div>-->
          </v-card-title>
          <v-card-subtitle class style="text-align:center">
               <span class="justify-center font-weight-light title">Login form</span>
          </v-card-subtitle>
          <v-form @submit.prevent="onLogin">
               <v-card-text>
                    <v-text-field
                         label="Login"
                         name="login"
                         prepend-icon="person"
                         type="text"
                         solo-inverted
                         v-model="email"
                         flat
                    ></v-text-field>

                    <v-text-field
                         id="password"
                         label="Password"
                         name="password"
                         prepend-icon="lock"
                         type="password"
                         solo-inverted
                         v-model="password"
                         flat
                    ></v-text-field>
               </v-card-text>
               <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="gotoSignup" text color="grey" width="100" large>Sign Up</v-btn>
                    <v-btn type="submit" :loading="api.loading" color="primary" width="150px" large>
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

<style lang="sass" scoped>

</style>