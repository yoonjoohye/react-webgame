const React=require('react');
const {useState, useRef}=React;

const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    //hooks에서의 ref 사용법
    const inputRef=useRef(null);

    const onChange=(e)=>{
        setValue(e.target.value);
    }

    const onSubmit=(e)=> {
        e.preventDefault();
        if ((first * second) === parseInt(value)) {
            //리액트가 알아서 렌더링 한번만 해줌
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            setResult('정답');
        } else {
            setValue('');
            setResult('오답');
        }
        inputRef.current.focus();
    }

    console.log('렌더링');
    return (
        <>
            <div> {first} * {second}</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} onChange={onChange} type="number" value={value}/>
                <button>입력</button>
            </form>
            <div id="result">{result}</div>
        </>
    );
}

module.exports = GuGuDan;