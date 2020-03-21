<template>
     <v-dialog v-model="showDialog" max-width="290">
          <v-card>
               <v-card-title class="headline">Use Google's location service?</v-card-title>

               <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

               <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="green darken-1" text @click="closePage">Close</v-btn>

                    <v-btn color="green darken-1" text @click="savePage">Save</v-btn>
               </v-card-actions>
          </v-card>
     </v-dialog>
</template>

<script>
export default {
     name: "AccountsDetail",
     props: ["showDialog"],
     data() {
          return {
               showMe: false
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