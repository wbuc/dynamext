module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      sass: {
        prependData: `
        @import "@/sass/variables.sass"
        `
      }
    }
  }
}