import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { WebpackConfigOptions } from './build-config-types';

export const buildLoaders = ({ devMode }: WebpackConfigOptions): webpack.RuleSetRule[] => {
    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const sassLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: devMode
                            ? '[path][name]__[local]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, sassLoader];
};
