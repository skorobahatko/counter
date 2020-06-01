import React, {Component} from "react";
import {Buttons} from "../buttons/Buttons";
import {Result} from "../result/Result";

export class Functions extends Component {
    constructor(props) {
        super (props);

        this.state = {
            result: 0,
            inp: '',
        };
    }

    Plus1 = () => {
        let plused = this.state.result;
        plused = Number(plused) + 1;
        this.setState({
            result: plused
        });
    };
    Plus100 = () => {
        let plused = this.state.result;
        plused = Number(plused) + 100;
        this.setState({
            result: plused
        })
    };
    Minus1 = () => {
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
    Minus100 = () => {
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
    };
    PlusInput = (e) => {
        let plused = this.state.result;
        let inpPlus = this.state.inp;
        plused = Number(plused) + Number(inpPlus);
        this.setState({
            result: plused,
            inp: ''
        })
    };
    Reset = () => {
        this.setState({
            result: 0
        })
    };



    render() {
        const {result, inp} = this.state;
        return (
            <div>
                <Result value={result}/>
                <Buttons plus1={this.Plus1} plus100={this.Plus100} minus1={this.Minus1} minus100={this.Minus100} reset={this.Reset}/>
                <div>
                    <input type="text" value={inp} onChange={this.onChangeInp}/>
                    <button onClick={this.PlusInput}>plus</button>
                </div>
            </div>
        );
    }
}