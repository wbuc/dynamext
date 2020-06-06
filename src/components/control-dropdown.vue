<template>
     <div>
          <v-btn :id="formattedControlName" text dark color="primary" class="x-branch-activator">
               <span>{{displayValue}}</span>
               <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
          <v-menu offset-y transition="slide-y-transition" :activator="`#${formattedControlName}`">
               <v-list>
                    <v-list-item
                         v-for="(item, index) in data"
                         :key="index"
                         @click="setCurrentItem(item)"
                         active-class="primary--text"
                         dense
                    >
                         <v-list-item-content>
                              <v-list-item-title>{{item.text}}</v-list-item-title>
                         </v-list-item-content>
                    </v-list-item>
               </v-list>
          </v-menu>
     </div>
</template>

<script>
export default {
     name: "control.dropdown",
     props: {
          value: { type: String },
          controlName: { type: String, default: "sample" },
          data: {
               type: Array,
               default: () => {
                    return [
                         {
                              text: "Text",
                              value: "text"
                         },
                         {
                              text: "Paragraph",
                              value: "paragraph"
                         },
                         {
                              text: "Header",
                              value: "header"
                         },
                         {
                              text: "Yes/No",
                              value: "yesno"
                         },
                         {
                              text: "Number",
                              value: "number"
                         },
                         {
                              text: "Decimal",
                              value: "decimal"
                         },
                         {
                              text: "Information",
                              value: "information"
                         },
                         {
                              text: "Dropdown",
                              value: "dropdown"
                         }
                    ];
               }
          }
     },
     computed: {
          formattedControlName() {
               return "dropdown-" + this.controlName.toString();
          },
          displayValue() {
               let t = null;
               for (const item of this.data) {
                    if (item.value === this.value) {
                         t = item.text;
                    }
               }
               return t;
          }
     },
     methods: {
          setCurrentItem(item) {
               this.$emit("input", item.value);

               // this.tempValue = item.value;
               // console.log(this.value);
               // console.log("Proxy clicked ", item);
               // this.currentItem = item;
               this.$emit("valueChanged");
          }
     },
     data() {
          return {
               currentItem: {
                    text: "None",
                    value: "none"
               },
               tempValue: this.value
          };
     }
};
</script>

<style>
</style>