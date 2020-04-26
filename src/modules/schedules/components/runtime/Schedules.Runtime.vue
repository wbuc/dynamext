<template>
     <div></div>
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
     components: {
          textControl,
          paragraphControl,
          headerControl,
          numberControl,
          decimalControl,
          informationControl,
          yesnoControl
     }
};
</script>

<style>
</style>