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
    <v-progress-linear v-if="api.loading" indeterminate></v-progress-linear>
    <v-row wrap v-else>
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
            <v-avatar size="100" :color="`${user.avatar_colour}`">
              <v-icon dark size="48">
                {{ user.avatar }}
              </v-icon>
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subtitle-1">{{ user.name }} {{ user.surname }}</div>
            <div class="caption grey--text">{{ user.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color @click="editUserDetail(user)">
              <v-icon color="primary" small left>mdi-pencil</v-icon>
              <span>Edit</span>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="user.isDisabled === true" icon color="grey" @click="disableUser(user.id)">
              <v-icon small color="green">mdi-lock-open-variant-outline</v-icon>
            </v-btn>
             <v-btn v-if="user.isDisabled === false" icon color="grey" @click="enableUser(user.id)">
              <v-icon small color="red">mdi-lock-outline</v-icon>
            </v-btn>
            <v-btn icon color="grey">
              <v-icon small>mdi-information-outline</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <x-dialog
      :show="dialogConfig.open"
      :actions="dialogConfig.actions"
      :key="dialogTicker"
    >
      <template v-slot:title>{{ dialogConfig.title }}</template>
      <template>
        <x-form-section flat dense>
          <v-row>
            <v-col cols="6">
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
              <x-form-control title="Avatar" id="user-profile-image" dense>
                <x-picker-icon
                  v-model="userDetail.avatar"
                  :dataItems="avatarOptions"
                  :colour="userDetail.avatar_colour"
                  name="userProfileAvatar"
                ></x-picker-icon>
                <x-picker-colour
                  v-model="userDetail.avatar_colour"
                  name="userProfileAvatarColour"
                ></x-picker-colour>

                <!-- <v-btn @click="addProfileImage" icon><v-icon>mdi-cloud-upload </v-icon></v-btn>
                <input class="d-none" type="file" id="profileImageUpload" ref="profileImageUpload" @change="handleprofileImageUpload"/> -->
                <!-- <v-img :src="profileImageUrl"></v-img> -->
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
                <v-select
                  :items="lookupData.roles"
                  v-model="userDetail.fk_role_id"
                  item-text="displayName"
                  item-value="id"
                  dense
                  outlined
                  hide-details
                ></v-select>
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
                <v-select
                  :items="lookupData.departments"
                  v-model="userDetail.fk_department_id"
                  item-text="displayName"
                  item-value="id"
                  dense
                  outlined
                  hide-details
                ></v-select>
              </x-form-control>
            </v-col>
            <v-col cols="6">
              <x-form-control title="Theme" dense>
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
import { mapGetters } from "vuex";

export default {
  name: "admin.users.dashboard",
  components: {
    xPickerIcon: () => import("@/components/control-picker-icon"),
    xPickerColour: () => import("@/components/control-picker-colour"),
  },
  data() {
    return {
      searchText: "",
      users: [],
      userDetail: { name: "Sample Name" },
      profileImageUrl: "",
      dialogTicker: 100,
      lookupData: {
        departments: [],
        roles: [],
      },
      lookupDepartments: [],
      avatarOptions: [
        "mdi-flag-variant",
        "mdi-account-circle",
        "mdi-head-check-outline",
        "mdi-ski",
        "mdi-ski-water",
        "mdi-checkbox-blank-circle",
        "mdi-egg",
        "mdi-hexagon",
        "mdi-cloud",
        "mdi-triangle",
        "mdi-star-circle",
        "mdi-ninja",
        "mdi-ghost",
        "mdi-death-star-variant",
        "mdi-rocket",
        "mdi-meditation",
        "mdi-fish",
        "mdi-emoticon-cool-outline",
        "mdi-emoticon-happy-outline",
      ],
      dialogConfig: {
        open: false,
        title: "Edit User Detail",
        actions: [
          {
            text: "Close",
            color: "error",
            action: () => {
              this.dialogConfig.open = false;
              //this.dialogTicker++;
            },
          },
          {
            text: "Update",
            color: "primary",
            action: () => {
              this.$store
                .dispatch("updateUserDetail", this.userDetail)
                .then(() => {
                  this.$store.dispatch(
                    "notifySuccess",
                    `${this.userDetail.email} has been updated!`
                  );
                  // refresh the dashboard with any updated data.
                  this.refreshUsersDashboard();
                });
              this.dialogConfig.open = false;
              //this.dialogTicker++;
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(["api"]),
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
    addProfileImage() {
      this.$refs.profileImageUpload.click();
    },
    handleprofileImageUpload() {
      let uploadedFile = this.$refs.profileImageUpload.files;
      console.log(uploadedFile[0]);
    },
    previewProfileImage() {
      // This is not bewing used now, will make use of it later but this will preview your image
      this.profileImageUrl = URL.createObjectURL(this.userDetail.profileImage);
    },
    editUserDetail(userData) {
      this.dialogTicker++; // forces the dialog components to recreate itself each time this methods is triggered.
      this.$store.dispatch("getUserDetail", userData.email).then((data) => {
        this.userDetail = data.data;
        this.lookupData.departments = data.config.departments;
        this.lookupData.roles = data.config.roles;

        this.dialogConfig.open = true;
      });
    },
    async disableUser(id) {
      await this.$store.dispatch("disableUserAsync", id);
      this.refreshUsersDashboard();
    },
    async enableUser(id) {
      await this.$store.dispatch("enableUserAsync", id);
      this.refreshUsersDashboard();
    },
    refreshUsersDashboard() {
      this.$store.dispatch("getUsers").then((data) => {
        //  data.forEach(item => {
        //       item.quickEdit = {
        //            email: false,
        //            color: false
        //       };
        //  });
        this.users = data;
      });
    },
  },
  // before access to the DOM elements.
  created() {
    this.refreshUsersDashboard();
  },
  // when access to the DOM elements
  mounted() {},
};
</script>

<style scoped>
#user-profile-image /deep/ .v-input__control {
  display: none;
}
</style>
