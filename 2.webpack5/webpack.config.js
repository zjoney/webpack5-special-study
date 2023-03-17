const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    mode: 'none',
    entry: './index.js',
    devtool: false,
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //     minimize: true,
    //     minimizer: [
    //         // new UglifyJsPlugin()
    //     ],
    //     usedExports: false,
    //     sideEffects: false
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }

};