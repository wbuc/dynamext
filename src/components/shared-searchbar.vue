<template>
  <v-row no-gutters class="mb-3 no-cursor">
    <v-col cols="12" xs="12" sm="12" md="9" class="d-flex align-center">
      <div>
        <slot>
          <!-- <v-btn id="sort-schedule" small text color="grey">
            <v-icon left small>mdi-file-document</v-icon>
            <span class="caption text-lowercase">by schedule name</span>
          </v-btn>
          <v-tooltip activator="#sort-schedule" top>
            <span>Sort all items by schedule name</span>
          </v-tooltip>
          <v-btn id="sort-owner" small text color="grey">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">by owner</span>
          </v-btn>
          <v-tooltip activator="#sort-owner" top>
            <span>Sort all items by owner</span>
          </v-tooltip> -->
        </slot>
      </div>
    </v-col>
    <v-col cols="12" xs="12" sm="12" md="3" class="hidden-sm-and-down">
      <div>
        <v-text-field
          append-icon="mdi-magnify"
          v-model="searchText"
          @input="searchUpdate"
          label="Search"
          outlined
          single-line
          hide-details
          dense
        ></v-text-field>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Components.Searchbar",
  data() {
    return {
      searchText: "",
    }
  },
  methods:{
       searchUpdate(value){
               this.$emit("searchUpdated",value);
       }
  }
};
</script>

<style scoped>
.no-cursor {
  cursor: default;
}
</style>