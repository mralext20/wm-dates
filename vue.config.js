const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  pwa: {
    workboxOptions: {
      skipWaiting: true
    },
    name: "Pickable Dates",
    themeColor: "#00bcd4",
    shortName: "Pickable Dates",
    display: "standalone",
    start_url: "",
  }
})
