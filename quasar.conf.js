// quasar.conf.js

module.exports = function (ctx) {
    return {
      // Boot files are part of "main.js"
      // https://quasar.dev/quasar-cli/boot-files
      boot: [
        'i18n',
        'axios'
      ],
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#css
      css: [
        'app.scss'
      ],
  
      // Extra configuration for Vue
      framework: {
        config: {},
  
        // Quasar plugins
        plugins: ['Notify']
      },
  
      // Build configuration
      build: {
        vueRouterMode: 'history', // available values: 'hash', 'history'
        publicPath: '/',
        extendWebpack(cfg) {
          // Additional webpack configurations if needed
        }
      },
  
      // Development server configuration
      devServer: {
        https: false,
        port: 8080,
        open: true // opens browser window automatically
      },
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#property-supportTS
      supportTS: false,
  
      // PWA configuration
      pwa: {
        workboxPluginMode: 'GenerateSW',
        workboxOptions: {},
        manifest: {
          name: 'Quasar App',
          short_name: 'Quasar App',
          description: 'A Quasar Framework app',
          display: 'standalone',
          orientation: 'portrait',
          background_color: '#ffffff',
          theme_color: '#027be3',
          icons: [
            {
              src: 'icons/icon-128x128.png',
              sizes: '128x128',
              type: 'image/png'
            },
            {
              src: 'icons/icon-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'icons/icon-256x256.png',
              sizes: '256x256',
              type: 'image/png'
            },
            {
              src: 'icons/icon-384x384.png',
              sizes: '384x384',
              type: 'image/png'
            },
            {
              src: 'icons/icon-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            }
          ]
        }
      },
  
      // https://quasar.dev/quasar-cli/quasar-conf-js#property-framework
      framework: {
        iconSet: 'material-icons', // Quasar icon set
        lang: 'en-us', // Quasar language pack
  
        // Quasar plugins
        plugins: []
      }
    }
  }
  