import React from 'react';
import { Link } from 'react-router-dom';

export default function lifeButton(props){

    return (
        <Link to="/life">
            <span className="lifeButton">
           LIFE
           </span> 
          
        </Link>
        
    )
}