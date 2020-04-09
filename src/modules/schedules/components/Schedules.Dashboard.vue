<template>
     <v-row>
          <v-col cols="12" :md="explorerConfig.fullView ? '7':'4'">
               <v-card class="x-toolbox">
                    <v-list width="100%">
                         <v-subheader>Toolbox</v-subheader>
                         <draggable
                              class="dragArea list-group"
                              :list="list1"
                              :group="{ name: 'toolbox', pull: 'clone', put: false }"
                              :clone="cloneControl"
                              @change="log"
                         >
                              <v-list-item
                                   two-line
                                   v-for="element in list1"
                                   :key="element.id"
                                   color="primary"
                                   class="x-control"
                                   @click.stop="1==1"
                              >
                                   <v-list-item-action>
                                        <v-icon>{{element.icon}}</v-icon>
                                   </v-list-item-action>
                                   <v-list-item-content>
                                        <v-list-item-title>{{ element.name }}</v-list-item-title>
                                        <v-list-item-subtitle>This is some control information to help you.</v-list-item-subtitle>
                                   </v-list-item-content>
                              </v-list-item>
                         </draggable>
                    </v-list>
               </v-card>
               <rawDisplayer class="col-3" :value="list1" title="List 1" />

               <rawDisplayer class="col-3" :value="list2" title="List 2" />
          </v-col>
          <v-col cols="12" :md="explorerConfig.fullView ? '5':'8'">
               <v-card class="x-form">
                    <v-list width="100%">
                         <v-subheader>New Project Schedule</v-subheader>
                         <draggable
                              class="dragArea list-group"
                              :list="list2"
                              group="toolbox"
                              @change="log"
                              handle=".x-control-handle"
                         >
                              <v-list-item
                                   two-line
                                   v-for="element in list2"
                                   :key="element.id"
                                   color="primary"
                                   class="x-control"
                              >
                                   <v-list-item-action class="x-control-handle">
                                        <v-icon class="grey--text text--darken-1">mdi-drag</v-icon>
                                   </v-list-item-action>
                                   <v-list-item-action>
                                        <v-icon>{{element.icon}}</v-icon>
                                   </v-list-item-action>
                                   <v-list-item-content>
                                        <v-list-item-title>{{ element.name }}</v-list-item-title>
                                   </v-list-item-content>
                              </v-list-item>
                         </draggable>
                    </v-list>
               </v-card>
          </v-col>
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
                    fullView: false
               },
               list1: [
                    {
                         id: 1,
                         name: "Text",
                         description: "",
                         icon: "mdi-format-text"
                    },
                    {
                         id: 2,
                         name: "Paragraph",
                         description: "",
                         icon: "mdi-format-pilcrow"
                    },
                    {
                         id: 3,
                         name: "Header",
                         description: "",
                         icon: "mdi-format-header-1"
                    },
                    {
                         id: 4,
                         name: "Decimal",
                         description: "",
                         icon: "mdi-decimal"
                    },
                    {
                         id: 5,
                         name: "Number",
                         description: "",
                         icon: "mdi-numeric-10"
                    }
               ],
               list2: [
                    {
                         id: 91,
                         name: "Header",
                         icon: "mdi-format-header-1",
                         edit: false,
                         config: false
                    },
                    {
                         id: 92,
                         name: "Text",
                         icon: "mdi-format-text",
                         edit: false,
                         config: false
                    },
                    {
                         id: 93,
                         name: "Paragraph",
                         icon: "mdi-format-pilcrow",
                         edit: false,
                         config: false
                    }
               ]
          };
     },
     methods: {
          log: function(evt) {
               window.console.log(evt);
          },
          cloneControl(item) {
               console.log(item);
               /* item.name and item.id */
               return {
                    id: idGlobal++,
                    name: `Control ${item.name}`,
                    icon: item.icon,
                    edit: false,
                    config: false
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
.x-toolbox .x-control:hover {
     cursor: move;
     /* background-color: #f6f6f6; */
}
.x-form .x-control {
     /* border: 1px solid #0000001f; */
}
.x-form .x-control-handle {
     cursor: move;
}
</style>