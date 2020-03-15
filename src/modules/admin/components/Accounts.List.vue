<template>
     <div>
          <v-data-table
               v-model="selected"
               :headers="headers"
               :items="accounts"
               :single-select="singleSelect"
               item-key="id"
               show-select
               class="elevation-3"
               :search="search"
               :loading="api.loading"
               loading-text="Loading... Please wait"
          >
               <template v-slot:top>
                    <v-toolbar flat>
                         <v-toolbar-title></v-toolbar-title>
                         <v-btn text color="blue" large class>
                              <v-icon left>mdi-magnify</v-icon>
                              <span>Action 1</span>
                         </v-btn>
                         <v-btn text large color="blue">
                              <v-icon left>table_chart</v-icon>
                              <span>Action 2</span>
                         </v-btn>
                         <v-btn text large color="blue">
                              <v-icon left>mdi-heart</v-icon>
                              <span>Action 3</span>
                         </v-btn>

                         <v-spacer></v-spacer>

                         <v-text-field
                              v-model="search"
                              append-icon="mdi-magnify"
                              label="Search"
                              single-line
                              hide-details
                         ></v-text-field>
                    </v-toolbar>
                    <v-divider></v-divider>
               </template>
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
                              <v-text-field
                                   v-model="props.item.email"
                                   label="Edit"
                                   single-line
                                   counter
                              ></v-text-field>
                         </template>
                    </v-edit-dialog>
               </template>
               <template v-slot:item.action="{ item }">
                    <!-- 
                         <v-icon small class="mr-2 secondary--text" @click="editItem(item)">mdi-pencil</v-icon>
                         <v-icon small class="error--text" @click="deleteItem(item)">mdi-delete</v-icon>
                    -->
                    <v-menu offset-y transition="slide-y-transition">
                         <template v-slot:activator="{ on }">
                              <v-btn icon text dark color="blue" v-on="on">
                                   <v-icon>more_vert</v-icon>
                                   <span></span>
                              </v-btn>
                         </template>
                         <v-list>
                              <v-list-item
                                   v-for="(act, index) in itemActions"
                                   :key="index"
                                   router
                                   @click="act.action(item)"
                                   active-class="secondary--text"
                                   dense
                              >
                                   <v-list-item-action>
                                        <v-icon :class="act.color" small>{{act.icon}}</v-icon>
                                   </v-list-item-action>
                                   <v-list-item-content>
                                        <v-list-item-title>{{act.title}}</v-list-item-title>
                                   </v-list-item-content>
                              </v-list-item>
                         </v-list>
                         <v-list></v-list>
                    </v-menu>
               </template>
          </v-data-table>
     </div>
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
               search: "",
               itemActions: [
                    {
                         title: "Edit",
                         icon: "mdi-pencil",
                         color: "info--text",
                         action: item => console.log("editing ", item.email)
                    },
                    {
                         title: "Delete",
                         icon: "mdi-delete",
                         color: "error--text",
                         action: item => console.log("deleting ", item.email)
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
          cancel() {}
     },
     mounted() {}
};
</script>

<style>
</style>