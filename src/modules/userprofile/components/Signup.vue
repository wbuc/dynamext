<template>
     <v-card class="signup elevation-5">
          <v-toolbar class="text-cetner" color flat>
               <v-toolbar-title class="text-center">Signup form</v-toolbar-title>
          </v-toolbar>
          <v-form @submit.prevent="signUp">
               <v-card-text>
                    <v-text-field
                         label="Email"
                         name="email"
                         prepend-icon="mail"
                         type="text"
                         v-model="formData.email"
                    ></v-text-field>

                    <v-text-field
                         id="password"
                         label="Password"
                         name="password"
                         prepend-icon="lock"
                         type="password"
                         v-model="formData.password"
                    ></v-text-field>

                    <v-btn id="button-colour" text color="accent" dark>
                         <span>
                              <v-icon left>expand_more</v-icon>
                              <span v-if="formData.colour">{{ formData.colour.text }}</span>
                              <span v-else-if="!formData.colour">Favourite Colour</span>
                         </span>
                    </v-btn>
                    <v-menu offset-y transition="scroll-x-transition" activator="#button-colour">
                         <v-list>
                              <v-list-item
                                   v-for="(colour, index) in colours"
                                   :key="index"
                                   @click="setColor(colour)"
                              >
                                   <v-list-item-title>{{ colour.text }}</v-list-item-title>
                              </v-list-item>
                         </v-list>
                    </v-menu>
                    <!-- <v-divider>opopop</v-divider>  -->
               </v-card-text>
               <v-card-actions class="px-4 pb-4">
                    <v-spacer></v-spacer>
                    <v-btn @click="gotoLogin" text color="grey" width="100">Sign In</v-btn>

                    <v-btn :loading="api.loading" type="submit" color="success" width="100">
                         <span>Sign Up</span>
                    </v-btn>
               </v-card-actions>
          </v-form>
     </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
     name: "Signup-comp",
     data() {
          return {
               formData: {
                    email: "",
                    password: "",
                    colour: null
               },
               colours: [
                    { value: "Blue", text: "Midnight Blue" },
                    { value: "Purple", text: "Mulberry Purple" },
                    { value: "Green", text: "Jade Green" }
               ]
          };
     },
     computed: {
          ...mapGetters(["api"])
     },
     methods: {
          gotoLogin() {
               this.$router.replace({ name: "Login" });
          },
          signUp() {
               this.$store.dispatch("signUp", this.formData);
          },
          setColor(colour) {
               this.formData.colour = colour;
          }
     }
};
</script>

<style>
</style>