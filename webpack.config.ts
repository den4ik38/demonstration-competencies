import path from'path'
import webpack from 'webpack'
import { buildWebPackConfig } from './config/build/buildWebPackConfig';
import { buildEnv, buildPaths } from './config/build/types/config';


export default (env:buildEnv) => {

  const paths:buildPaths = {
    entry:path.resolve(__dirname, 'src', 'index.tsx'),
    build:path.resolve(__dirname, 'build'),
    html:path.resolve(__dirname, 'public', 'index.html')
  }
  
  const mode = env.mode || 'development'
  const PORT = env.port || 3000 
  const isDev = mode === 'development'
  
  const config: webpack.Configuration = buildWebPackConfig({
    mode,
    paths,
    isDev,
    port:PORT
  })

  return config;
}