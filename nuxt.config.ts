// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "light",
  },
  css: ['primeicons/primeicons.css'],

  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@primevue/nuxt-module",
  ],

  primevue: {
    importTheme: { from: '@/assets/theme.js' },
    autoImport: true,
    components: {
      prefix: '',
      exclude: ['Form', 'FormField'] // Exclude Form components causing issues
    },
    options: {
      ripple: true,
      inputVariant: "filled"
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    exposeConfig: {
      level: 2,
    }
  },

  vite: {
    build: {
      rollupOptions: {
        external: ['@primevue/forms/form']
      }
    }
  },
});
