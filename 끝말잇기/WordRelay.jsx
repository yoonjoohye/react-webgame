const React = require('react');
const {Component}=React;

class WordRelay extends Component{
    state={
        text:'제로초',
        value:'',
        result:'',
    }

    onSubmit=(e)=>{
        e.preventDefault();
        let textFinish=this.state.text.substr(this.state.text.length-1,1);
        let valueFirst=this.state.value.substr(0,1);

        if(textFinish===valueFirst) {
            this.setState((preValue) => {
                return {
                    text: preValue.value,
                    value: '',
                    result: '정답',
                }
            });
        }
        else{
            this.setState({
               value:'',
               result:'오답',
            });
        }
    }

    onChange=(e)=>{
        this.setState({
           value:e.target.value,
        });
    }

    render(){
        return(
            <>
                <div>{this.state.text}</div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.value} onChange={this.onChange}/>
                    <button>입력</button>
                </form>
                <div>{this.state.result}</div>
            </>
        );
    }

}

module.exports = WordRelay;