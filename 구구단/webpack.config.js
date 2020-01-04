const path=require('path');

module.exports={
    mode:'development',
    devtool:'eval', //hidden-source-map
    resolve:{
        extensions:['.jsx','.js']
    },
    entry:{
        app:'./client.jsx',
    },
    module:{
      rules:[{
          loader:'babel-loader',
          test:/\.jsx?$/,
          options:{
              presets:['@babel/preset-env','@babel/preset-react'],
              plugins:[]
          }
      }]
    },

    output:{
        filename:'app.js',
        path:path.join(__dirname,'dist'),
    },
}