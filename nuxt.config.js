export default {
  mode: 'universal',
  head: {
    title: 'kimulaco',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'kimulaco profile site.'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: false,
  css: ['normalize.css', '@/assets/scss/base.scss'],
  plugins: [],
  devModules: ['@nuxtjs/eslint-module'],
  modules: [
    // '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['@/assets/scss/_variable.scss']
  },
  build: {
    extend(config, ctx) {}
  }
}
