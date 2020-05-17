<template>
     <v-card class="mx-auto elevation-3">
          <x-icon-list @itemClicked="openTask"></x-icon-list>
          <template v-if="task">
               <x-dialog :show="dialogConfig.open" :actions="dialogConfig.actions">
                    <template v-slot:title>{{task.description}}</template>
                    <template>{{task.name}}</template>
               </x-dialog>
          </template>
     </v-card>
</template>

<script>
export default {
     name: "Component.Tasklist",
     data() {
          return {
               dialogConfig: {
                    open: false,
                    actions: [
                         {
                              text: "Close",
                              color: "error",
                              action: () => {
                                   this.dialogConfig.open = false;
                              }
                         }
                    ]
               },
               task: null
          };
     },
     methods: {
          openTask(task) {
               console.log("Task clicked from the task list! ", task);
               this.task = task;
               this.dialogConfig.open = true;
          }
     }
};
</script>

<style>
</style>