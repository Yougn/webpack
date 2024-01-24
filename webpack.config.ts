import { BuildMode, BuildPath, BuildPlatform } from './config/types/types';
import webpack from 'webpack';
import { buildwebpack } from './config/build/buildWebpack';
import path from 'path';


interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  analyzer?: boolean;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
  }
  
  const config: webpack.Configuration = buildwebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop'
  })
  return config;
}

