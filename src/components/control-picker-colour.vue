<template>
  <span>
    <v-btn :id="formattedControlName" icon text>
      <span>
        <v-icon :class="`${selectedItem}--text`">mdi-checkbox-blank</v-icon>
      </span>
    </v-btn>
    <v-menu offset-y transition="slide-y-transition" :activator="`#${formattedControlName}`">
      <v-card>
        <v-container style="max-width:300px">
          <v-row no-gutters style="flex-wrap: wrap;">
            <v-col
              v-for="(item, index) in dataItems"
              :key="index"
              cols="2"
              class="flex-grow-1 flex-shrink-1 px-6 py-1"
            >
              <v-btn color @click="setItem(item)" icon text>
                <span>
                  <v-icon :class="`${item}--text`">mdi-checkbox-blank</v-icon>
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
  name: "Control.Picker.Colour",
  props: {
    controlName: { type: String, default: "shortcut" },
    value: { type: String },
    dataItems: {
      type: Array,
      default: () => {
        return [
          "primary",
          "secondary",
          "accent",
          "error",
          "green",
          "deep-orange",
          "orange",
          "yellow",
          "light-blue",
        ];
      },
    },
  },
  computed: {
    formattedControlName() {
      return "colour-picker-" + this.controlName.toString();
    },
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    setItem(item) {
      this.selectedItem = item;
      this.$emit("input", this.selectedItem);
    },
    clearItem() {
      this.selectedItem = null;
      this.$emit("input", this.selectedItem);
    },
  },
  mounted() {
  
    if (this.value != "" || !this.value) this.selectedItem = this.value;
  },
};
</script>
<style>
</style>

// ###SUPPORTED COLOURS###
// https://vuetifyjs.com/en/styles/colors/
