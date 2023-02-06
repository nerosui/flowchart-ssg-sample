// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in", // default
    },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  css: ["@/assets/primer.scss", "@/assets/styles.scss"],
});
