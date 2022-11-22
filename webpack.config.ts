import path from 'path';
import webpack from 'webpack';
import { buildConfig } from './config/build/build-config';
import { WebpackEnvOptions } from './config/build/build-config-types';

const DEFAULT_MODE = 'development';
const DEVTOOL_OPTION = 'eval-source-map';
const DEV_SERVER_PORT = 3000;

const config = (env: WebpackEnvOptions): webpack.Configuration => buildConfig({
    mode: env.mode || DEFAULT_MODE,
    paths: {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    },
    devtool: DEVTOOL_OPTION,
    port: env.port || DEV_SERVER_PORT,
    devMode: env.mode !== 'production',
});

export default config;
