module.exports = {
	entry: "./app/boot",
	output: {
		path: __dirname,
		filename: "build.js"
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{ loader: "jsx-loader" },
			{ test: /\.json$/, loader: 'json-loader' }
		]
	},
	resolve: {
		extensions: [ '', '.json', '.js', '.jsx' ],
	},
	node: {
		fs: "empty"
	}
};
