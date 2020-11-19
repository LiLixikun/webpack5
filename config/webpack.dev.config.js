// import * from "@types/webpack"
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, "../src/index.tsx"),
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name]-bundle.js',
        publicPath: "/"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "../dist/"),
        progress: true,
        port: 8088,
        open: true,
        compress: true,
        hot: true,
        hotOnly: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            //modules:false
                        }
                    },
                    "less-loader",
                    'postcss-loader'
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack5',
            template: path.resolve(__dirname, "../public/index.html"),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}