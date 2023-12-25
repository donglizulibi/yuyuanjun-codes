const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  // webpack4 到 webpack5 之后的改变，需要自己配置node-polyfill-webpack-plugin
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()]
  },

  // webpack devServer提供了代理功能
  devServer: {
    proxy: {
      api: {
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true
      }
    }
  },
  chainWebpack(config) {
    config.module.rule('svg').exclude.add(resolve('src/icons')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
}
