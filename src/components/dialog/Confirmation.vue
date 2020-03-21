<template>
     <v-dialog
          v-model="showDialog"
          max-width="380"
          persistent
          :overlay-opacity="0.6"
          :transition="false"
     >
          <v-card class>
               <v-card-title
                    class="x-dialog-header headline grey--text pa-5"
                    primary-title
               >Confirmation</v-card-title>

               <v-card-text class="pa-5">Are you sure?</v-card-text>

               <v-divider></v-divider>
               <v-card-actions class="pa-3">
                    <v-spacer></v-spacer>

                    <v-btn class="font-weight-thin" large text @click="cancelAction">Cancel</v-btn>
                    <v-btn class="font-weight-thin" color="accent" large @click="confirmAction">Ok</v-btn>
               </v-card-actions>
          </v-card>
     </v-dialog>
</template>

<script>
export default {
     name: "Dialog.Confirmation",
     props: ["showDialog"],
     data() {
          return {};
     },
     methods: {
          cancelAction() {
               this.$emit("cancelAction");
          },
          confirmAction() {
               this.$emit("confirmAction");
          }
     }
};
</script>

<style>
.x-dialog-header {
     background-color: #313131 !important;
}
</style>