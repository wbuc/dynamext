<template>
     <div>Context Finding 3</div>
</template>

<script>
export default {
     name: "ContextPanel.Finding",
     props: {
          nodeData: {
               Type: Object,
               default: () => {
                    return {
                         id: 0,
                         name: null,
                         type: null,
                         documents: {
                              count: 0,
                              children: []
                         },
                         findings: {
                              count: 0,
                              children: []
                         },
                         schedules: {
                              count: 0,
                              children: []
                         }
                    };
               }
          }
     }
};
</script>

<style>
</style>