const path = require('path')
const glob = require('glob')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin')

const PATHS = {
    src: path.resolve(__dirname, 'src'),
    public: path.resolve(__dirname, 'public'),
    assets: path.resolve(__dirname, 'assets'),
    node_modules: path.resolve(__dirname, 'node_modules'),
}

let config = {
    entry: {
        application: './src/application.js',
    },

    output: {
        path: PATHS.public,
        filename: '[name].js',
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
            template: PATHS.src + '/index.html',
        }),
        new CopyPlugin({
            patterns: [{ from: 'assets', to: './assets/' }],
        }),
        //        new PurgeCSSPlugin({
        //            paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
        //        }),
        new HtmlWebpackPartialsPlugin([
            {
                path: PATHS.src + '/partials/analytics.html',
                location: 'head',
                priority: 'high',
                inject: process.env.NODE_ENV === 'production',
                options: {
                    ga_property_id: 'G-H6N73DP229',
                },
            },
        ]),
    ],

    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all',
        },
        minimize: true,
        minimizer: [new CssMinimizerPlugin(), new HtmlMinimizerPlugin()],
        removeAvailableModules: true,
        removeEmptyChunks: true,
    },

    devServer: {
        contentBase: PATHS.public,
        port: 8080,
        hot: true,
        historyApiFallback: true,
    },

    mode: 'development',

    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sass|css|scss)$/,
                include: PATHS.src,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                include: PATHS.node_modules,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../fonts',
                        },
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg|jfif)$/i,
                include: [PATHS.assets, PATHS.src],
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            },
            {
                test: /\.html$/i,
                include: PATHS.src,
                loader: 'html-loader',
            },
            {
                test: /\.ejs$/,
                loader: 'ejs-loader',
                options: {
                    variable: 'data',
                    interpolate: '\\{\\{(.+?)\\}\\}',
                    evaluate: '\\[\\[(.+?)\\]\\]',
                },
            },
            {
                test: /\.mdx?$/,
                include: PATHS.src,
                use: ['babel-loader', '@mdx-js/loader'],
            },
        ],
    },
}

module.exports = config
