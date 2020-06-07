const path = require('path');

module.exports = {
    mode:"development",
    devtool:"source-map",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'main.js'
    },
    devServer: {
        contentBase: path.join(__dirname,'public'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                            }
                    }
                }
            ]
        }
};