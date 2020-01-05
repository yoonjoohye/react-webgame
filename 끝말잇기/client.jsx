const React=require('react');
const ReactDom=require('react-dom');
// const { hot }=require('react-hot-loader/root');

const WordRelay =require('./WordRelay');

// const Hot=hot(WordRelay);

ReactDom.render(<WordRelay/>, document.querySelector('#root'));
