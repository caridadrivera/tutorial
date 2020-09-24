import React from 'react';
import { Link } from 'react-router-dom';

export default function lifeButton(props){

    return (
        <Link to="/life">
            <button onClick={props.handleLifeClick}>
                    LIFE / HEALTH
            </button>
        </Link>
        
    )
}