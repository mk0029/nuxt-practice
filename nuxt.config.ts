// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  devtools: { enabled: true },
  css: ['~/public/assets/css/Style.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  swiper: {
    // Swiper options (you can customize these)
    // For example:
    // prefix: 'Swiper', // Change the prefix if needed
    // styleLang: 'css', // Use 'css' or 'scss' for styles
    // modules: ['navigation', 'pagination'], // Import specific modules
  },
})
