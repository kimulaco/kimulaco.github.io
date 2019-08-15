export default {
  mode: 'universal',
  head: {
    title: 'kimulaco.me',
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'kimulaco profile site.'
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'kimulaco.me' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'kimulaco profile site.'
      },
      { hid: 'og:url', property: 'og:url', content: 'http://kimulaco.me' },
      { hid: 'og:image', property: 'og:image', content: '/img/ogp.png' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }]
  },
  loading: false,
  css: ['normalize.css', '@/assets/scss/base.scss'],
  plugins: [],
  devModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/google-analytics'
  ],
  styleResources: {
    scss: ['@/assets/scss/_variable.scss', '@/assets/scss/_mixin.scss']
  },
  webfontloader: {
    google: {
      families: ['Coda:400']
    }
  },
  googleAnalytics: {
    id: 'UA-145782278-1'
  },
  build: {
    extend(config, ctx) {}
  }
}
