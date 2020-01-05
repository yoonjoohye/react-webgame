const path = require('path');
const webpack= require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js']
    },

    entry: {
        app: './client.jsx',
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            options: {
                presets: [
                    //옛날 브라우저들 지원해주는 애임
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions'],
                        },
                        debug: true,
                    }],
                    '@babel/preset-react'
                ],
                plugins: []
            }
        }]
    },
    //확장 프로그램
    plugins:[
        new webpack.LoaderOptionsPlugin({debug:true}),//loader에 debug:true 전부 넣기
    ],
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist'),
    },
}