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
        extensions: ['', '.ts', '.js', '.html']
    },
    module: {
        loaders: [{
            test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'], exclude: /node_modules/
        },
        {
            test: /\.html$/,
            loader: 'raw-loader'
        },
        {
            test: /\.css$/,
            loader: 'raw-loader'
        }]
    },
    watch: true
}
