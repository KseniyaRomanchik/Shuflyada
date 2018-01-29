const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const autoprefixer = require('autoprefixer');
const path = require('path');

const PATHS = {
  root: path.resolve(__dirname, '../'),
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  public: path.resolve(__dirname, '../public')
};

const PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: PRODUCTION ? {
    main: path.resolve(PATHS.src, 'index.jsx'),
    polyfills: ['babel-polyfill'],
    react: ['react', 'react-dom', 'react-redux', 'react-router', 'react-router-dom', 'react-router-redux', 'redux', 'redux-modules', 'redux-thunk'],
    moment: ['moment']
  } : [
    'babel-polyfill',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    path.resolve(PATHS.src, 'index.jsx'),
  ],

  output: {
    publicPath: '/',
    chunkFilename: '[name]-chunk.js',
    path: PATHS.dist,
    filename: '[name].[hash].js'
  },
  context: PATHS.src,
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: '8080',
    // host: '127.0.0.0',
    contentBase: path.resolve(__dirname, PATHS.public),
    publicPath: '/',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [PATHS.src],
        use: 'babel-loader',
      },
      {
        test: /\.(less|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'less-loader',
            options: {
              outputStyle: 'expanded'
            }
          }].concat(PRODUCTION ? [{
            loader: 'postcss-loader',
            options: {
              plugins: []
            }
          }] : [])
        })
      },
      {
        test: /\.(png|gif|jpg|ico|svg)$/,
        include: [PATHS.public],
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.(woff|eot|ttf)$/,
        include: [PATHS.public],
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      app: PATHS.src,
      actions: path.resolve(PATHS.src, 'actions'),
      public: path.resolve(PATHS.src, 'public'),
      components: path.resolve(PATHS.src, 'components'),
      elements: path.resolve(PATHS.src, 'elements'),
      reducers: path.resolve(PATHS.src, 'reducers'),
      services: path.resolve(PATHS.src, 'services'),
      constants: path.join(PATHS.src, 'constants')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Shuflyada',
      template: path.resolve(PATHS.public, 'index.html'),
    })
  ].concat(PRODUCTION ? [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /en-gb|ru/
    ),
    new BundleAnalyzerPlugin()
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.ProgressPlugin((percentage, msg) => {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`${(percentage * 100).toFixed(2)}% ${msg}`);
    })
  ]),
  performance: {
    hints: false
  },
};

