const path = require('path')
const resolve = (src: string) => path.resolve(__dirname, src)
// import ClearDistPlugin from './plugins/clear-dist'
// import HtmlTemplatePlugin from './plugins/html-template'

// const DEVTOOL = {
//   eval: 'eval',
//   'eval-cheap-source-map': 'eval-cheap-source-map',
//   'eval-cheap-module-source-map': 'eval-cheap-module-source-map',
//   'cheap-source-map': 'cheap-source-map',
//   'cheap-module-source-map': 'cheap-module-source-map',
// }
const devtool = 'cheap-source-map'


module.exports = {
  mode: 'none',
  entry: './src/main.js',
  devtool: 'cheap-source-map',
  output: {
    filename: `bundle.${devtool}.js`,
    path: resolve('dist'),
  },
  // plugins: [
  //   new ClearDistPlugin(),
  //   new HtmlTemplatePlugin({ template: resolve('./src/index.html') }),
  // ],
  // module: {
  //   rules: [
  //     {
  //       test: /\.json.js$/,
  //       use: [
  //         {
  //           loader: resolve('./loaders/json-loader.js'),
  //           options: {
  //             isPureJson: false
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       test: /\.json$/,
  //       use: [
  //         {
  //           loader: resolve('./loaders/json-loader.js'),
  //           options: {
  //             isPureJson: true
  //           },
  //         },
  //       ],
  //     }
  //   ]
  // },
  devServer: {
    hot: true,
    // static: resolve('dist'),
  },
};