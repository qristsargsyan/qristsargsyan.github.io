const path = require('path');

module.exports = {
    // mode: 'development',
    entry: {
        main: './src/index.js',
        app: './src/script.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true
    },
};