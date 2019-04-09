const path = require('path');

const npmLibConfig = {
    entry: {
        'utils.js': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name]',
        libraryTarget: 'commonjs2',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader', // compiles Sass to CSS, using Node Sass by default,
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                ],
            },
        ],
    },
};

module.exports = [npmLibConfig];
