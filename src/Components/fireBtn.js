import React from 'react';

export default function fireButton(props){

    return (
        <button onClick={props.handleFireClick}>
            Fire
        </button>
    )
}