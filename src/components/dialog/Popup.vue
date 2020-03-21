
<template>
     <v-dialog tile v-model="showDialog" width="600" :transition="false">
          <v-card>
               <v-card-title
                    class="headline grey lighten-3 grey--text"
                    primary-title
               >Add a New Project</v-card-title>

               <v-card-text class="grey lighten-5 pt-3">
                    <v-form ref="form">
                         <v-text-field
                              prepend-icon="folder"
                              label="Title"
                              :rules="rulesTitle"
                              v-model="data.title"
                         ></v-text-field>
                         <v-textarea
                              prepend-icon="edit"
                              label="Information"
                              :rules="rulesInformation"
                              v-model="data.content"
                         ></v-textarea>

                         <v-menu v-model="datePopup" :close-on-content-click="true" max-width="290">
                              <template v-slot:activator="{ on }">
                                   <v-text-field
                                        :value="formattedDate"
                                        clearable
                                        label="Due Date"
                                        readonly
                                        v-on="on"
                                        @click:clear="due = null"
                                        prepend-icon="date_range"
                                   ></v-text-field>
                              </template>
                              <v-date-picker v-model="data.due" @change="closeDatePicker"></v-date-picker>
                         </v-menu>
                    </v-form>
               </v-card-text>

               <v-divider></v-divider>

               <v-card-actions class="grey lighten-5 pa-5">
                    <v-spacer></v-spacer>
                    <v-btn color="grey " text tile width="100" @click="dialog = !dialog">Cancel</v-btn>
                    <v-btn
                         color="primary white--text"
                         :loading="loading"
                         tile
                         width="100"
                         @click="submit"
                    >Save</v-btn>
               </v-card-actions>
          </v-card>
     </v-dialog>
</template>

<script>
export default {
     data() {
          return {
               showDialog: false,
               loading: false,
               datePopup: false,
               data: {
                    title: "",
                    content: "",
                    due: null
               },
               rulesTitle: [v => v.length >= 3 || "Minimum length is 3"],
               rulesInformation: [v => v.length >= 5 || "Minimum length is 5"]
          };
     },
     computed: {
          formattedDate() {
               return this.data.due;
          }
     },
     methods: {
          submit() {},
          closeDatePicker() {}
     }
};
</script>

<style>
</style>