<template>
     <v-app-bar app clipped-left>
          <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
          <x-logo></x-logo>
          <v-spacer></v-spacer>
          <v-btn @click="toggleTheme" icon color="yellow darken-4">
               <v-icon>mdi-moon-waxing-crescent</v-icon>
          </v-btn>
          <v-btn @click="logout" text color="grey">
               <span>Sign Out</span>
               <v-icon right>exit_to_app</v-icon>
          </v-btn>
     </v-app-bar>
</template>

<script>
export default {
     name: "BaseAppBar",
     methods: {
          navHome() {
               this.$router.replace({ name: "Home" });
          },
          toggleDrawer() {
               this.drawer = !this.drawer;
               this.$emit("drawer", this.drawer);
          },
          toggleTheme() {
               this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
          },
          logout() {
               this.$store.dispatch("logout");
          }
     },
     data() {
          return {
               drawer: true,
               links: [
                    { title: "Home", route: "/", icon: "mdi-home" },
                    { title: "Tables", route: "/tables", icon: "mdi-table" },
                    {
                         title: "Contacts",
                         route: "/contacts",
                         icon: "mdi-face-woman-outline"
                    },
                    {
                         title: "Lesson 3",
                         route: "/lesson3",
                         icon: "mdi-numeric-3-box-outline"
                    },
                    {
                         title: "Lesson 4",
                         route: "/lesson4",
                         icon: "mdi-numeric-4-box-outline"
                    },
                    {
                         title: "Lesson 8",
                         route: "/lesson8",
                         icon: "mdi-numeric-8-box-outline"
                    },
                    {
                         title: "Renderless",
                         route: "/renderless",
                         icon: "mdi-crop-free"
                    }
               ]
          };
     }
};

/*
mdi-numeric-4-box-outline
mdi-numeric-5-box-outline
mdi-numeric-6-box-outline
mdi-numeric-7-box-outline

mdi-numeric-9-plus-box-multiple
*/
</script>

