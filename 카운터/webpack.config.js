const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool:'eval',

    entry: {
        app: ['./client.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader:'babel-loader',
                options:{
                    presets:[
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 1% in KR', 'last 2 chrome versions'],
                            },
                            debug: true,
                        }],
                        '@babel/preset-react'
                    ],
                    plugins:[
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/'
    }
}