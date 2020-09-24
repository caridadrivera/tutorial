import React from 'react';
import { Link } from 'react-router-dom';

export default function autoButton(props){

    console.log(props)
    return (
        <Link to='/auto'>
            <button className="autoButton" onClick={props.handleClick}>
                AUTO
            </button>
        </Link>
        
    )
}