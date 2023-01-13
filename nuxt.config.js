export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/main.css',
    '~/assets/style/chat.css',
    '~/assets/style/dots.css',
    '~/assets/style/filter.css',
    '~/assets/style/font.css',
    '~/assets/style/form.css',
    '~/assets/style/navigation_footer.css',
    '~/assets/style/order.css',
    '~/assets/style/profile.css',
    '~/assets/style/table.css',
    '~/assets/style/login_register.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
    // 'bootstrap-vue/nuxt',
    // 'bootstrap-vue/nuxt', {
    //   icons: true
    // }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_ADDRESS
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_ADDRESS
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_ADDRESS
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth: {
    redirect: {
      login: '/',
      callback: false,
      home: false
    },
    strategies: {
      local: {
        token: {
          required: true,
          type: 'Bearer',
          property: 'token'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: process.env.API_ADDRESS + '/login', method: 'POST' },
          logout: { url: process.env.API_ADDRESS + '/logout', method: 'GET' },
          user: { url: process.env.API_ADDRESS + '/user', method: 'GET', propertyName: false }
        }
      }
    }
  }
}
