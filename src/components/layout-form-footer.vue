<template>
     <div class="mb-3">
          <v-card flat class="mt-2" color="transparent">
               <v-card-actions class="px-0">
                    <slot name="secondary"></slot>
                    <v-spacer></v-spacer>
                    <slot></slot>
               </v-card-actions>
          </v-card>
     </div>
</template>

<script>
export default {
     name: "component.layout.form.footer",
     props: {}
};
</script>

<style scoped>
.no-cursor {
     cursor: default;
}
</style>