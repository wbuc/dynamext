<template>
     <v-breadcrumbs :items="links">
          <v-breadcrumbs-item slot="item" slot-scope="{ item }" :to="item.to" exact>{{item.text}}</v-breadcrumbs-item>
          <template v-slot:divider>
               <v-icon>mdi-chevron-right</v-icon>
          </template>
     </v-breadcrumbs>
</template>

<script>
export default {
     props: ["links"]
};
</script>

<style>
</style>