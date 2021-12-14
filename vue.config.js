const path = require('path')
const PrerenderSPAPlugin = require("prerender-spa-plugin");

module.exports = {
  // // define port
  // devServer: {
  //   port: '3000',
  //   hot: true,
  //   disableHostCheck: true
  // },

  // https://cli.vuejs.org/guide/webpack.html
  configureWebpack: config => {
    return {
      performance: {
        hints: false,
      },
      resolve: {
        alias: {
          '@core': path.resolve(__dirname, 'src/@core'),
        },
      },
      plugins: [
        // https://github.com/chrisvfritz/prerender-spa-plugin
        new PrerenderSPAPlugin({
          staticDir: config.output.path,
          routes: ['/'],
          renderAfterDocumentEvent: 'prerender-event',
          renderer: new PrerenderSPAPlugin.PuppeteerRenderer({}),
        })
      ]
    };
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
  },
};
