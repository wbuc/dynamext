<template>
     <v-dialog v-model="showDetail" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
               <v-toolbar dark color="primary">
                    <v-btn icon dark @click="closePage">
                         <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Settings</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                         <v-btn dark text @click="closePage">Save</v-btn>
                    </v-toolbar-items>
               </v-toolbar>
               <v-list three-line subheader>
                    <v-subheader>User Controls</v-subheader>
                    <v-list-item>
                         <v-list-item-content>
                              <v-list-item-title>Content filtering</v-list-item-title>
                              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
                         </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                         <v-list-item-content>
                              <v-list-item-title>Password</v-list-item-title>
                              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
                         </v-list-item-content>
                    </v-list-item>
               </v-list>
               <v-divider></v-divider>
               <v-list three-line subheader>
                    <v-subheader>General</v-subheader>
                    <v-list-item>
                         <v-list-item-action>
                              <v-checkbox v-model="data.notifications"></v-checkbox>
                         </v-list-item-action>
                         <v-list-item-content>
                              <v-list-item-title>Notifications</v-list-item-title>
                              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
                         </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                         <v-list-item-action>
                              <v-checkbox v-model="data.sound"></v-checkbox>
                         </v-list-item-action>
                         <v-list-item-content>
                              <v-list-item-title>Sound</v-list-item-title>
                              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
                         </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                         <v-list-item-action>
                              <v-checkbox v-model="data.widgets"></v-checkbox>
                         </v-list-item-action>
                         <v-list-item-content>
                              <v-list-item-title>Auto-add widgets</v-list-item-title>
                              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
                         </v-list-item-content>
                    </v-list-item>
               </v-list>
          </v-card>
     </v-dialog>
</template>

<script>
export default {
     name: "Accounts.Detail",
     props: ["showDialog"],
     data() {
          return {
               showMe: false,
               data: {
                    notifications: false,
                    sound: true,
                    widgets: false
               }
          };
     },
     computed: {
          showDetail() {
               return this.showDialog;
          }
     },
     methods: {
          closePage() {
               this.$emit("detailClosed");
          },
          savePage() {
               this.$emit("detailClosed");
          }
     },
     created() {
          this.showMe = this.showDialog;
     }
};
</script>

<style>
</style>