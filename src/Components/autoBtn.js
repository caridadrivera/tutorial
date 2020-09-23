import React from 'react';
import {useHistory} from 'react-router-dom';

export default function autoButton(props){

    console.log(props)
    return (
        <button onClick={props.handleClick}>
            AUTO
        </button>
    )
}