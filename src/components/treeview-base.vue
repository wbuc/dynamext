<template>
     <v-card flat style="background-color: #ff000000">
          <v-treeview
               :items="items"
               v-model="checkedNodes"
               :search="config.search"
               :return-object="config.returnObject"
               :open-on-click="config.openOnClick"
               :selectable="config.selectable"
               :selection-type="config.selectionType"
               :transition="config.transition"
               :hoverable="config.hoverable"
               @update:active="selectNode"
               item-key="id"
               activatable
               color="grey"
               selected-color="grey lighten-3"
               dense
          >
               <template v-slot:prepend="{ item, open }">
                    <v-icon
                         v-if="item.type == 'folder'"
                         :color="nodeTypes[item.type].open.color"
                    >{{ open ? nodeTypes[item.type].open.name: nodeTypes[item.type].closed.name }}</v-icon>
                    <v-icon
                         :color="nodeTypes[item.type].color"
                         v-else
                    >{{ nodeTypes[item.type].name }}</v-icon>
               </template>
               <template v-slot:label="{ item }">
                    <div class="x-branch">
                         <span class>{{item.name}}</span>
                    </div>
               </template>
               <template v-slot:append="{ item }">
                    <v-menu
                         v-if="nodeTypes[item.type].actions"
                         offset-y
                         transition="slide-y-transition"
                    >
                         <template v-slot:activator="{ item, on }">
                              <v-btn
                                   icon
                                   text
                                   dark
                                   color="grey"
                                   v-on="on"
                                   class="x-branch-activator"
                              >
                                   <v-icon>more_vert</v-icon>
                                   <span></span>
                              </v-btn>
                         </template>
                         <v-list>
                              <v-list-item
                                   v-for="(dataItem, index) in nodeTypes[item.type].actions"
                                   :key="index"
                                   @click="dataItem.action(item)"
                                   active-class="secondary--text"
                                   dense
                              >
                                   <v-list-item-action>
                                        <v-icon :class="dataItem.color" small>{{dataItem.icon}}</v-icon>
                                   </v-list-item-action>
                                   <v-list-item-content>
                                        <v-list-item-title>{{dataItem.title}}</v-list-item-title>
                                   </v-list-item-content>
                              </v-list-item>
                         </v-list>
                    </v-menu>
               </template>
          </v-treeview>
     </v-card>
</template>

<script>
export default {
     props: {
          config: {
               Type: Object,
               default: () => {
                    return {
                         search: null,
                         selectable: true, // prepend node checkboxes.
                         transition: true,
                         openOnClick: false, // click anywhere on the node to expand.
                         hoverable: true,
                         toolbarHover: false,
                         returnObject: true, // retrieve the json object, or identifier.
                         selectionType: "all" //leaf or independent or all(throws error in console).
                    };
               }
          },
          nodeTypes: {
               Type: Object,
               default: () => {
                    return {
                         folder: {
                              open: {
                                   name: "mdi-folder-open",
                                   color: "info"
                              },
                              closed: { name: "mdi-folder", color: "info" },
                              actions: [
                                   {
                                        title: "Assign",
                                        icon: "mdi-account-multiple-plus",
                                        color: "purple--text text--lighten-2",
                                        action: item =>
                                             console.log("editing ", item)
                                   },
                                   {
                                        title: "Out of Scope",
                                        icon: "mdi-stop",
                                        color: "error--text",
                                        action: item =>
                                             console.log("deleting ", item)
                                   },
                                   {
                                        title: "Set Favourite",
                                        icon: "mdi-star-outline",
                                        color: "yellow--text darken-3",
                                        action: item =>
                                             console.log("favourite ", item)
                                   }
                              ]
                         },
                         doc: {
                              name: "mdi-file-document",
                              color: "warning lighten-1",
                              actions: [
                                   {
                                        title: "Edit",
                                        icon: "mdi-pencil",
                                        color: "secondary--text",
                                        action: item =>
                                             console.log("editing ", item)
                                   },
                                   {
                                        title: "Out of Scope",
                                        icon: "mdi-stop",
                                        color: "error--text",
                                        action: item =>
                                             console.log("deleting ", item)
                                   }
                              ]
                         },
                         schedule: {
                              name: "mdi-table-large",
                              color: "purple lighten-2",
                              actions: [
                                   {
                                        title: "Edit",
                                        icon: "mdi-pencil",
                                        color: "secondary--text",
                                        action: item =>
                                             console.log("editing ", item)
                                   },
                                   {
                                        title: "Delete",
                                        icon: "mdi-delete",
                                        color: "error--text",
                                        action: item =>
                                             console.log("deleting ", item)
                                   },
                                   {
                                        title: "Set Favourite",
                                        icon: "mdi-star-outline",
                                        color: "yellow--text darken-3",
                                        action: item =>
                                             console.log("editing ", item)
                                   }
                              ]
                         },
                         finding: {
                              name: "mdi-file-find",
                              color: "success",
                              actions: [
                                   {
                                        title: "Edit",
                                        icon: "mdi-pencil",
                                        color: "secondary--text",
                                        action: item =>
                                             console.log("editing ", item)
                                   },
                                   {
                                        title: "Delete",
                                        icon: "mdi-delete",
                                        color: "error--text",
                                        action: item =>
                                             console.log("deleting ", item)
                                   },
                                   {
                                        title: "Set Favourite",
                                        icon: "mdi-star-outline",
                                        color: "yellow--text darken-3",
                                        action: item =>
                                             console.log("editing ", item)
                                   }
                              ]
                         }
                    };
               }
          },
          items: {
               Type: Array, // The treeview is dependent on a root element to have where children needs to be pushed in. always have id 1 for simplicity.
               default: () => {
                    return [
                         {
                              id: 1,
                              name: "Root",
                              type: "folder",
                              children: [
                                   {
                                        id: 2,
                                        name: "Sample Document",
                                        type: "doc",
                                        children: [
                                             {
                                                  id: 3,
                                                  name: "Sample Schedule",
                                                  type: "schedule",
                                                  children: []
                                             },
                                             {
                                                  id: 4,
                                                  name: "Sample Finding",
                                                  type: "finding",
                                                  children: []
                                             }
                                        ]
                                   }
                              ]
                         }
                    ];
               }
          }
     },
     data() {
          return {
               checkedNodes: []
          };
     },
     watch: {
          // Read more on watch: https://michaelnthiessen.com/how-to-watch-nested-data-vue/
          checkedNodes: {
               handler: "checkedNodesChanged"
          }
     },
     methods: {
          selectNode(node) {
               if (node.length) {
                    this.$emit("nodeSelected", node[0]);
               }
          },
          checkedNodesChanged() {
               this.$emit("nodesChecked", this.checkedNodes);
          }
     },
     Created() {},
     Mounted() {}
};
</script>

<style>
</style>