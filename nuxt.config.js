import { SITE } from './assets/js/define'

export default {
  mode: 'universal',
  head: {
    title: SITE.title,
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
      { property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: SITE.title },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'kimulaco profile site.'
      },
      { hid: 'og:url', property: 'og:url', content: SITE.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${SITE.url}/img/ogp.png`
      },
      { property: 'fb:app_id', content: SITE.facebookId },
      { property: 'theme-color', content: SITE.color }
    ],
    link: [
      {
        rel: 'preload',
        as: 'font',
        href: '/font/Coda.woff2',
        type: 'font/woff2',
        crossorigin: true
      },
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
    ]
  },
  loading: false,
  css: ['normalize.css', '@/assets/scss/base.scss'],
  buildModules: ['@nuxtjs/stylelint-module', '@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics'
  ],
  styleResources: {
    scss: ['@/assets/scss/_variable.scss', '@/assets/scss/_mixin.scss']
  },
  manifest: {
    name: SITE.title,
    lang: 'en',
    start_url: '/?standalone',
    theme_color: SITE.color,
    background_color: '#ffffff',
    display: 'standalone',
    icons: [
      {
        src: '/img/icon.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  },
  googleAnalytics: {
    id: 'UA-145782278-1'
  },
  build: {
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    extractCSS: true,
    extend(config, ctx) {}
  }
}
