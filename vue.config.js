const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  lintOnSave: false,
  devServer: {
    hot: true,
    proxy: {
      '/api': {
        target: 'http://47.100.51.224:8080',
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
      },
      '/v1': {
        target: 'http://47.100.51.224',
        changeOrigin: true,
        // pathRewrite: { '^/api': '' },
      },
    },
  }
})
