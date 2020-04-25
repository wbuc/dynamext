<template>
     <v-container class="px-12 my-5">
          <v-row>
               <v-col>
                    <page-header>Design Elements</page-header>
               </v-col>
          </v-row>
          <v-row>
               <v-col>
                    <v-card flat class="pa-5">
                         <div>
                              <v-expansion-panels class="elevation-5">
                                   <v-expansion-panel>
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Grid System</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                             <v-container class="my-5">
                                                  <v-layout row wrap>
                                                       <v-flex xs12 md6>
                                                            <v-btn
                                                                 block
                                                                 outlined
                                                                 color="error"
                                                            >Button 1</v-btn>
                                                       </v-flex>
                                                       <v-flex xs12 md6>
                                                            <v-btn
                                                                 block
                                                                 outlined
                                                                 color="primary"
                                                            >Button 2</v-btn>
                                                       </v-flex>
                                                       <v-flex xs12 md6>
                                                            <v-btn
                                                                 block
                                                                 outlined
                                                                 color="success"
                                                            >Button 3</v-btn>
                                                       </v-flex>
                                                       <v-flex xs4 md2>
                                                            <v-btn
                                                                 block
                                                                 outlined
                                                                 color="deep-orange"
                                                            >Button 4</v-btn>
                                                       </v-flex>
                                                       <v-flex xs4 md2>
                                                            <v-btn
                                                                 block
                                                                 outlined
                                                                 color="deep-orange"
                                                            >Button 5</v-btn>
                                                       </v-flex>
                                                       <v-flex xs4 md2>
                                                            <v-btn
                                                                 block
                                                                 outlined
                                                                 color="deep-orange"
                                                            >Button 6</v-btn>
                                                       </v-flex>
                                                  </v-layout>

                                                  <v-layout row wrap justify-center>
                                                       <v-flex xs4 md3>
                                                            <v-btn
                                                                 outlined
                                                                 block
                                                                 color="deep-purple"
                                                            >Justify Center</v-btn>
                                                       </v-flex>
                                                       <v-flex xs4 md3>
                                                            <v-btn
                                                                 outlined
                                                                 block
                                                                 color="deep-purple"
                                                            >Justify Center</v-btn>
                                                       </v-flex>
                                                  </v-layout>
                                                  <v-layout row wrap justify-space-around>
                                                       <v-flex xs4 md3>
                                                            <v-btn
                                                                 outlined
                                                                 block
                                                                 color="light-blue"
                                                            >Justify Space Around</v-btn>
                                                       </v-flex>
                                                       <v-flex xs4 md3>
                                                            <v-btn
                                                                 outlined
                                                                 block
                                                                 color="light-blue"
                                                            >Justify Space Around</v-btn>
                                                       </v-flex>
                                                  </v-layout>
                                                  <v-layout row wrap justify-end>
                                                       <v-flex xs4 md3>
                                                            <v-btn
                                                                 outlined
                                                                 block
                                                                 color="green"
                                                            >Justify End</v-btn>
                                                       </v-flex>
                                                       <v-flex xs4 md3>
                                                            <v-btn
                                                                 outlined
                                                                 block
                                                                 color="green"
                                                            >Justify End</v-btn>
                                                       </v-flex>
                                                  </v-layout>
                                                  <v-layout row wrap justify-space-between>
                                                       <v-flex xs4 md3>
                                                            <v-btn
                                                                 outlined
                                                                 block
                                                                 color="pink"
                                                            >Justify Space Between</v-btn>
                                                       </v-flex>
                                                       <v-flex xs4 md3>
                                                            <v-btn
                                                                 outlined
                                                                 block
                                                                 color="pink"
                                                            >Justify Space Between</v-btn>
                                                       </v-flex>
                                                  </v-layout>
                                                  <!-- <v-card class="grey lighten-5 pa-5">content</v-card> -->
                                             </v-container>
                                        </v-expansion-panel-content>
                                   </v-expansion-panel>

                                   <v-expansion-panel class="hidden-xs-only">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Buttons</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                             <div class="pt-3">
                                                  <v-btn class="blue white--text darken-2">Standard!</v-btn>

                                                  <v-btn
                                                       depressed
                                                       class="blue white--text font-weight-light mx-10"
                                                  >Depressed!</v-btn>
                                                  <v-btn
                                                       tile
                                                       class="blue darken-3 white--text"
                                                       elevation="5"
                                                  >Tile Button!</v-btn>
                                                  <v-btn text class="mx-4" color="blue">Flat Button</v-btn>
                                                  <v-btn tile class="blue white--text mx-4">
                                                       <v-icon small left>email</v-icon>
                                                       <span>Email Me</span>
                                                  </v-btn>
                                                  <v-btn text color="red" class="mx-4">
                                                       <v-icon left>fingerprint</v-icon>
                                                       <span>login</span>
                                                  </v-btn>
                                                  <v-btn
                                                       dark
                                                       fab
                                                       color="purple lighten-2"
                                                       elevation="10"
                                                       class="mx-4"
                                                  >
                                                       <v-icon>favorite</v-icon>
                                                  </v-btn>
                                             </div>
                                        </v-expansion-panel-content>
                                   </v-expansion-panel>

                                   <v-expansion-panel class="hidden-sm-and-down">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Text Styles</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                             <div class="pt-3">
                                                  <p
                                                       class="green white--text"
                                                  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium distinctio error dignissimos aspernatur necessitatibus, animi, placeat quas quod atque odio iure iusto minus fuga tempore eos! Illum a dolorum exercitationem.</p>
                                                  <p
                                                       class="pink lighten-4 red--text text--darken-4"
                                                  >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem pariatur similique tempora in minus perferendis sequi, esse quaerat unde, velit impedit molestiae eligendi laboriosam dicta. Nesciunt iusto commodi itaque voluptatem.</p>
                                                  <h1
                                                       class="display-4 font-weight-thin"
                                                  >Massive Display</h1>
                                                  <h4 class="display-1">Smaller Display</h4>
                                                  <p
                                                       class="headline font-weight-light"
                                                  >This is a headlnine</p>
                                                  <p class="subheading">This is a subheading</p>
                                                  <p
                                                       class="caption font-weight-bold"
                                                  >This is a caption</p>
                                             </div>
                                        </v-expansion-panel-content>
                                   </v-expansion-panel>

                                   <v-expansion-panel class="hidden-xs-only">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Headers</v-expansion-panel-header>
                                        <v-expansion-panel-content class="pt-2">
                                             <v-card class="teal white--text pa-5 mb-5">
                                                  <h1 class="display-1 font-weight-light">Example 1</h1>
                                             </v-card>
                                             <div class="mb-3">
                                                  <h1
                                                       class="display-1 grey--text font-weight-light"
                                                  >Example 2</h1>
                                                  <v-divider class="mt-5"></v-divider>
                                             </div>
                                        </v-expansion-panel-content>
                                   </v-expansion-panel>
                                   <v-expansion-panel class="hidden-xs-only">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Dropdowns</v-expansion-panel-header>
                                        <v-expansion-panel-content>
                                             <div>
                                                  <v-menu offset-y transition="slide-y-transition">
                                                       <template v-slot:activator="{ on }">
                                                            <v-btn
                                                                 text
                                                                 color="success"
                                                                 dark
                                                                 v-on="on"
                                                            >
                                                                 <v-icon left>system_update_alt</v-icon>
                                                                 <span>slide-y-transition</span>
                                                            </v-btn>
                                                       </template>
                                                       <v-list>
                                                            <v-list-item
                                                                 v-for="(link, index) in links"
                                                                 :key="index"
                                                                 router
                                                                 :to="link.route"
                                                            >
                                                                 <v-list-item-title>{{ link.text }}</v-list-item-title>
                                                            </v-list-item>
                                                       </v-list>
                                                  </v-menu>
                                                  <v-menu offset-y transition="fade-transition">
                                                       <template v-slot:activator="{ on }">
                                                            <v-btn
                                                                 text
                                                                 color="primary"
                                                                 dark
                                                                 v-on="on"
                                                            >
                                                                 <v-icon left>expand_more</v-icon>
                                                                 <span>fade-transition</span>
                                                            </v-btn>
                                                       </template>
                                                       <v-list>
                                                            <v-list-item
                                                                 v-for="(link, index) in links"
                                                                 :key="index"
                                                                 router
                                                                 :to="link.route"
                                                            >
                                                                 <v-list-item-title>{{ link.text }}</v-list-item-title>
                                                            </v-list-item>
                                                       </v-list>
                                                  </v-menu>
                                                  <v-menu offset-y transition="scroll-x-transition">
                                                       <template v-slot:activator="{ on }">
                                                            <v-btn
                                                                 text
                                                                 color="warning"
                                                                 dark
                                                                 v-on="on"
                                                            >
                                                                 <v-icon left>trending_flat</v-icon>
                                                                 <span>scroll-x-transition</span>
                                                            </v-btn>
                                                       </template>
                                                       <v-list>
                                                            <v-list-item
                                                                 v-for="(link, index) in links"
                                                                 :key="index"
                                                                 router
                                                                 :to="link.route"
                                                            >
                                                                 <v-list-item-title>{{ link.text }}</v-list-item-title>
                                                            </v-list-item>
                                                       </v-list>
                                                  </v-menu>
                                             </div>
                                        </v-expansion-panel-content>
                                   </v-expansion-panel>
                                   <v-expansion-panel class="hidden-xs-only">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Loaders</v-expansion-panel-header>
                                        <v-expansion-panel-content class="pt-2">
                                             <v-btn
                                                  color="error white--text"
                                                  :loading="loading1"
                                                  class="elevation-10"
                                                  width="100"
                                                  @click="buttonLoad1"
                                             >Loader 1</v-btn>
                                             <v-btn
                                                  color="indigo white--text"
                                                  :loading="loading2"
                                                  text
                                                  width="100"
                                                  class="mx-5"
                                                  @click="buttonLoad2"
                                             >Loader 2</v-btn>
                                             <v-btn
                                                  color="cyan white--text"
                                                  :loading="loading3"
                                                  tile
                                                  width="100"
                                                  @click="buttonLoad3"
                                             >Loader 3</v-btn>
                                             <v-btn
                                                  :loading="loading4"
                                                  color="blue-grey"
                                                  class="ma-5 white--text"
                                                  fab
                                                  text
                                                  large
                                                  @click="buttonLoad4"
                                             >
                                                  <v-icon dark>mdi-cloud-upload</v-icon>
                                             </v-btn>
                                        </v-expansion-panel-content>
                                   </v-expansion-panel>
                                   <v-expansion-panel class="hidden-xs-only">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Snackbars</v-expansion-panel-header>
                                        <v-expansion-panel-content class="pt-2"></v-expansion-panel-content>
                                   </v-expansion-panel>
                                   <v-expansion-panel class="hidden-xs-only">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Modals</v-expansion-panel-header>
                                        <v-expansion-panel-content class="pt-2"></v-expansion-panel-content>
                                   </v-expansion-panel>
                                   <v-expansion-panel class="hidden-xs-only">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Lists</v-expansion-panel-header>
                                        <v-expansion-panel-content class="pt-2">
                                             <v-row>
                                                  <v-col col="6">
                                                       <div
                                                            class="title font-weight-light accent--text mb-5"
                                                       >Multi Select List</div>
                                                       <v-list-item-group
                                                            v-model="selectedItems"
                                                            multiple
                                                            active-class="secondary--text"
                                                       >
                                                            <template
                                                                 v-for="(item, index) in items"
                                                            >
                                                                 <v-list-item :key="item.title">
                                                                      <template
                                                                           v-slot:default="{ active }"
                                                                      >
                                                                           <v-list-item-content>
                                                                                <v-list-item-title
                                                                                     v-text="item.title"
                                                                                ></v-list-item-title>
                                                                                <v-list-item-subtitle
                                                                                     class="text--primary"
                                                                                     v-text="item.headline"
                                                                                ></v-list-item-subtitle>
                                                                                <v-list-item-subtitle
                                                                                     v-text="item.subtitle"
                                                                                ></v-list-item-subtitle>
                                                                           </v-list-item-content>

                                                                           <v-list-item-action>
                                                                                <v-list-item-action-text
                                                                                     v-text="item.action"
                                                                                ></v-list-item-action-text>
                                                                                <v-icon
                                                                                     v-if="!active"
                                                                                     color="grey lighten-1"
                                                                                >star_border</v-icon>

                                                                                <v-icon
                                                                                     v-else
                                                                                     color="yellow"
                                                                                >star</v-icon>
                                                                           </v-list-item-action>
                                                                      </template>
                                                                 </v-list-item>

                                                                 <v-divider
                                                                      v-if="index + 1 < items.length"
                                                                      :key="index"
                                                                 ></v-divider>
                                                            </template>
                                                       </v-list-item-group>
                                                  </v-col>
                                                  <v-col col="6"></v-col>
                                             </v-row>
                                        </v-expansion-panel-content>
                                   </v-expansion-panel>
                                   <v-expansion-panel class="hidden-xs-only">
                                        <v-expansion-panel-header
                                             class="title font-weight-thin"
                                        >Empty Example</v-expansion-panel-header>
                                        <v-expansion-panel-content class="pt-2"></v-expansion-panel-content>
                                   </v-expansion-panel>

                                   <v-list two-line></v-list>
                              </v-expansion-panels>

                              <div class="hidden-sm-and-down"></div>
                         </div>
                    </v-card>
               </v-col>
          </v-row>
     </v-container>
</template>

<script>
export default {
     data() {
          return {
               links: [
                    { icon: "dashboard", text: "Dashboard", route: "/" },
                    { icon: "folder", text: "My Projects", route: "/projects" },
                    { icon: "people", text: "Team", route: "/teams" },
                    {
                         icon: "color_lens",
                         text: "Design Elements",
                         route: "/examples"
                    }
               ],
               loading1: false,
               loading2: false,
               loading3: false,
               loading4: false,
               selectedItems: [2],
               items: [
                    {
                         action: "15 min",
                         headline: "Brunch this weekend?",
                         title: "Ali Connors",
                         subtitle:
                              "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                    },
                    {
                         action: "2 hr",
                         headline: "Summer BBQ",
                         title: "me, Scrott, Jennifer",
                         subtitle:
                              "Wish I could come, but I'm out of town this weekend."
                    },
                    {
                         action: "6 hr",
                         headline: "Oui oui",
                         title: "Sandra Adams",
                         subtitle:
                              "Do you have Paris recommendations? Have you ever been?"
                    },
                    {
                         action: "12 hr",
                         headline: "Birthday gift",
                         title: "Trevor Hansen",
                         subtitle:
                              "Have any ideas about what we should get Heidi for her birthday?"
                    },
                    {
                         action: "18hr",
                         headline: "Recipe to try",
                         title: "Britta Holt",
                         subtitle:
                              "We should eat this: Grate, Squash, Corn, and tomatillo Tacos."
                    }
               ]
          };
     },
     methods: {
          buttonLoad1() {
               this.loading1 = true;
               setTimeout(() => {
                    this.loading1 = false;
               }, 6000);
          },
          buttonLoad2() {
               this.loading2 = true;
               setTimeout(() => {
                    this.loading2 = false;
               }, 6000);
          },
          buttonLoad3() {
               this.loading3 = true;
               setTimeout(() => {
                    this.loading3 = false;
               }, 6000);
          },
          buttonLoad4() {
               this.loading4 = true;
               setTimeout(() => {
                    this.loading4 = false;
               }, 6000);
          }
     }
};
</script>

<style>
</style>