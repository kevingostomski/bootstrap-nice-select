const path = require('path');
const webpack = require('webpack'); //to access built-in plugins -> currently Bannerplugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extract CSS from JS
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // CSS Minifier
const TerserPlugin = require("terser-webpack-plugin"); // JS Minifier
const fs = require('fs'); // used for language output per locale
let version = "v1.4.3";
let bannerText = `
Bootstrap-Nice-Select ${version} (https://github.com/kevingostomski/bootstrap-nice-select)
Copyright 2023 Kevin Gostomski <kevingostomski2001@gmail.com>
Licensed under MIT (https://github.com/kevingostomski/bootstrap-nice-select/blob/main/LICENSE)
`;

/**
 * Creates localisation files to bundle it
 * @param {String} fileContent filecontent of the output file
 * @param {String} outputFile path with filename where to write file
 */
const createFile = function (fileContent, outputFile) {
    fs.writeFileSync(outputFile, fileContent, (error) => {
        if (error) {
            console.error("An error occured during file creation: ", error);
        }
    });
}

const fileNames = fs.readdirSync('./src/js/locale/');
fileNames.splice(fileNames.indexOf("README.md"), 1);

fileNames.pop();
const fileContent = fs.readFileSync('./src/js/bootstrap-nice-select.js').toString();
fileNames.forEach(function (fileName) {
    createFile(`${fileContent}\n\n${fs.readFileSync(`./src/js/locale/${fileName}`).toString()}`, `./src/js/bootstrap-nice-select-${fileName.split(".")[0]}.js`);
});
let allLocalesFileContent = "";
fileNames.forEach(function (fileName) {
    allLocalesFileContent = allLocalesFileContent.concat(fs.readFileSync(`./src/js/locale/${fileName}`).toString());
});
createFile(`${fileContent}\n\n${allLocalesFileContent}\n\nDEFAULTS.locale = "en-US"`, './src/js/bootstrap-nice-select-locale-all.js');

const minifiedLocalFiles = [];
fileNames.forEach(function (fileName) {
    minifiedLocalFiles.push({
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                extractComments: false
            }), new CssMinimizerPlugin()]
        },
        entry: `./src/js/bootstrap-nice-select-${fileName.split(".")[0]}.js`,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `js/locale/bootstrap-nice-select-${fileName.split(".")[0]}.min.js`,
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
            banner: bannerText
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
    });
});

const unminifiedLocalFiles = [];
fileNames.forEach(function (fileName) {
    unminifiedLocalFiles.push({
        mode: 'production',
        optimization: {
            minimize: false,
            minimizer: [new TerserPlugin({
                extractComments: false
            }), new CssMinimizerPlugin()]
        },
        entry: `./src/js/bootstrap-nice-select-${fileName.split(".")[0]}.js`,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `js/locale/bootstrap-nice-select-${fileName.split(".")[0]}.js`,
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
            banner: bannerText
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
    });
});

const minifiedMain = {
    mode: 'production',
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
        banner: bannerText
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

const minifiedAllLocale = {
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false
        }), new CssMinimizerPlugin()]
    },
    entry: './src/js/bootstrap-nice-select-locale-all.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bootstrap-nice-select-locale-all.min.js',
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
        banner: bannerText
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

const unminifiedAllLocale = {
    mode: 'production',
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({
            extractComments: false
        }), new CssMinimizerPlugin()]
    },
    entry: './src/js/bootstrap-nice-select-locale-all.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bootstrap-nice-select-locale-all.js',
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
        banner: bannerText
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

const unminifiedMain = {
    mode: 'production',
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
        banner: bannerText
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



let prod = minifiedLocalFiles.slice(0);
prod.push(minifiedMain, unminifiedMain, minifiedAllLocale, unminifiedAllLocale);
prod = prod.concat(unminifiedLocalFiles);


let dev = unminifiedLocalFiles.slice(0);
dev.push(unminifiedMain, unminifiedAllLocale);

module.exports = (env) => {
    if (env.production) {
        return prod;
    }
    return dev;
}; 