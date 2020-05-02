<template>
     <v-card class="mx-auto elevation-3">
          <x-basic-list @itemClicked="openTask"></x-basic-list>
     </v-card>
</template>

<script>
import basicList from "@/components/lists/BasicList";

export default {
     name: "Component.Tasklist",
     components: { "x-basic-list": basicList },
     methods: {
          openTask(task) {
               console.log("Task clicked from the task list! ", task);
          }
     }
};
</script>

<style>
</style>