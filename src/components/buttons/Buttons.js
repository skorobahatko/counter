import React from "react";

export function Buttons (props) {
    const {plus1, plus100} = props;
const giveFunc = () => {
    plus1();
};
const giveFunct = () => {
    plus100();
};

    return (
        <form>
            <button onClick={giveFunc.bind()}>+1</button>
            <button onClick={giveFunct.bind()}>+100</button>
            {/*<button onClick={Minus1}>-1</button>*/}
            {/*<button onClick={Minus100}>-100</button>*/}
        </form>
    )
}