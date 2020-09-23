import React from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function autoButton(props){

    console.log(props)
    return (
        <Link to="/auto" onClick={props.handleClick}>
            AUTO
        </Link>
    )
}