const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    src: './client/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      //babel loaders:
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      //json loader:
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      //CSS & SCSS & SASS loaders:
      {
        test: /\.s[ac]ss$/i, //matches .scss, and .sass files (do we need to modify this for normal css??)
        use: [
          //Creates 'style' nodes from JS strings
          'style-loader',

          //Translates CSS into CommonJS (?)
          'css-loader',

          //Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './client/styles.scss' }],
    }),
  ],
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
    static: {
      publicPath: '/build',
      directory: path.resolve(__dirname, 'build'),
    },
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
