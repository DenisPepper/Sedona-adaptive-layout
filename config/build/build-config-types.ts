export type WebpackRunMode = 'production' | 'development';

export type WebpackConfigPaths = {
    entry: string;
    output: string;
    html: string;
    src: string;
};

export type WebpackConfigOptions = {
    mode: WebpackRunMode;
    paths: WebpackConfigPaths;
    devtool: string;
    port: number;
    devMode: boolean;
};

export type WebpackEnvOptions ={
    mode: WebpackRunMode;
    port: number
};
