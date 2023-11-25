import HtmlWebPackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import path from 'path';
// https://www.npmjs.com/package/concurrently // What concurrently does


export default {
  mode: 'development',
  //entry set to WHATEVER the file is that holds all of the front-end logic (index.js is common)
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, //this will delete our dist/bundle.js after we stop running.
  },
  module: {
    //each rule will scan the dist folder
    //and evaluate the contents of a given module based on
    //the 'test' key, which is usually a regex expression
    //eg, need rules for js/jsx, json, 
    //TODO: add rule for css, scss, sass
    //TODO: add rules for any other filetypes we don't have yet
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                ['@babel/preset-react', { targets: 'defaults' }]
              ]
            }
          }  
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
      {//assets module: deals with static files}
      },
      {//CSS & SCSS & SASS file rule
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './client/index.html',
      filename: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: './client/styles.css' }],
    }),
  ],

  //configure the webpack development environment server '
  devServer: {
    proxy: {
      '/watch-list-data': 'http://localhost:3000'
    },
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
  },
};

