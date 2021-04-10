'use strict';

const path = require("path");
const webpack = require("webpack");
const polyfill = require('babel-polyfill');
const webpackNotifierPlugin = require('webpack-notifier');
const uglifyJSPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const webpackNotifier = require('webpack-notifier');


const entryConfig = require('./webpack.config.bundles');

/**
 * @type {import('webpack').Configuration}
 */
let config = {
    devtool: "source-map",
    entry: entryConfig,
    output: {
        path: path.resolve(__dirname, "wwwroot/bundles"),
        filename: './[name].js',
        sourceMapFilename: './[name].map',
        library: 'HandyHost'
    },
    resolve: {
        extensions: ['.js', '.css', '.ts', '*'],
        alias: {
            netlibs: path.resolve(__dirname, 'wwwroot/lib'),
            nodes: path.resolve(__dirname, 'node_modules'),
            Scripts: path.resolve(__dirname, 'Scripts/'),
            libs: path.resolve(__dirname, 'Content/libs'),
            styles: path.resolve(__dirname, 'Content/css'),
        }
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]|[\\/]Content[\\/]|[\\/]Scripts[\\/]Site\.css/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpackNotifier()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\/.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: 'wwwroot/bundles',
                            hmr: process.env.NODE_ENV === 'production'
                        },
                    },
                    'css-loader'
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }, {
                test: /\.(woff|woff2|ttf|eot|svg|gif|png)(\?[\s\S]+)?$/,
                loader: 'file-loader'
            },
            {
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: {
                            exposes: ['$', 'jQuery'],
                        }
                    }
                   
                ]
            }
        ]
    }
};

//Модифицируем результирующий JS код для поддержки ES5
if (!process.env.CHROME) {
    config.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
        
    });
    config.devtool = 'eval-source-map';
}

if (process.env.NODE_ENV === 'production') {
    config.module.rules.push( new uglifyJSPlugin({
        sourceMap: true,
        uglifyOptions: {
            output: {
                comments: false
            },
            compress: false,
            mangle: false
        }
    }));
}

if (!process.env.NODE_ENV === 'development') {
    config.devtool = 'inline-source-map';
    config.devServer = { contentBase: './wwwroot/bundles/' };
}

if (process.env.CHROME) {
    config.devtool = 'eval';
}

module.exports = config;