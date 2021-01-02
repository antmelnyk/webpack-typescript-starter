const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './source/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    mode: 'development',

    devtool: 'source-map',

    devServer: {
        contentBase: path.join(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },

    plugins: [
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, 'index.html') },
            ]
        }),
    ]
};