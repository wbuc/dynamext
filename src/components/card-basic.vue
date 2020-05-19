<template>
     <v-card class="elevation-3">
          <v-card-title class="font-weight-light headline">
               <div class="responsive-text no-cursor">
                    <slot name="title">Sample card title</slot>
               </div>
          </v-card-title>

          <v-card-subtitle>
               <div class="responsive-text no-cursor font-weight-light">
                    <slot name="detail"></slot>
               </div>
          </v-card-subtitle>

          <v-card-actions>
               <slot name="actions">
                    <v-btn color="primary" text>Show detail</v-btn>
               </slot>
          </v-card-actions>
     </v-card>
</template>

<script>
export default {
     name: "Card.Basic",
     data: () => ({
          hover: 3
     })
};
</script>

<style scoped>
.responsive-text {
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
}
.no-cursor {
     cursor: default;
}
</style>