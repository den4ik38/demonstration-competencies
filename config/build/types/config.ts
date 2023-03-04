

export type buildMode = 'production' | 'development'

export interface buildPaths {
  entry: string,
  build: string,
  html: string
}

export interface buildEnv {
  mode:buildMode,
  port:number
}

export interface BuildOptions {
  mode: buildMode,
  paths: buildPaths,
  isDev:boolean,
  port:number,
}