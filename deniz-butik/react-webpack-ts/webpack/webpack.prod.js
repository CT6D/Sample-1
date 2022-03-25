const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// Can use env variable and pass in analyzer flag (set to true) when running build npm script -- to trigger bundle analyzer, otherwise it won't run
// tip: improve peformance w/ webpack code-splitting
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('prod-name'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
}
