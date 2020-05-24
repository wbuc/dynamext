<template>
     <v-form>
          <x-form-section title="Project Information">
               <x-form-control title="Project Title">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Project Dynamext"
                    ></v-text-field>
               </x-form-control>
               <x-form-control title="Description">
                    <v-textarea
                         v-bind:auto-grow="false"
                         outlined
                         hide-details
                         :rows="3"
                         placeholder="Sameple project description"
                    ></v-textarea>
               </x-form-control>
               <x-form-control title="Client Name">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Achme Industries"
                         @click.stop
                    ></v-text-field>
               </x-form-control>
               <x-form-control title="Client">
                    <v-btn-toggle v-model="clientSide" color="primary" borderless class="ml-0">
                         <v-btn value="buyside">Buyside</v-btn>
                         <v-btn value="sellside">Sellside</v-btn>
                    </v-btn-toggle>
               </x-form-control>
               <x-form-control title="Type">
                    <v-btn-toggle v-model="reportType" color="primary" borderless class="ml-0">
                         <v-btn value="duediligence">Due Diligence</v-btn>
                         <v-btn value="redflag">Red Flag</v-btn>
                    </v-btn-toggle>
               </x-form-control>
          </x-form-section>
          <x-form-section title="Optional">
               <v-row>
                    <v-col cols="6">
                         <x-form-control title="CMN">
                              <v-text-field
                                   style="width:100%"
                                   outlined
                                   single-line
                                   hide-details
                                   dense
                                   placeholder="CMN"
                              ></v-text-field>
                         </x-form-control>
                    </v-col>
                    <v-col cols="6">
                         <x-form-control title="Partner">
                              <v-text-field
                                   style="width:100%"
                                   outlined
                                   single-line
                                   hide-details
                                   dense
                                   placeholder="Partner"
                              ></v-text-field>
                         </x-form-control>
                    </v-col>
                    <v-col cols="6">
                         <x-form-control title="Partner (Optional)">
                              <v-text-field
                                   style="width:100%"
                                   outlined
                                   single-line
                                   hide-details
                                   dense
                                   placeholder="Partner (optional)"
                              ></v-text-field>
                         </x-form-control>
                    </v-col>
                    <v-col cols="6">
                         <x-form-control title="Target">
                              <v-text-field
                                   style="width:100%"
                                   outlined
                                   single-line
                                   hide-details
                                   dense
                                   placeholder="Target"
                              ></v-text-field>
                         </x-form-control>
                    </v-col>
                    <v-col cols="6">
                         <x-form-control title="Deal Type">
                              <v-btn-toggle
                                   v-model="dealType"
                                   color="primary"
                                   borderless
                                   class="ml-0"
                              >
                                   <v-btn value="sharedeal" color="transparent">Share Deal</v-btn>
                                   <v-btn value="assetdeal" color="transparent">Asset Deal</v-btn>
                              </v-btn-toggle>
                         </x-form-control>
                    </v-col>
               </v-row>
          </x-form-section>
          <x-form-footer>
               <template>
                    <v-btn text large width="120px" class="mr-2" @click="cancelProject">Cancel</v-btn>
                    <v-btn large color="primary" width="120px" @click="saveProject">
                         <v-icon left>mdi-check-bold</v-icon>
                         <span>Save</span>
                    </v-btn>
               </template>
          </x-form-footer>
     </v-form>
</template>

<script>
export default {
     name: "admin-app-project-detail",
     data() {
          return {
               clientSide: "buyside",
               reportType: "duediligence",
               dealType: "sharedeal"
          };
     },
     created() {
          console.log("created : admin-app-project-detail");
     },
     mounted() {
          console.log("mounted : admin-app-project-detail");
     },
     methods: {
          cancelProject() {
               this.$router.replace({ name: "Admin.Dashboard" });
               this.$store.dispatch(
                    "notifyError",
                    `Project information has not been saved.`
               );
          },
          saveProject() {
               this.$store.dispatch(
                    "notifySuccess",
                    `Project information has been saved!`
               );
          }
     }
};
</script>

<style>
</style>