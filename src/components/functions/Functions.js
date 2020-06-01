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
        let {result, inp} = this.state;

        result = Number(result) + Number(inp);
        this.setState({
            result,
            inp: ''

        })
    };



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