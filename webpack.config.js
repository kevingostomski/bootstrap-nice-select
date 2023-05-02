const path = require('path');
const webpack = require('webpack'); //to access built-in plugins -> currently Bannerplugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extract CSS from JS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // CSS Minifier
const TerserPlugin = require("terser-webpack-plugin"); // JS Minifier
let version = "v1.1.1";

const minified = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        }), new CssMinimizerPlugin()]
    },
    entry: './src/js/bootstrap-nice-select.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bootstrap-nice-select.min.js',
        clean: false,
        globalObject: 'this',
        umdNamedDefine: true,
        library: {
            name: 'bootstrapNiceSelect',
            type: 'umd'
        }
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/bootstrap-nice-select.min.css"
    }),
    new webpack.BannerPlugin({
        banner: `
Bootstrap-Nice-Select ${version} (https://github.com/kevingostomski/bootstrap-nice-select)
Copyright 2023 Kevin Gostomski <kevingostomski2001@gmail.com>
Licensed under MIT (https://github.com/kevingostomski/bootstrap-nice-select/blob/main/LICENSE)
        `
    })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: "compressed"
                        }
                    }
                }]
            }
        ]
    }
};

const unminified = {
    mode: 'production',
    devtool: 'source-map',
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({
            extractComments: false
        }), new CssMinimizerPlugin()]
    },
    entry: './src/js/bootstrap-nice-select.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bootstrap-nice-select.js',
        clean: false,
        globalObject: 'this',
        umdNamedDefine: true,
        library: {
            name: 'bootstrapNiceSelect',
            type: 'umd'
        }
    },
    plugins: [new MiniCssExtractPlugin({
        filename: "css/bootstrap-nice-select.css"
    }),
    new webpack.BannerPlugin({
        banner: `
Bootstrap-Nice-Select ${version} (https://github.com/kevingostomski/bootstrap-nice-select)
Copyright 2023 Kevin Gostomski <kevingostomski2001@gmail.com>
Licensed under MIT (https://github.com/kevingostomski/bootstrap-nice-select/blob/main/LICENSE)
        `
    })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader",
                {
                    loader: 'sass-loader',
                    options: {
                        sassOptions: {
                            outputStyle: "expanded"
                        }
                    }
                }]
            }
        ]
    }
};

module.exports = (env) => {
    if (env.production) {
        return [minified, unminified];
    }
    return unminified;
}; 