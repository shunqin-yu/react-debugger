const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: './src/index.js',
	output: {
		filename: 'index.[hash:8].js',
	},
	module: {
		rules: [
			{
				test: /.\jsx?$/,
				use: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
	devServer: {
		port: 3000,
		open: false,
		compress: true,
		client: { progress: true },
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
}
