<template>
  <div>
    <x-toolbar>
      <template v-slot:default>
        <v-btn text icon class="mr-2" @click="goBack">
          <v-icon color="secondary">mdi-arrow-left-bold</v-icon>
        </v-btn>
        <span>Users</span>
      </template>
      <template v-slot:right> </template>
    </x-toolbar>
    <v-row no-gutters class="mb-3">
      <v-col cols="12" xs="12" sm="12" md="9" class="hidden-sm-and-down">
        <div>
         
        </div>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="3" class="hidden-sm-and-down">
        <div>
          <v-text-field
            append-icon="mdi-magnify"
            v-model="searchText"
            label="Search"
            outlined
            single-line
            hide-details
            dense
          ></v-text-field>
        </div>
      </v-col>
    </v-row>
    <v-row wrap>
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="(user, index) in users"
        :key="index"
      >
        <v-card elevation="3" tile flat class="text-sm-center">
          <v-responsive class="pt-4 caption">
            <v-avatar size="100" color="grey lighten-2">
              <img :src="user.avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{ user.name }}</div>
            <div class="grey--text">{{ user.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="grey">
              <v-icon small left>message</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "admin.users.dashboard",
  components: {},
  data() {
    return {
      searchText: "",
      users: [
        {
          name: "Wessel Buchling",
          role: "Developer",
          avatar: "/logo-user1.jpg",
        },
        {
          name: "Lukas",
          role: "Project Manager",
          avatar: "/logo-user3.png",
        },
        {
          name: "Marvin",
          role: "Developer",
          avatar: "/logo-user1.jpg",
        },
        {
          name: "Gerrit",
          role: "Program Manager",
          avatar: "/logo-user1.jpg",
        },
        {
          name: "Oliver",
          role: "Doc Doc Doc",
          avatar: "/logo-user1.jpg",
        },
      ],
    };
  },
  methods: {
    goBack() {
      this.$router.replace({ name: "Admin.Dashboard" });
    },
  },
  // before access to the DOM elements.
  created() {},
  // when access to the DOM elements
  mounted() {
    // this.$store.dispatch("getUsers").then(data => {
    //      data.forEach(item => {
    //           item.quickEdit = {
    //                email: false,
    //                color: false
    //           };
    //      });
    //      this.userData = data;
    // });
  },
};
</script>

<style>
</style>