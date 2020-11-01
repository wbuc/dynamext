<template>
  <div>
    <x-toolbar>
      <template v-slot:default>
        <v-btn text icon class="mr-2" @click="goBack">
          <v-icon color="secondary">mdi-arrow-left-bold</v-icon>
        </v-btn>
        <span>Users</span>
      </template>
      <template v-slot:right></template>
    </x-toolbar>
    <x-searchbar @searchUpdated="searchUsers">
      <template v-slot:default> </template>
    </x-searchbar>
    <v-row wrap>
      <v-col
        class="pb-6 pt-0"
        cols="12"
        sm="6"
        md="3"
        lg="3"
        xl="2"
        v-for="(user, index) in filteredUsers"
        :key="index"
      >
        <v-card elevation="3" tile flat class="text-sm-center">
          <v-responsive class="pt-4 caption">
            <v-avatar size="100" color="grey lighten-2">
              <img :src="user.avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subtitle-1">{{ user.name }}</div>
            <div class="caption grey--text">{{ user.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color @click="editUserDetail(user)">
              <v-icon color="primary" small left>mdi-pencil</v-icon>
              <span>Edit</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon color="grey">
              <v-icon small>mdi-lock-outline</v-icon>
            </v-btn>
            <v-btn icon color="grey">
              <v-icon small>mdi-information-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <x-dialog :show="dialogConfig.open" :actions="dialogConfig.actions">
      <template v-slot:title>{{ dialogConfig.title }}</template>
      <template>
        <x-form-section flat dense>
          <v-row>
            <v-col cols="12">
              <x-form-control title="Email" dense>
                <v-text-field
                  v-model="userDetail.email"
                  outlined
                  disabled
                  single-line
                  hide-details
                  dense
                ></v-text-field>
              </x-form-control>
            </v-col>
            <v-col cols="6">
              <x-form-control title="Name" dense>
                <v-text-field
                  v-model="userDetail.name"
                  outlined
                  single-line
                  hide-details
                  dense
                ></v-text-field>
              </x-form-control>
            </v-col>
            <v-col cols="6">
              <x-form-control title="Role" dense>
                <v-text-field
                  v-model="userDetail.role"
                  outlined
                  single-line
                  hide-details
                  dense
                ></v-text-field>
              </x-form-control>
            </v-col>
            <v-col cols="6">
              <x-form-control title="Surname" dense>
                <v-text-field
                  v-model="userDetail.surname"
                  outlined
                  single-line
                  hide-details
                  dense
                ></v-text-field>
              </x-form-control>
            </v-col>

            <v-col cols="6">
              <x-form-control title="Department" dense>
                <v-text-field
                  v-model="userDetail.department"
                  outlined
                  single-line
                  hide-details
                  dense
                ></v-text-field>
              </x-form-control>
            </v-col>
            <v-col cols="6">
              <x-form-control title="Theme">
                <v-btn-toggle
                  v-model="userDetail.theme"
                  mandatory
                  color="primary"
                  borderless
                  class="ml-0"
                >
                  <v-btn value="dark">Dark</v-btn>
                  <v-btn value="light">Light</v-btn>
                </v-btn-toggle>
              </x-form-control>
            </v-col>
          </v-row>
        </x-form-section>
      </template>
    </x-dialog>
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
          id: "1",
          name: "Wessel Buchling",
          role: "Developer",
          avatar: "/logo-user1.jpg",
        },
        {
          id: "2",
          name: "Lukas",
          role: "Project Manager",
          avatar: "/logo-user3.png",
        },
        {
          id: "3",
          name: "Marvin",
          role: "Developer",
          avatar: "/logo-user1.jpg",
        },
        {
          id: "4",
          name: "Gerrit",
          role: "Program Manager",
          avatar: "/logo-user1.jpg",
        },
        {
          id: "5",
          name: "Oliver",
          role: "Doc Doc Doc",
          avatar: "/logo-user1.jpg",
        },
      ],
      userDetail: { name: "Sample Name" },
      dialogConfig: {
        open: false,
        title: "User Profile",
        actions: [
          {
            text: "Close",
            color: "error",
            action: () => {
              this.dialogConfig.open = false;
            },
          },
          {
            text: "Update",
            color: "primary",
            action: () => {
              this.$store
                .dispatch("updateUserDetail", this.userDetail)
                .then(() => {
                  this.$vuetify.theme.dark =
                    this.userDetail.theme === "dark" ? true : false;
                  this.$store.dispatch(
                    "notifySuccess",
                    `${this.userDetail.email} has been updated!`
                  );
                });
              this.dialogConfig.open = false;
            },
          },
        ],
      },
    };
  },
  computed: {
    filteredUsers() {
      if (!this.searchText) return this.users;
      const _search = this.searchText.toLowerCase().trim();
      return this.users.filter(
        (c) => c.name.toLowerCase().indexOf(_search) > -1
      );
    },
  },
  methods: {
    searchUsers(searchValue) {
      // searchText is used in the computed prop to filter the list of users/
      this.searchText = searchValue;
    },
    goBack() {
      this.$router.replace({ name: "Admin.Dashboard" });
    },
    editUserDetail(userData) {
     //
     console.log(userData);

      // console.log("getting user...");
      // this.$store.dispatch("getUserDetail", userData.email).then((data) => {
      //   this.userDetail = data;
      //   this.dialogConfig.open = true;
      // });
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