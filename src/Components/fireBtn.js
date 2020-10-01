import React from 'react';
import { Link } from 'react-router-dom';

export default function fireButton(props){

    return (
        <Link to="/fire"> 
            <span className="fireButton">
               FIRE        
            </span>
            
        </Link>
        
    )
}