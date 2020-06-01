import React from "react";

export function Buttons (props) {
    const {action} = props;
 let act1 = () => {
    action(1);
};
 let act2 = () => {
     action(100);
 };
 let act3 = () => {
    action(-1);
 };
 let act4 = () => {
    action(-100);
 };
 let act5 = () => {
    action('reset');
 };
    return (
        <div>
            <button onClick={act1}>+1</button>
            <button onClick={act2}>+100</button>
            <button onClick={act3}>-1</button>
            <button onClick={act4}>-100</button>
            <button onClick={act5}>reset</button>
        </div>
    )
}