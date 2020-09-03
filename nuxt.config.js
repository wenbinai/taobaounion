module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '阳光沙滩-领卷联盟商城',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '阳光沙滩领卷联盟是一个领取淘宝优惠卷平台,买的越多省的越多,不买立省百分百!' },
      { hid: 'keywords', name: 'keywords', content: '领卷, 优惠, 淘宝' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    'element-ui/lib/theme-chalk/index.css',
  ],
  plugins: [
    {
      src: '~plugins/elementui',
      ssr: true
    }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

