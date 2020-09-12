<template>
     <v-card flat dark class="signup" :style="{background:'#272727'}">
          <v-card-title class="mb-10">
               <x-logo large></x-logo>
               <!-- <span class="font-weight-light" style="border-bottom: solid 3px;">Dynam</span>
               <span style="border-bottom: solid 3px;">ext</span>-->
          </v-card-title>
          <v-card-subtitle class style="text-align:center">
               <span class="justify-center font-weight-light title">Signup form</span>
          </v-card-subtitle>
          <v-form @submit.prevent="signUp">
               <v-card-text>
                    <v-text-field
                         label="Name"
                         name="Name"
                         prepend-icon="mdi-face"
                         type="text"
                         solo-inverted
                         v-model="formData.name"
                         flat
                    ></v-text-field>

                    <v-text-field
                         label="Email"
                         name="email"
                         prepend-icon="mail"
                         type="text"
                         solo-inverted
                         v-model="formData.email"
                         flat
                    ></v-text-field>

                    <v-text-field
                         id="password"
                         label="Password"
                         name="password"
                         prepend-icon="lock"
                         type="password"
                         solo-inverted
                         v-model="formData.password"
                         flat
                    ></v-text-field>

                    <v-btn id="button-colour" text color="accent" dark>
                         <span>
                              <v-icon left>expand_more</v-icon>
                              <span v-if="formData.colour">{{ formData.colour.text }}</span>
                              <span v-else-if="!formData.colour">Favourite Colour</span>
                         </span>
                    </v-btn>
                    <v-menu offset-y transition="slide-y-transition" activator="#button-colour">
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
                    <v-btn @click="gotoLogin" text color="grey" width="100" large>Sign In</v-btn>

                    <v-btn :loading="api.loading" type="submit" color="accent" width="150px" large>
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
                    name:"",
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

.x-actions {
     padding-right: 16px !important;
}
</style>