import React, {Component} from "react";
import './Functions.scss'

export class Functions extends Component {
    constructor(props) {
        super (props);

        this.state = {
            result: '',
            inp: ''
        };
        this.Plus1 = this.Plus1.bind(this);
        this.Plus100 = this.Plus100.bind(this);
        this.Minus1 = this.Minus1.bind(this);
        this.Minus100 = this.Minus100.bind(this);
        this.PlusInput = this.PlusInput.bind(this);
    }
    Plus1 = (e) => {
        e.preventDefault();
        let plused = this.state.result;
        plused = Number(plused) + 1;
        this.setState({
            result: plused
        })
    };
    Plus100 = (e) => {
        e.preventDefault();
        let plused = this.state.result;
        plused = Number(plused) + 100;
        this.setState({
            result: plused
        })
    };
    Minus1 = (e) => {
        e.preventDefault();
        let minused = this.state.result;
        minused = Number(minused) - 1;
        if (Math.sign(minused) !== -1) {
            this.setState ({
                result: minused
            })
        } else {
            this.setState({
                result: '0'
            })
        }
    };
    Minus100 = (e) => {
        e.preventDefault();
        let minused = this.state.result;
        minused = Number(minused) - 100;
        if (Math.sign(minused) !== -1) {
            this.setState ({
                result: minused
            })
        } else {
            this.setState({
                result: '0'
            })
        }
    };
    onChangeInp = (e) => {
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({
                inp: e.target.value
            })
        }
        console.log (this.state.inp);
    };
    PlusInput = (e) => {
        e.preventDefault();
        let plused = this.state.result;
        let inpPlus = this.state.inp;
        plused = Number(plused) + Number(inpPlus);
        this.setState({
            result: plused,
            inp: ''
        })
    };



    render() {
        const {result, inp} = this.state;
        return (
            <div>
                <div>
                    <p>
                        <input type="text" value={result}/>
                    </p>
                </div>
                <div>
                    <form action="btns">
                        <button onClick={this.Plus1}>+1</button>
                        <button onClick={this.Plus100}>+100</button>
                        <button onClick={this.Minus1}>-1</button>
                        <button onClick={this.Minus100}>-100</button>
                    </form>
                </div>
                <div>
                    <p>
                        <input type="text" value={inp} onChange={this.onChangeInp}/>
                        <button onClick={this.PlusInput}>plus</button>
                    </p>
                </div>
            </div>
        );
    }
}