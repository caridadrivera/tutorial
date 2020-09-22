import React from 'react';

export default function autoButton(props){

    console.log(props)
    return (
        <button onClick={props.handleClick}>
            AUTO
        </button>
    )
}