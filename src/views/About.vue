<template>
     <v-container class="my-5">
          <v-row>
               <v-col>
                    <page-header>About</page-header>
               </v-col>
          </v-row>
          <v-row>
               <v-col>
                    <temp-personal></temp-personal>
               </v-col>
          </v-row>
     </v-container>
</template>
<script>
import tempPersonal from "@/modules/fileroom/components/Treeview.Personal";
export default {
     components: { "temp-personal": tempPersonal },
     data() {
          return {};
     }
};
</script>