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
               :items-per-page="defaultPageSize"
               :footer-props="{
                              'items-per-page-options': pageSizes
                              }"
          >
               <!-- <template slot="top" slot-scope="pagination">
               </template>-->
               <template v-slot:top="{pagination, options, updateOptions}">
                    <v-toolbar flat>
                         <v-toolbar-title></v-toolbar-title>
                         <v-toolbar-items wrap>
                              <v-btn text large color="primary">
                                   <v-icon left>add_box</v-icon>
                                   <span>New</span>
                              </v-btn>
                              <v-btn text color="secondary" :disabled="isItemSelected" large class>
                                   <v-icon left>linear_scale</v-icon>
                                   <span>Edit</span>
                              </v-btn>
                              <v-btn text large color="error" :disabled="isItemSelected">
                                   <v-icon left>delete</v-icon>
                                   <span>Delete</span>
                              </v-btn>
                         </v-toolbar-items>
                         <v-spacer></v-spacer>
                         <v-text-field
                              v-model="search"
                              append-icon="mdi-magnify"
                              label="Search"
                              outlined
                              single-line
                              hide-details
                              dense
                         ></v-text-field>
                    </v-toolbar>

                    <v-data-footer
                         :pagination="pagination"
                         :options="options"
                         :items-per-page-options="pageSizes"
                         @update:options="updateOptions"
                         items-per-page-text="$vuetify.dataTable.itemsPerPageText"
                    />
                    <v-divider></v-divider>
               </template>
               <template v-slot:item.email="{ item }">
                    <div
                         @click="cellEditStart('email', item)"
                         v-if="!item.editingEmail"
                         class="editable"
                    >{{ item.email }}</div>
                    <div v-if="item.editingEmail">
                         <v-text-field
                              v-model="item.email"
                              outlined
                              single-line
                              hide-details
                              dense
                              counter
                              v-on:keyup.enter="cellEditDone('email', item)"
                              v-on:keyup.esc="cellEditCancel('email', item)"
                              @blur="cellEditDone('email', item)"
                              ref="email"
                         ></v-text-field>
                    </div>
               </template>
               <!-- <template v-slot:item.email="props">
                    <v-edit-dialog
                         :return-value.sync="props.item.email"
                         @save="save"
                         @cancel="cancel"
                         @open="open"
                         @close="close"
                    >
                         <div>{{ props.item.email }}</div>

                         <template v-slot:input>
                              <v-text-field
                                   v-model="props.item.email"
                                   label="Edit"
                                   single-line
                                   counter
                              ></v-text-field>
                         </template>
                    </v-edit-dialog>
               </template>-->
               <template v-slot:item.action="{ item }">
                    <!-- 
                         <v-icon small class="mr-2 secondary--text" @click="editItem(item)">mdi-pencil</v-icon>
                         <v-icon small class="error--text" @click="deleteItem(item)">mdi-delete</v-icon>
                    -->
                    <v-menu offset-y transition="slide-y-transition">
                         <template v-slot:activator="{ on }">
                              <v-btn icon text dark color="grey" v-on="on">
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
               editItemOriginal: {},
               loading: true,
               search: "",
               defaultPageSize: 50,
               pageSizes: [25, 50, 100],
               itemActions: [
                    {
                         title: "Edit",
                         icon: "mdi-pencil",
                         color: "secondary--text",
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
          ...mapGetters(["api"]),
          isItemSelected() {
               if (!this.selected.length) return true;
               return false;
          }
     },
     methods: {
          save(item) {
               console.log(item, " saved!");
          },

          cellEditStart(field, item) {
               // store the original value
               this.editItemOriginal[field] = item[field];

               this.accounts.forEach(account => {
                    if (account.id === item.id) {
                         account.editingEmail = true;
                    }
               });
               this.$nextTick(() => {
                    this.$refs[field].focus();
               });
          },
          cellEditDone(field, item) {
               //this func can be used to either save items on done, or build a list of items that can be saved manually.
               console.log(field);
               console.log(item[field]);
               item.editingEmail = false;
          },
          cellEditCancel(field, item) {
               this.accounts.forEach(account => {
                    if (account.id == item.id) {
                         account[field] = this.editItemOriginal[field];
                    }
               });
               item.editingEmail = false;
          }
     },
     beforeCreated() {
          // Read more on Reactivity: https://vuejs.org/v2/guide/reactivity.html
          // props need to be added to object before comoponent is created else Vue does not know about it.
          // this.accounts.forEach((account, index) => {
          //      this.$set(account, "editingId", false);
          // });
     },
     mounted() {}
};
</script>

<style >
table .editable {
     cursor: pointer;
}
</style>
