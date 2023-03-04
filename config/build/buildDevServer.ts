import { Configuration as DevServerConfiguratio } from "webpack-dev-server";
import { BuildOptions } from "./types/config";


export function buildDevServer(options:BuildOptions): DevServerConfiguratio{

  return {
    historyApiFallback: true,
    port: options.port,
    open: true
  }
}