import React, {Component} from "react";
import {Buttons} from "../buttons/Buttons";

export class Functions extends Component {
    constructor(props) {
        super (props);

        this.state = {
            result: 0,
            inp: '',
        };
    }

    Plus1 = () => {
        console.log ('+1');
        debugger
        let plused = this.state.result;
        plused = Number(plused) + 1;
        console.log (plused);
        this.setState({
            result: plused
        });
        console.log (this.state.result);
    };
    Plus100 = () => {
        let plused = this.state.result;
        plused = Number(plused) + 100;
        console.log (plused);
        this.setState({
            result: plused
        })
    };
    // Minus1 = (e) => {
    //     let minused = this.state.result;
    //     minused = Number(minused) - 1;
    //     if (Math.sign(minused) !== -1) {
    //         this.setState ({
    //             result: minused
    //         })
    //     } else {
    //         this.setState({
    //             result: '0'
    //         })
    //     }
    // };
    // Minus100 = (e) => {
    //     let minused = this.state.result;
    //     minused = Number(minused) - 100;
    //     if (Math.sign(minused) !== -1) {
    //         this.setState ({
    //             result: minused
    //         })
    //     } else {
    //         this.setState({
    //             result: '0'
    //         })
    //     }
    // };
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
                <Buttons plus1={this.Plus1} plus100={this.Plus100} minus1={this.Minus1} minus100={this.Minus100} />
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