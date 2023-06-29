import vuetify from "vite-plugin-vuetify";
import pkgJson from "./package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", type: "image/svg+xml", href: "/nuxt.svg" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: pkgJson.description },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
      ],
    },
  },
  modules: [
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@vite-pwa/nuxt",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        if (!config.plugins) config.plugins = [];
        config.plugins.push(vuetify());
      });
    },
  ],
  devtools: { enabled: process.env.NODE_ENV === "development" },
  css: ["~/assets/css/main.scss", "vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    devProxy: {
      "/api/strapi": {
        target: `${process.env.STRAPI_URL}/api`,
        changeOrigin: true,
      },
    },
  },
});
