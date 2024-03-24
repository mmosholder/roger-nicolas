// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@/assets/css/font.css', '@/assets/css/main.css'],
  modules: [
    [
      '@storyblok/nuxt', {
        accessToken: 'njBs6TxzZwAf8zCcxswJkAtt',
        apiOptions: {
          region: "us",
        }
      }
    ],
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
