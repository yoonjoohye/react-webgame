## 웹팩 설치
```
npm i -D webpack webpack-cli
```


## 웹팩 구조
```
//경로를 쉽게 조작해주기 위한 모듈
const path=require('path');

module.exports={
    name:'word-relay-setting',
    mode:'development', //실서비스 : production
    devtool:'eval', //hidden-source-map

    //파일확장자를 적지 않아도 안에 있는 확장자를 보고 찾아줌
    resolve:{
      extensions:['.js','.jsx']
    },
    
    //입력
    entry:{
        app:['./client'],
    },

    //모듈 적용
    module:{
        rules:[{
            test:/\.jsx?/,
            loader:'babel-loader',
            options:{
                presets:[
                    //옛날 브라우저 지원해줌
                    ['@babel/preset-env',{
                        targets:{
                            browsers:['> 1% in KR','last 2 chrome versions'],
                        },
                        debug:true,
                    }],
                    //JSX 문법사용
                    '@babel/preset-react'
                ],
                plugins:['@babel/plugin-proposal-class-properties']
            }
        }]
    },
    
    //확장 프로그램
    plugins:[
        new webpack.LoaderOptionsPlugin({debug:true}),//loader에 debug:true 전부 넣기
    ],

    //출력
    output:{
        path:path.join(__dirname,'dist'), //__dirname : 현재 디렉토리 경로
        filename:'app.js'
    },

    //entry를 읽고 module을 적용하고, plugin도 적용하고, output으로 뺀다.

}
```

## import(es6)와 require(Common JS)

import(es6가 지원하는 패키지 읽는 방법)
```
import foo from "foo";
import { bar } from "foo";

export default foo;
export { bar };
```

require(자바스크립트 자체가 지원하는 패키지 읽는 방법)
```
var foo = require("foo");
var bar = requre("foo").bar;

module.exports = foo;
exports.bar = bar;
```
