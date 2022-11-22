import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackConfigOptions } from './build-config-types';

export const buildPlugins = (options: WebpackConfigOptions): webpack.WebpackPluginInstance[] => {
    const { paths, devMode } = options;

    const progressPlugin = new webpack.ProgressPlugin();

    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: paths.html,
    });

    const miniCssExtractPlugin = new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css',
    });

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(devMode),
    });

    const hotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();

    const plugins = [htmlWebpackPlugin, progressPlugin, definePlugin];

    if (devMode) {
        plugins.push(hotModuleReplacementPlugin);
    } else {
        plugins.push(miniCssExtractPlugin);
    }

    return plugins;
};
