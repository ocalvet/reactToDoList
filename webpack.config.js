var path = require('path');

// Webpack configuration object
module.exports = {
	context: __dirname + "/app",
    entry: "./app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [{ 
            test: /\.js/,
            loader: 'babel-loader' 
        }]
    },
    resolve: {
        alias: {
        'react': path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['', '.js']
    }
}