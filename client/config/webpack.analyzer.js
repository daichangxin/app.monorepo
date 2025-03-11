const DotenvWebpackPlugin = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { resolve } = require('./utils/resolve');
const { generate } = require('./webpack.base');

const base = generate(false);
const basePlugins = base.plugins;

/**
 *
 * @type {import('webpack-dev-server').WebpackConfiguration}
 */
const config = {
    ...base,
    devServer: {
        static: {
            directory: resolve('dist'),
        },
        compress: true,
        // host: 'local-ipv4',
        // port: 8080,
        open: true,
        hot: true,
        historyApiFallback: true,
    },
    plugins: [...basePlugins, new DotenvWebpackPlugin({ path: resolve('.env') }), new BundleAnalyzerPlugin()],
};

module.exports = config;
