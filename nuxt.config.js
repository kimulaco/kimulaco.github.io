import { SITE } from './assets/js/define'

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ACCESS_TOKEN,
  CONTENTFUL_PUBLIC_PRODUCT,
  PRIVATE_PAGE_USER,
  PRIVATE_PAGE_PASS
} = process.env

export default {
  env: {
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_PUBLIC_PRODUCT
  },
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
      { hid: 'og:type', property: 'og:type', content: 'website' },
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
      { hid: 'fb:app_id', property: 'fb:app_id', content: SITE.facebookId },
      { hid: 'fb:app_id', property: 'theme-color', content: SITE.color }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }]
  },
  loading: false,
  css: ['normalize.css', '@/assets/scss/base.scss'],
  // plugins: ['@/plugins/contentful'],
  devModules: ['@nuxtjs/eslint-module'],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    '@nuxtjs/google-analytics',
    'nuxt-basic-auth-module',
    'nuxt-webfontloader'
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
  basic: {
    name: PRIVATE_PAGE_USER,
    pass: PRIVATE_PAGE_PASS,
    match: /\/private/
  },
  webfontloader: {
    google: {
      families: ['Coda:400']
    }
  },
  build: {
    extend(config, ctx) {}
  }
}
