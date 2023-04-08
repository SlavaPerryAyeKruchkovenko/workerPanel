const { NODE_ENV } = process.env;
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: NODE_ENV,
    entry: './index.js',
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: '[name].[hash:8].bundle.js',
        chunkFilename: '[name].[hash:8].bundle.js',
    },
    devServer: {
        historyApiFallback: true,
        port: 3002,
    },
    resolve: {
        extensions: ['.jsx', '.ts', '.js'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            '@Pages': path.resolve(__dirname, './src/pages'),
            '@Helpers': path.resolve(__dirname, './src/helpers'),
            '@Models': path.resolve(__dirname, './src/models'),
            '@Modals': path.resolve(__dirname, './src/modals'),
            '@Components': path.resolve(__dirname, './src/components'),
            '@Assets': path.resolve(__dirname, './src/assets'),
            '@Styles': path.resolve(__dirname, './src/styles'),
        },
    },
    module: {
        rules: [
            {
                test: /\.[j|t]sx?$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx', '.json'],
                },
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: [
                    NODE_ENV === 'development'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]',
                            outputPath: 'assets/',
                        },
                    },
                ],
            },
        ],
    },
    devtool: NODE_ENV === 'production' ? undefined : 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:8].css',
            chunkFilename: '[name].[hash:8].css',
        }),
    ],
}