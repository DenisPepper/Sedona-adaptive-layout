import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { WebpackConfigOptions } from './build-config-types';

export const buildDevServer = (options: WebpackConfigOptions): DevServerConfiguration => {
    const { port } = options;
    return {
        port,
        open: true,
        hot: true,
        historyApiFallback: true,
    };
};
