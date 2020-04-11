<template>
     <v-container class="my-5">
          <v-row>
               <v-col>
                    <page-header>About</page-header>
               </v-col>
          </v-row>
          <v-row>
               <v-col>
                    <div class="secondary pa-3 title font-weight-light">Text Alignment</div>
                    <p class="text-left">
                         Left aligned text on all viewport sizes.
                         <span
                              class="text--secondary ml-3"
                         >text-left</span>
                    </p>
                    <p class="text-center">
                         Center aligned text on all viewport sizes.
                         <span
                              class="text--secondary ml-3"
                         >text-center</span>
                    </p>
                    <p class="text-right">
                         Right aligned text on all viewport sizes.
                         <span
                              class="text--secondary ml-3"
                         >text-right</span>
                    </p>
                    <div class="secondary pa-3 title font-weight-light">Font Sizes</div>
                    <p class="headline">
                         Regular 24sp
                         <span class="text--secondary ml-3">headline</span>
                    </p>
                    <p class="title">
                         Medium 20sp
                         <span class="text--secondary ml-3">title</span>
                    </p>
                    <p class="subtitle-1">
                         Regular 16sp
                         <span class="text--secondary ml-3">subtitle-1</span>
                    </p>
                    <p class="subtitle-2">
                         Medium 14sp
                         <span class="text--secondary ml-3">subtitle-2</span>
                    </p>
                    <p class="body-1">
                         Regular 16sp
                         <span class="text--secondary ml-3">body-1</span>
                    </p>
                    <p class="body-2">
                         Regular 14sp
                         <span class="text--secondary ml-3">body-2</span>
                    </p>
                    <p class="caption">
                         Regular 12sp
                         <span class="text--secondary ml-3">caption</span>
                    </p>
                    <p class="overline">
                         REGULAR 10SP
                         <span class="text--secondary ml-3">overline</span>
                    </p>
               </v-col>
               <v-col>
                    <div class="secondary pa-3 title font-weight-light">Font Weights</div>
                    <p class="font-weight-black">
                         Black text.
                         <span class="text--secondary ml-3">font-weight-black</span>
                    </p>
                    <p class="font-weight-bold">
                         Bold text.
                         <span class="text--secondary ml-3">font-weight-bold</span>
                    </p>
                    <p class="font-weight-medium">
                         Medium weight text.
                         <span class="text--secondary ml-3">font-weight-medium</span>
                    </p>
                    <p class="font-weight-regular">
                         Normal weight text.
                         <span class="text--secondary ml-3">font-weight-regular</span>
                    </p>
                    <p class="font-weight-light">
                         Light weight text.
                         <span class="text--secondary ml-3">font-weight-light</span>
                    </p>
                    <p class="font-weight-thin">
                         Thin weight text.
                         <span class="text--secondary ml-3">font-weight-thin</span>
                    </p>
                    <p class="font-italic">
                         Italic text.
                         <span class="text--secondary ml-3">font-italic</span>
                    </p>
                    <div class="secondary pa-3 title font-weight-light">Text Opacity</div>
                    <p class="text--secondary">
                         Medium-emphasis text and hint text have opacities of 60%.
                         <span
                              class="text--secondary ml-3"
                         >text--secondary</span>
                    </p>
                    <p class="text--disabled">
                         Disabled text has an opacity of 37%.
                         <span
                              class="text--secondary ml-3"
                         >text--disabled</span>
                    </p>
                    <div class="secondary pa-3 title font-weight-light">Visibility</div>
                    <p class>
                         Hidden content!
                         <span class="text--secondary ml-3">d-none</span>
                    </p>
               </v-col>
          </v-row>
     </v-container>
</template>
<script>
export default {
     data() {
          return {};
     }
};
</script>