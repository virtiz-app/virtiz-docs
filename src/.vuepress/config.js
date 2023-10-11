const { description } = require('../../package.json')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Virtiz',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#7e22ce' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/assets/img/logo.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Dashboard',
        link: 'https://virtiz.com'
      }
    ],
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/'
        ]
      },
      {
        title: 'Accounts',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/accounts/source-control'
        ]
      },
      {
        title: 'Servers',   // required
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/servers/server-provider',
          '/servers/php',
          '/servers/daemons',
          '/servers/network',
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
