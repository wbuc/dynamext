<template>
  <span>
    <v-btn :id="formattedControlName" icon text>
      <span>
        <v-icon>{{selectedItem}}</v-icon>
      </span>
    </v-btn>
    <v-menu offset-y transition="slide-y-transition" :activator="`#${formattedControlName}`">
      <v-card>
        <v-container style="max-width:300px">
          <v-row no-gutters style="flex-wrap: wrap;">
            <v-col
              v-for="(i, index) in dataItems"
              :key="index"
              cols="2"
              class="flex-grow-1 flex-shrink-1 px-6 py-1"
            >
              <v-btn color @click="setItem(i)" icon text>
                <span>
                  <v-icon>{{i}}</v-icon>
                </span>
              </v-btn>
            </v-col>
            <v-col cols="2" class="flex-grow-1 flex-shrink-1 px-6 py-1">
              <v-btn color="error" @click="clearItem" icon text>
                <span>
                  <v-icon small>mdi-close-thick</v-icon>
                </span>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-menu>
  </span>
</template>

<script>
export default {
  name: "Control.Picker.Icon",
  props: {
    controlName: { type: String, default: "shortcut" },
    value: { type: String },
    dataItems: {
      type: Array,
      default: () => {
        return [
          "mdi-plus-box-outline",
          "mdi-plus-thick",
          "mdi-do-not-disturb",
          "mdi-cloud-upload",
          "settings",
          "mdi-content-duplicate",
          "exit_to_app",
          "mdi-pencil",
          "mdi-delete",
          "mdi-open-in-new",
          "mdi-numeric-8-box-outline",
          "mdi-refresh",
          "mdi-flag-variant",
          "mdi-flag-variant-outline",
          "mdi-account-circle",
          "mdi-fingerprint",
          "mdi-checkbox-blank-circle",
          "mdi-moon-last-quarter",
          "mdi-checkbox-blank-circle-outline",
          "mdi-ski",
          "mdi-ski-water",
          "mdi-skull",
          "mdi-spa",
          "mdi-star-circle",
          "mdi-ninja",
          "mdi-cloud",
          "mdi-arrow-collapse-down",
          "mdi-rocket",
          "mdi-rocket-outline",
          "mdi-shape-plus",
          "mdi-meditation",
          "mdi-fish",
          "mdi-email",
          "mdi-radiobox-marked",
          "mdi-radiobox-blank",
          "mdi-view-dashboard",
          "mdi-emoticon-cool-outline",
          "mdi-emoticon-happy-outline",
          "mdi-emoticon-confused-outline",
          "mdi-emoticon-frown-outline",
          "mdi-emoticon-angry-outline",
        ];
      },
    },
  },
  computed: {
    formattedControlName() {
      return "icon-picker-" + this.controlName.toString();
    },
  },
  data() {
    return {
      selectedItem: "mdi-help-circle-outline",
    };
  },
  methods: {
    setItem(item) {
      // https://www.digitalocean.com/community/tutorials/vuejs-add-v-model-support
      this.selectedItem = item;
      this.$emit("input", this.selectedItem);
    },
    clearItem() {
      this.selectedItem = "mdi-help-circle-outline";
      this.$emit("input", this.selectedItem);
    },
  },
  mounted() {
    console.log("created");
    if (this.value != "") this.selectedItem = this.value;
  },
};
</script>
<style>
</style>
