<template>
     <v-row>
          <v-col cols="12" :md="explorerConfig.fullView ? '7':'4'">
               <div class="row">
                    <div class="col-3">
                         <h3>Draggable 1</h3>
                         <draggable
                              class="dragArea list-group"
                              :list="list1"
                              :group="{ name: 'people', pull: 'clone', put: false }"
                              :clone="cloneControl"
                              @change="log"
                         >
                              <div
                                   class="list-group-item"
                                   v-for="element in list1"
                                   :key="element.id"
                              >{{ element.name }}</div>
                         </draggable>
                    </div>

                    <div class="col-3">
                         <h3>Draggable 2</h3>
                         <draggable
                              class="dragArea list-group"
                              :list="list2"
                              group="people"
                              @change="log"
                         >
                              <div
                                   class="list-group-item"
                                   v-for="element in list2"
                                   :key="element.id"
                              >{{ element.name }}</div>
                         </draggable>
                    </div>

                    <rawDisplayer class="col-3" :value="list1" title="List 1" />

                    <rawDisplayer class="col-3" :value="list2" title="List 2" />
               </div>
          </v-col>
          <v-col cols="12" :md="explorerConfig.fullView ? '5':'8'">Right</v-col>
     </v-row>
</template>

<script>
import { mapGetters } from "vuex";

import draggable from "vuedraggable";

let idGlobal = 9;
export default {
     name: "Schedules.Dashboard",
     components: { draggable },
     computed: {
          ...mapGetters(["api"])
     },
     data() {
          return {
               explorerConfig: {
                    fullView: true
               },
               list1: [
                    { name: "John", id: 1 },
                    { name: "Joao", id: 2 },
                    { name: "Jean", id: 3 },
                    { name: "Gerard", id: 4 }
               ],
               list2: [
                    { name: "Juan", id: 5 },
                    { name: "Edgard", id: 6 },
                    { name: "Johnson", id: 7 }
               ]
          };
     },
     methods: {
          log: function(evt) {
               window.console.log(evt);
          },
          cloneControl(item) {
               console.log(item);
               return {
                    id: idGlobal++,
                    name: `Control ${item.name}`
               };
          }
     },
     created() {}
};
</script>

<style>
.v-treeview-node {
     cursor: pointer;
}
.x-context-panel {
     position: -webkit-sticky;
     position: sticky;
     top: 100px;
}
</style>