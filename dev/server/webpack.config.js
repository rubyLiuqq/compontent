const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
const fileList = glob.sync('*/JsAPI/example/index.js', {
  cwd: path.join(__dirname, '../../')
});
var entry = {};

fileList.forEach((val) => {
  const pathObj = path.parse(val);
  entry[path.join(pathObj.dir, pathObj.name)] = [
    'es5-shim',
    'webpack/hot/dev-server?hot=true',
    'webpack-hot-middleware/client?reload=true&overlay=false',
    path.join(__dirname, '../../', val)
  ]
});

module.exports = {
  entry: entry,
  devtool: "source-map",
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: '/'
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: "eslint",
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.html$/,
      loader: "html?attrs[]=img:data-src&attrs[]=img:src&interpolate"
    }, {
      test: /\.(png|jpe?g|gif|svg)$/i,
      loader: 'url?limit=5000&name=img/[name]-[md5:hash:10].[ext]'
    }, {
      test: /\.(svg|woff2?|eot|ttf)[\?]?[\S]*$/,
      loader: 'file?name=font/[name]-[md5:hash:10].[ext]'
    }, {
      test: /\.json$/,
      loader: 'json'
    }]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
    noInfo: false,
    inline: true,
    reload: true,
    publicPath: '/',
    watchOptions: {
      aggregateTimeout: 300,
      poll: true
    },
    stats: {
      cached: false,
      colors: true
    }
  }
};
