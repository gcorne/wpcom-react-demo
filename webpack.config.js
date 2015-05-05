var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
	entry: "./app/boot",
	output: {
		path: __dirname,
		filename: "build.js"
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			},
			{
				test: /\.jsx$/,
				loader: "jsx-loader"
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			}
		]
	},
	resolve: {
		extensions: [ '', '.json', '.js', '.jsx' ],
	},
	node: {
		fs: "empty"
	},
	plugins: [
		new ExtractTextPlugin( 'styles.css' )
	]
};
