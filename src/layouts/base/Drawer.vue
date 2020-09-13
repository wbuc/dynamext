<template>
  <v-card>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-layout column align-center>
        <v-flex class="mt-5 text-center">
          <v-avatar size="100">
            <img src="/logo-user1.jpg" alt />
          </v-avatar>
          <p class="grey--text text-center subheading mt-1">
            Wessel Büchling
            <v-icon small class="mdi-16px mb-1 grey--text" @click="editUserDetail">mdi-pencil</v-icon>
          </p>
        </v-flex>
        <v-flex class="mb-4 mt-2"></v-flex>
      </v-layout>
      <v-list dense nav>
        <template v-for="(link, index) in links">
          <v-divider v-if="link.divider" :key="index" class="my-3"></v-divider>
          <v-list-item
            v-else-if="link.route"
            :to="link.route"
            link
            :key="index"
            active-class="secondary--text"
          >
            <v-list-item-action>
              <v-icon>{{link.icon}}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{link.text}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <x-dialog :show="dialogConfig.open" :actions="dialogConfig.actions">
      <template v-slot:title>{{dialogConfig.title}}</template>
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
                <v-text-field v-model="userDetail.name" outlined single-line hide-details dense></v-text-field>
              </x-form-control>
            </v-col>
            <v-col cols="6">
              <x-form-control title="Role" dense>
                <v-text-field v-model="userDetail.role" outlined single-line hide-details dense></v-text-field>
              </x-form-control>
            </v-col>
            <v-col cols="6">
              <x-form-control title="Surname" dense>
                <v-text-field v-model="userDetail.surname" outlined single-line hide-details dense></v-text-field>
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
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

import linkConfig from "@/config/navigationLinks";
export default {
  name: "Drawer",
  props: { drawer: { default: true } },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    editUserDetail() {
      this.$store.dispatch("getUserDetail", this.user.email).then((data) => {
        this.userDetail = data;
        this.dialogConfig.open = true;
      });
    },
  },
  data() {
    return {
      links: linkConfig.drawer,
      userDetail: { name: "Wessel" },
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
  mounted: function () {
    // this.$vuetify.theme.dark = this.user.theme === "dark" ? true : false;
  },
};
</script>

<style>
</style>