<template>
     <div :class="{'mb-5': !dense}">
          <div class="title grey--text no-cursor d-flex">
               <div class>{{title}}</div>
               <div class="ml-auto">
                    <slot name="actions"></slot>
               </div>
          </div>
          <v-card flat :class="{'elevation-3': !flat, 'mt-2': !dense}">
               <div>
                    <v-card-text :class="{'py-0': dense}">
                         <slot></slot>
                    </v-card-text>
               </div>
          </v-card>
     </div>
</template>

<script>
export default {
     name: "component.layout.form.section",
     props: {
          title: { type: String, required: false },
          flat: { type: Boolean, default: false },
          dense: { type: Boolean, default: false }
     }
};
</script>

<style scoped>
.no-cursor {
     cursor: default;
}
</style>