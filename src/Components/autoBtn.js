import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

export default function autoButton(props){

    console.log(props)
    return (

        
             <Link to='/auto'>
              <span>
                  AUTO 
              </span>  
            </Link> 
        
        
        
    )
}