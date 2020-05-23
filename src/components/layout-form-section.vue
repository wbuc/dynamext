<template>
     <div class="mb-5">
          <div class="title grey--text no-cursor">
               <span>{{title}}</span>
          </div>
          <v-card flat class="elevation-3 mt-2">
               <div>
                    <v-card-text>
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
          title: { type: String, required: true }
     }
};
</script>

<style scoped>
.no-cursor {
     cursor: default;
}
</style>