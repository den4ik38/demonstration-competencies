import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolves } from "./buildResolves";
import { BuildOptions } from "./types/config";


export function buildWebPackConfig(options:BuildOptions): webpack.Configuration{
  const {mode, paths, isDev} = options
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    devtool: isDev? 'inline-source-map':undefined,
    devServer: isDev? buildDevServer(options) : undefined,
    resolve: buildResolves(),
    plugins: buildPlugins(options),
  }
}