import React from 'react';
import { Link } from 'react-router-dom';

export default function lifeButton(props){

    return (
        <Link to="/life">
            <div className="lifeButton" onClick={props.handleLifeClick}>
                    LIFE / HEALTH
            </div>
        </Link>
        
    )
}