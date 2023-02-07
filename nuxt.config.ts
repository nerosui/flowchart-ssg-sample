// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in", // default
    },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  css: ["@/assets/styles.scss"],
  experimental:{
    payloadExtraction:false
  },
  build: {
  postcss: {
    plugins: {
      "postcss-custom-properties": false
    },
  },
},
});
