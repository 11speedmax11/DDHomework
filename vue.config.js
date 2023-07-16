const path = require('path');
const { defineConfig } = require('@vue/cli-service')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = defineConfig({
  pluginOptions: {
    svgSprite: { 
      dir: './src/assets/icons',
      test: /\.svg$/, 
      loaderOptions: { 
        extract: false, 
      },
    } 
  }, 
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  chainWebpack: config => { 
    config.module 
        .rule('svg-sprite') 
        .use('svg-sprite-loader') 
        .loader('svg-sprite-loader'); 
  }
})
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
}
