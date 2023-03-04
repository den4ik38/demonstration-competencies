import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import { BuildOptions } from './types/config'

export function buildPlugins({paths}:BuildOptions): webpack.WebpackPluginInstance[]{
  return [
      new HtmlWebpackPlugin({
        template: paths.html
      }),
      new webpack.ProgressPlugin(),
      new MiniCssExtractPlugin({
        filename: 'css/[name][contenthash:8].scss',
        chunkFilename: 'css/[name][contenthash:8].scss'
      })
    ]
}