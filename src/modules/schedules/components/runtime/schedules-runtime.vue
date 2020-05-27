<template>
     <div class="x-form-runtime">
          <v-list-item
               two-line
               :ripple="canvasConfig.ripple"
               v-for="(control) in form.formControls"
               :key="control.id"
               class="x-control"
          >
               <v-list-item-content class="x-control-content">
                    <component :is="`${control.type}Control`" v-bind:control="control"></component>
               </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-card-actions class="pr-4 mt-2 pb-4">
               <v-spacer></v-spacer>

               <v-btn text large outlined color width="120px" class="mt-3">
                    <v-icon left color="primary">mdi-check-bold</v-icon>
                    <span>Save</span>
               </v-btn>
          </v-card-actions>
     </div>
</template>

<script>
// *** CONTROL TEMPLATES START
import textControl from "@/modules/schedules/components/runtime/controls/textbox";
import paragraphControl from "@/modules/schedules/components/runtime/controls/paragraph";
import headerControl from "@/modules/schedules/components/runtime/controls/header";
import numberControl from "@/modules/schedules/components/runtime/controls/number";
import decimalControl from "@/modules/schedules/components/runtime/controls/decimal";
import informationControl from "@/modules/schedules/components/runtime/controls/information";
import yesnoControl from "@/modules/schedules/components/runtime/controls/yesno";
// *** CONTROL TEMPLATES END

export default {
     name: "Schedules.Canvas.Runtime",
     props: { form: { Type: Object, default: () => {} } },
     components: {
          textControl,
          paragraphControl,
          headerControl,
          numberControl,
          decimalControl,
          informationControl,
          yesnoControl
     },
     data() {
          return {
               canvasConfig: {
                    avctiveTab: null,
                    ripple: false,
                    editName: false,
                    globalId: 0
               }
          };
     }
};
</script>

<style>
.x-form-runtime .x-control {
     /* border: 1px solid #0000001f; */
     cursor: default;
}
.x-form-runtime .x-control-content {
     min-height: 74px !important;
}
.x-form-runtime .x-control-quick-actions {
     width: 30px;
     margin-top: 0px !important;
     margin-bottom: 0px !important;
}
</style>