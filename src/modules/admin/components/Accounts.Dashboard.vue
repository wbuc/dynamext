<template>
     <v-container class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Accounts</page-header>
                    <x-breadcrumb :links="breadcrumbs"></x-breadcrumb>
               </v-col>
          </v-row>
          <v-row>
               <v-col>
                    <account-list :accounts="users" :headers="userHeaders"></account-list>
               </v-col>
          </v-row>
     </v-container>
</template>

<script>
import AccountList from "@/modules/admin/components/Accounts.List";

export default {
     components: { AccountList },
     data() {
          return {
               breadcrumbs: [
                    {
                         text: "Admin",
                         disabled: false,
                         link: true,
                         to: { name: "Admin" }
                    },
                    {
                         text: "Accounts",
                         disabled: true,
                         link: true
                    }
               ],
               userHeaders: [
                    { text: "Email", value: "email", width: "40%" },
                    { text: "Favourite Colour", value: "colour", width: "40%" },
                    {
                         text: "",
                         value: "action",
                         sortable: false,
                         align: "end",
                         width: "20%"
                    }
               ],

               users: []
          };
     },
     methods: {},
     // before access to the DOM elements.
     created() {},
     // when access to the DOM elements
     mounted() {
          this.$store.dispatch("getUsers").then(data => {
               this.users = data;
          });
     }
};
</script>

<style>
</style>