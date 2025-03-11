const DotenvWebpackPlugin = require('dotenv-webpack');
const { resolve } = require('./utils/resolve');
const { generate } = require('./webpack.base');

const base = generate(true);
const basePlugins = base.plugins;

/**
 * @type {import('webpack-dev-server').WebpackConfiguration}
 */
const config = {
    ...base,
    plugins: [...basePlugins, new DotenvWebpackPlugin({ path: resolve('.env') })],
};

module.exports = config;
