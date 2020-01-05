//경로 쉽게 조작 해주기 위한 모듈
const path=require('path');

module.exports={
    name:'word-relay-setting',
    mode:'development', //실서비스 : production
    devtool:'eval',

    //안에 있는 확장자를 보고 찾아줌. like 설서
    resolve:{
      extensions:['.js','.jsx']
    },
    entry:{
        app:['./client'],
    },//입력


    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:[
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['> 1% in KR','last 2 chrome versions'],
                        }
                    }],
                    '@babel/preset-react'
                ],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    },//module로 적용

    output:{
        path:path.join(__dirname,'dist'), //__dirname : 현재 디렉토리 경로
        filename:'app.js'
    },//출력

    //entry를 읽고 module을 적용하고 output으로 뺀다.


}