<template>
     <v-container class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Accounts</page-header>
                    <v-breadcrumbs :items="breadcrumbs">
                         <v-breadcrumbs-item
                              slot="item"
                              slot-scope="{ item }"
                              :to="item.to"
                              exact
                         >{{item.text}}</v-breadcrumbs-item>
                         <template v-slot:divider>
                              <v-icon>mdi-chevron-right</v-icon>
                         </template>
                    </v-breadcrumbs>
               </v-col>
          </v-row>
          <v-row>
               <v-col>
                    <account-list :accounts="accounts"></account-list>
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
               accounts: [
                    {
                         email: "wessel@wessel.com",
                         colour: { text: "Jade Green", value: "Green" }
                    },
                    {
                         email: "Karli@keewave.com",
                         colour: { text: "ii", value: "ii" }
                    },
                    {
                         email: "someone@thedoor.com",
                         colour: { text: "kk", value: "kk" }
                    }
               ]
          };
     },
     methods: {}
};
</script>

<style>
</style>