
## state와 props
- state: 계속 바뀌는 데이터를 담는다.
- props: 부모->자식 데이터를 담는다.

## fragment
- 쓸데 없는 태그를 공간차지를 하지 않는다.

```
 <React.Fragment> ... </React.Fragment>
```

## render()
- render()는 setState가 실행될 때마다 계속 실행됨.
- render 안에 적은 함수들은 웬만하면, 밖에 둬서 불러오는게 나음 왜냐면 render()가 실행될때바다 안에 것들은 새로 부르기 때문에. 

## class와 함수형 컴포넌트 
- 함수형 컴포넌트에 hooks를 쓸 수 있게 되었다
 ```
        this.setState((prevState)=>{
              return {
                  result: '맞아요 : ' + prevState.value,
                  value: '',
                  first: Math.ceil(Math.random() * 9),
                  second: Math.ceil(Math.random() * 9)
              };
        });
 ```

 ```   
       const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
       const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
       const [value, setValue] = React.useState('');
       const [result, setResult] = React.useState(''); 
 ```

## ref
- dom을 건드리지 않도록 하기 위해 ref를 사용

class
```
        inputRef=(c)=>{
            this.input=c;
        }
```

함수형 컴포넌트
```
        const inputRef=React.useRef(null);
```
