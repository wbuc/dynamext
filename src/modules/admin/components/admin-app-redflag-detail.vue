<template>
  <div>
    <x-data-list :endPoint="url" :key="listTicker">
      <template v-slot="{data: dataList, loading}">
        <x-form-section>
          <template v-slot:actions>
            <v-btn small text class="mr-2" @click="newItem">
              <v-icon left color="success">mdi-plus-thick</v-icon>
              <span>New</span>
            </v-btn>
            <v-btn icon small text @click="refresh">
              <v-icon color="primary">mdi-refresh</v-icon>
            </v-btn>
          </template>
          <v-progress-linear v-if="loading" indeterminate></v-progress-linear>
          <div v-else>
            <x-dynamic-list :listData="dataList">
              <template v-slot:title="{item}">{{item.displayName}}</template>
              <template v-slot:actions="{ item }">
                <v-btn small icon @click="editItem(item)">
                  <v-icon small color="secondary">mdi-pencil</v-icon>
                </v-btn>
                <v-btn small icon @click="deleteItem(item)">
                  <v-icon small color="error">mdi-delete</v-icon>
                </v-btn>
              </template>
            </x-dynamic-list>
          </div>
        </x-form-section>
      </template>
    </x-data-list>
    <x-dialog :show="dialogConfig.open" :actions="dialogConfig.actions" :key="dialogTicker">
      <template v-slot:title>{{dialogConfig.title}}</template>
      <template>
        <x-form-section flat dense>
          <x-form-control title="Name" dense>
            <v-text-field
              v-model="currentRedflag.displayName"
              style="width:100%"
              outlined
              single-line
              hide-details
              dense
              placeholder="Ex. Finance"
            ></v-text-field>
          </x-form-control>
          <x-form-control title="Icon" dense>
            <x-picker-icon v-model="currentRedflag.icon" name="redflag"></x-picker-icon> 
          </x-form-control>
          <x-form-control title="Icon colour" dense>
            <x-picker-colour v-model="currentRedflag.colour" name="redflag"></x-picker-colour> 

            <!-- <v-text-field
              v-model="currentRedflag.colour"
              style="width:100%"
              outlined
              single-line
              hide-details
              dense
              placeholder="error"
            ></v-text-field> -->
            <!-- <v-select
            :items="iconColours"
            v-model="currentRedflag.colour"
             single-line
              hide-details
              dense
            outlined
            ></v-select>-->
          </x-form-control>
        </x-form-section>
      </template>
    </x-dialog>
    <x-confirmation
      :show="deleteConfirmConfig.open"
      @confirmAction="deleteConfirmConfig.confirmAction"
      @cancelAction="deleteConfirmConfig.cancelAction"
    >
      <template v-slot:title>{{deleteConfirmConfig.title}}</template>
      <template v-slot:text>{{deleteConfirmConfig.text}}</template>
    </x-confirmation>
  </div>
</template>

<script>
export default {
  name: "admin.app.redflag.detail",
  components: {
    xPickerIcon: () => import("@/components/control-picker-icon"),
    xPickerColour: () => import("@/components/control-picker-colour"),
  },
  data() {
    return {
      url: "/redflag",
      listTicker: 1, // force the list refresh
      dialogTicker: 100, // force the dialog refrsh
      dialogConfig: {
        open: false,
        title: null,
        newActions: [
          {
            text: "Close",
            color: "error",
            action: () => {
             //this.dialogConfig.open = false;
             this.closeDialog();
            },
          },
          {
            text: "Save",
            color: "primary",
            action: () => {
              this.$store
                .dispatch("saveRedflag", this.currentRedflag)
                .then(() => {
                  this.$store.dispatch(
                    "notifySuccess",
                    `${this.currentRedflag.displayName} created!`
                  );
                  this.refresh();
                });
              this.dialogConfig.open = false;
            },
          },
        ],
        editActions: [
          {
            text: "Close",
            color: "error",
            action: () => {
              //this.dialogConfig.open = false;
              this.closeDialog();
            },
          },
          {
            text: "Update",
            color: "primary",
            action: () => {
              this.$store
                .dispatch("updateRedflagDetail", this.currentRedflag)
                .then(() => {
                  this.$store.dispatch(
                    "notifySuccess",
                    `${this.currentRedflag.displayName} has been updated!`
                  );
                  this.refresh();
                });
              //this.dialogConfig.open = false;
               this.closeDialog();
            },
          },
        ],
        actions: [],
      },
      deleteConfirmConfig: {
        open: false,
        title: null,
        text: null,
        confirmAction: () => {
          this.$store
            .dispatch("deleteRedflag", this.currentRedflag)
            .then(() => {
              this.$store.dispatch(
                "notifySuccess",
                `${this.currentRedflag.displayName} has been deleted!`
              );
              this.refresh();
            });
          this.deleteConfirmConfig.open = false;
        },
        cancelAction: () => {
          this.deleteConfirmConfig.open = false;
          this.currentRedflag = {};
        },
      },
      currentRedflag: {},
      iconColours: ["red", "amber", "green"],
    };
  },

  methods: {
    refresh() {
      this.listTicker++;
      this.dialogTicker++;
    },
    closeDialog(){
      this.dialogConfig.open = false;
      this.dialogTicker++;
    },
    newItem() {
      // Dialog presets
      this.dialogConfig.title = "New redflag";
      this.dialogConfig.actions = this.dialogConfig.newActions;
      // Empty object
      this.currentRedflag = { displayName: "", icon: "", colour: "", sort: 0 };
      // show dialog when ready
      this.dialogConfig.open = true;
    },
    editItem(item) {
      // Dialog presets
      this.dialogConfig.title = "Edit redflag";
      this.dialogConfig.actions = this.dialogConfig.editActions;
      // fetch item data from the server.
      this.$store.dispatch("getRedflagDetail", item).then((data) => {
        this.currentRedflag = data;
        this.dialogConfig.open = true;
      });
    },
    deleteItem(item) {
      // Always set the current item being used in any dialog.
      this.currentRedflag = item;
      // Dialog presets
      this.deleteConfirmConfig.title = "Delete redflag";
      this.deleteConfirmConfig.text = `Are you sure you want to delete ${this.currentRedflag.displayName}?`;
      // Show dialog when ready
      this.deleteConfirmConfig.open = true;
    },
    setColour(item) {
      console.log(item);
      this.currentRedflag.colour = item.value;
    },
  },
  created() {
    console.log("created : admin-app-redflag-detail");
  },
  mounted() {
    console.log("mounted : admin-app-redflag-detail");
  },
};
</script>

<style>
</style>

   
   <!-- <v-form>
          <x-form-section title="Coming soon">
               <x-form-control title="Title">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Give a title"
                    ></v-text-field>
               </x-form-control>
               <x-form-control title="Icon">
                    <v-text-field
                         style="width:100%"
                         outlined
                         single-line
                         hide-details
                         dense
                         placeholder="Select an icon"
                    ></v-text-field>
               </x-form-control>
          </x-form-section>
  </v-form>-->