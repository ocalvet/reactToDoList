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
    }
}