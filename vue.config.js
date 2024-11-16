const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  lintOnSave: false,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://api.example.com',
  //       changeOrigin: true,
  //       pathRewrite: { '^/api': '' },
  //     },
  //   },
  // }
})
