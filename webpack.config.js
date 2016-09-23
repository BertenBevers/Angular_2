var webpack = require('webpack');

module.exports = {
    entry: {  
        boot: "./app/boot.ts"
    },
    output: {
        path: __dirname,
        filename: "./dist/bundle.js"
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'], exclude: /node_modules/
        }]
    },
    watch: true
}
