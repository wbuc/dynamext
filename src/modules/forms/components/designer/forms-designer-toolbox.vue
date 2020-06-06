<template>
     <div></div>
</template>

<script>
export default {
     name: "forms.designer.toolbox",
     components: {},
     props: {
          currentControl: {
               type: Object
          }
     },
     data() {
          return {
               propertiesConfig: {
                    avctiveTab: null,
                    ripple: false
               }
          };
     },
     computed: {
          controlSelected() {
               return this.currentControl ? true : false;
          }
     },
     methods: {
          addFieldValidation() {
               if (this.currentControl.hasValidations) {
                    const controlType = this.currentControl.type;
                    const typeGroups = this.controlTypeConfig[controlType];
                    let newObj = {};
                    for (let groupIndex in typeGroups) {
                         for (let validIndex in typeGroups[groupIndex]
                              .validations) {
                              const validation =
                                   typeGroups[groupIndex].validations[
                                        validIndex
                                   ];
                              newObj[validation.name] = validation.value;
                         }
                    }
                    // bind the new object to the actual control validations
                    this.$set(this.currentControl, "validations", newObj);
               } else {
                    // empty the control validations
                    this.$set(this.currentControl, "validations", {});
               }
          }
     }
};
</script>

<style>
</style>
