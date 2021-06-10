
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'none',
	entry: {
		'button': './packages/Button/index.js',
		'test': './packages/Test/index.js',
		'jui': './packages/index.js'
	},
	output: {
		path: path.join(__dirname, "/lib/libdemand"),
		filename: '[name].js',
		libraryTarget: 'umd',
		library: 'JUI',
		libraryExport: 'default'
	},
	module: {
		rules: [
		{
			test: /\.vue$/,
			use:  ['vue-loader']
		},
		{
			test: /\.css$/,
			use:  [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
		},
		{
			test: /\.s[ac]ss$/i,
			use:  [MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']
		},
		{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
		}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style-chalk/[name].css'
		})
	],
	resolve: {
		extensions: ['.vue', '.js']
	}
}
