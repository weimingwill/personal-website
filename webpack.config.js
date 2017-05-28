var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var vueLoaderConfig = require('./build/vue-loader.conf.js');
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'vuex-store': path.resolve(__dirname, 'src/store'),
      assets: path.resolve(__dirname, 'src/assets'),
      components: path.resolve(__dirname, 'src/components'),
      views: path.resolve(__dirname, 'src/views')
    }
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {loader: 'stylus-loader'},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        use: [
          {loader: 'vue-hot-reload-loader'},
          {
            loader: 'buble-loader',
            options: {
              objectAssign: 'Object.assign'
            }
          }
        ],
        exclude: /node_modules/,
        include: resolve('src')
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin
  ]
};
