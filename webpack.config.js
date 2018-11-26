const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: ['./src/index.js'],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader','sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'],
    },
    output: {
        filename: 'bundle-[hash].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        allowedHosts: ['0.0.0.0', 'localhost'],
        host: '0.0.0.0',
        useLocalIp: true,
        port: 3000,
    },
};
