import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
	mode: 'production',
	entry: "./src/index.tsx",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.svg$/i,
				type: 'asset',
			}
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html",
		}),
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(import.meta.dirname, "dist"),
	},
	devServer: {
		static: path.join(import.meta.dirname, "dist"),
		compress: true,
		port: 9000,
	},
};
