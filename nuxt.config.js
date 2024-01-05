const pkg = require('./package')

const glob = require('glob')
const path = require('path')

var getDynamicRoutes = function() {
  return [].concat(
    glob
      .sync('*.md', { cwd: 'posts/' })
      .map((filepath) => `/software/${path.basename(filepath, '.md')}`),
    glob
      .sync('*.md', { cwd: 'blog/' })
      .map((filepath) => `/blog/${path.basename(filepath, '.md')}`)
  )
}

var dynamicPaths = getDynamicRoutes()

module.exports = {
  generate: {
    routes: dynamicPaths,
  },
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'X-UA-Compatible', content: 'IE=edge' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.5, user-scalable=1, shrink-to-fit=no',
      },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'author', content: 'Arielle Cerini' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },


  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/style.css',
  ],

  // server: {
  //   port: 8000, // default: 3000
  //   host: '172.104.217.73' // default: localhost when posting to server should read 172.104.217.73
  // },

  ssr: true,
  target: 'server',
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/googleAnalytics.js', mode: 'client' },
    { src: '~/plugins/stickyHeader.js', mode: 'client' },



  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
      ['cookie-universal-nuxt', { SameSite: 'Strict' }],
  
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

styleResources: {
    scss: [
      '~/assets/sass/main.scss'
    ],
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     /*
     ** You can extend webpack config here
     */
     extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: [
          path.resolve(__dirname, 'posts'),
          path.resolve(__dirname, 'blog'),
        ],
        loader: 'frontmatter-markdown-loader',

      }),
      config.node = {
           fs: 'empty'
       }
    },
  }
}
