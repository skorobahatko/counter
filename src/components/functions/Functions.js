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
    //
    // Plus1 = () => {
    //
    // };
    // Plus100 = () => {
    //
    // };
    // Minus1 = () => {
    //
    // };
    // Minus100 = () => {
    //
    // };
    Action = (act) => {
        let number = this.state.result;
        number = Number(number);
        switch (act) {
            case 1 :
                number += 1;
                this.setState({
                    result: number
                });
                break;
            case 100:
                number += 100;
                this.setState({
                    result: number
                });
                break;
            case -1:
                number -= 1;
                if (Math.sign(number) !== -1) {
                    this.setState ({
                        result: number
                    })
                } else {
                    this.setState({
                        result: 0
                    })
                };
                break;
            case -100:
                number -= 100;
                if (Math.sign(number) !== -1) {
                    this.setState ({
                        result: number
                    })
                } else {
                    this.setState({
                        result: 0
                    })
                }
                break;
            case 'reset':
                this.setState({
                    result: 0
                });
                break;
            default:
                console.log ('err');
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
    // Reset = () => {
    //
    // };



    render() {
        const {result, inp} = this.state;
        return (
            <div>
                <Result value={result}/>
                <Buttons action={this.Action.bind()}/>
                <div>
                    <input type="text" value={inp} onChange={this.onChangeInp}/>
                    <button onClick={this.PlusInput}>plus</button>
                </div>
            </div>
        );
    }
}