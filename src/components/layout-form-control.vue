<template>
     <div class="mb-3">
          <v-list-item-title class="title font-weight-light no-cursor">{{title}}</v-list-item-title>

          <slot></slot>
     </div>
</template>

<script>
export default {
     name: "component.layout.form.control",
     props: {
          title: { type: String, required: true }
     }
};
</script>

<style scoped>
.no-cursor {
     cursor: default;
}
</style>