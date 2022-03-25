// devtool cheap-module-source-map is the recommended tool for dev env for webpack (recommendation from create-react-app)
// devtool property will generate a source map for the entire project code
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
// open flag not be needed in npm scripts, can open it here for dev environment
module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    // open: true,
    port: 4444,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('dev-name'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
