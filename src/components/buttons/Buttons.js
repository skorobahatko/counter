import React from "react";

export function Buttons (props) {
    const {plus1, plus100, minus1, minus100, reset} = props;

    return (
        <div>
            <button onClick={plus1}>+1</button>
            <button onClick={plus100}>+100</button>
            <button onClick={minus1}>-1</button>
            <button onClick={minus100}>-100</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}