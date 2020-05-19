<template>
     <div>
          <x-data-table
               :data="data"
               :headers="headers"
               :dataItemActions="dataItemActions"
               @itemEditDone="saveDataItem"
          ></x-data-table>
     </div>
</template>

<script>
import DataTable from "@/components/table-editable";

export default {
     components: { "x-data-table": DataTable },
     props: ["headers", "data", "dataItemActions"],
     data() {
          return {};
     },
     methods: {
          saveDataItem(item) {
               console.log("Event emitted: ", item);
          }
     }
};
</script>

<style >
</style>
