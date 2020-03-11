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
               <v-icon small class="error--text" @click="deleteItem(item)">mdi-delete</v-icon>
               <v-menu offset-y transition="slide-y-transition">
                    <template v-slot:activator="{ on }">
                         <v-btn icon text color="secondary" dark v-on="on">
                              <v-icon>more_vert</v-icon>
                              <span></span>
                         </v-btn>
                    </template>
                    <v-list></v-list>
               </v-menu>
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
               loading: true,
               itemActions: [
                    {
                         title: "Edit",
                         icon: "mdi-pencil",
                         action: item => console.log("editing ", item)
                    }
               ]
          };
     },
     computed: {
          ...mapGetters(["api"])
     },
     methods: {
          save() {},
          close() {},
          open() {},
          cancel() {},
          deleteItem(item) {
               console.log("deleted for ", item);
          },
          editItem(item) {
               console.log("edit for ", item);
          }
     },
     mounted() {}
};
</script>

<style>
</style>