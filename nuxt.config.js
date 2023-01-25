export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Fix Netlify's routing issue with Nuxtc
  generate: {
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Are you Spent? | Foothills Church',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'og-type',
        property: 'og:type',
        content: 'Spent: Living Content in a Spent World',
      }, // this is what shows when you post the site
      {
        hid: 'og-desc',
        property: 'og:description',
        content: 'Page Description Im reasonably sure.',
      },
      { hid: 'og-image', property: 'og:image', content: '/images/spent.jpg' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  purgeCSS: {
    whitelistPatterns: [/svg.*/, /fa.*/],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '~/assets/sass/gradients.scss',
    '~/assets/sass/navbar.scss',
    '~/assets/sass/background.scss',
    '~/assets/sass/fonts.scss',
    '~/assets/sass/form.scss',
    '~/assets/sass/extend.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/directives.js', '~/plugins/fontawesome.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // Simple usage
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      'Nerko+One': true,
      Montserrat: [400, 700, 900],
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
