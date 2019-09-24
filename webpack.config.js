const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = (env) => {
	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			},
			{ 
				test: /\.(woff|woff2|eot|ttf)$/, 
				loader: 'url-loader?limit=100000' 
			}]
		},
		devtool: 'cheap-module-eval-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public')
		},
		plugins: [
			new webpack.DefinePlugin({
				'process.env.MARVEL_API_KEY': JSON.stringify(process.env.MARVEL_API_KEY)
			})
		]
	};
};