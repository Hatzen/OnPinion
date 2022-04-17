/* eslint-disable */ // TODO: Make it proper..

// const dev = process.env.NODE_ENV === 'dev';
// const prod = !dev; // Be more restrictive for dev environment (as firebase buildscripts might not set properly.)

const prod = process.env.NODE_ENV === 'production';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: __dirname + '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json'],
          // Avoid relative imports like in tsconfig.
          // https://www.npmjs.com/package/tsconfig-paths-webpack-plugin
          plugins: [new TsconfigPathsPlugin({})],
        },
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  // Catch-All: https://stackoverflow.com/a/34125010/8524651
  devServer: {
    port: 3000,
    // https://github.com/webpack/webpack-dev-server/issues/216
    historyApiFallback: { index: '/' },
    // https://stackoverflow.com/questions/69901768/webpack-dev-server-enables-features-then-disconnects-twice-when-using-host-op
    allowedHosts: ['all']
  },
  // Only create source maps in dev environment
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    // Copy data.
    // https://stackoverflow.com/a/33374807/8524651
    new CopyWebpackPlugin({
      patterns: [
          { from: 'static' }
      ]
  })
  ],
};