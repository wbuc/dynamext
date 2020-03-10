<template>
     <v-data-table
          v-model="selected"
          :headers="headers"
          :items="accounts"
          :single-select="singleSelect"
          item-key="id"
          show-select
          class="elevation-3"
          :loading="api.loading"
          loading-text="Loading... Please wait"
     >
          <template v-slot:item.email="props">
               <v-edit-dialog
                    :return-value.sync="props.item.email"
                    @save="save"
                    @cancel="cancel"
                    @open="open"
                    @close="close"
               >
                    {{ props.item.email }}
                    <template v-slot:input>
                         <v-text-field v-model="props.item.email" label="Edit" single-line counter></v-text-field>
                    </template>
               </v-edit-dialog>
          </template>

          <template v-slot:item.action="{ item }">
               <v-icon small class="mr-2 secondary--text" @click="editItem(item)">mdi-pencil</v-icon>
               <v-icon class="error--text" small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
     </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
     props: ["headers", "accounts"],
     data() {
          return {
               singleSelect: false,
               selected: [],
               max25chars: v => v.length <= 25 || "Input too long!",
               loading: true
          };
     },
     computed: {
          ...mapGetters(["api"])
     },
     methods: {
          save() {},
          close() {
               console.log("closed");
          },
          open() {},
          cancel() {},
          deleteItem(item) {
               console.log("deleted for ", item);
          },
          editItem(item) {
               console.log("edit for ", item);
          }
     },
     mounted() {
          setTimeout(() => {
               this.loading = false;
          }, 4000);
     }
};
</script>

<style>
</style>