import React from "react";

export function Result (props) {
    const {value} = props;
    return (
        <div>
            <h2>
            {value}
            </h2>
        </div>
    )
}