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
  app: {
    head: {
      script: [{src: 'https://kit.fontawesome.com/870c58ce8d.js', crossorigin: 'anonymous'}],
      title: "Roger Nicolas",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:title", content: 'Roger Nicolas' },
      { property: "og:url", content: "http://rogernicolas.com/"},
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Roger Nicolas"},
      { property: "og:description", content: "Roger Nicolas is a solo acoustic guitarist from Colorado incorporating a unique blend of modern styles."},
      // { property: "og:image", content:"http://rogernicolas.com/socialshare.jpg"},
      // { property: "og:image:width", content: "1200" },
      // { property: "og:image:height", content: "630" },
      { property: "twitter:title", content: "Roger Nicolas" },
      // { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:description", content: "Roger Nicolas is a solo acoustic guitarist from Colorado incorporating a unique blend of modern styles." },
      // { property: "twitter:image", content: "http://rogernicolas.com/socialshare.jpg" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
