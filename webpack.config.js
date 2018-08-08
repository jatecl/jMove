const webpack = require('webpack');
const path = require('path');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = {
    entry: './sample/test.js',
    output: {
        path: path.join(__dirname, "example"),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: "./sample/",
        port: 18801,
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',

                options: {
                    presets: [
                        'es2015', 'react', 'stage-0'
                    ],

                    plugins: ['syntax-dynamic-import']
                }
            }
        ]
    },

    mode: 'development',

    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            name: false,

            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    }
};
