<template>
     <v-data-table
          v-model="selected"
          :headers="headers"
          :items="data"
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
                    v-if="!item.quickEdit.email"
                    class="editable"
               >{{ item.email }}</div>
               <div v-if="item.quickEdit.email">
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

          <template v-slot:item.action="{ item }">
               <v-menu offset-y transition="slide-y-transition">
                    <template v-slot:activator="{ on }">
                         <v-btn icon text dark color="grey" v-on="on">
                              <v-icon>more_vert</v-icon>
                              <span></span>
                         </v-btn>
                    </template>
                    <v-list>
                         <v-list-item
                              v-for="(dataItem, index) in dataItemActions"
                              :key="index"
                              router
                              @click="dataItem.action(item)"
                              active-class="secondary--text"
                              dense
                         >
                              <v-list-item-action>
                                   <v-icon :class="dataItem.color" small>{{dataItem.icon}}</v-icon>
                              </v-list-item-action>
                              <v-list-item-content>
                                   <v-list-item-title>{{dataItem.title}}</v-list-item-title>
                              </v-list-item-content>
                         </v-list-item>
                    </v-list>
                    <v-list></v-list>
               </v-menu>
          </template>
     </v-data-table>
</template>

<script>
import { mapGetters } from "vuex";
export default {
     props: ["headers", "data", "dataItemActions"],
     data() {
          return {
               singleSelect: false,
               selected: [],
               max25chars: v => v.length <= 25 || "Input too long!",
               editItemOriginal: {},
               loading: true,
               search: "",
               defaultPageSize: 50,
               pageSizes: [25, 50, 100]
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

               item.quickEdit[field] = true;

               // NOTE: handle to the next element on the DOM being updated.
               this.$nextTick(() => {
                    this.$refs[field].focus();
               });
          },
          cellEditDone(field, item) {
               // NOTE: this func can be used to either save items on done, or build a list of items that can be saved manually.

               item.quickEdit[field] = false;
               this.$emit("itemEditDone", item);
          },
          cellEditCancel(field, item) {
               const i = this.data.find(x => x.id == item.id);
               i[field] = this.editItemOriginal[field];

               item.quickEdit[field] = false;
          }
     }
};
</script>

<style>
table .editable {
     cursor: pointer;
}
</style>