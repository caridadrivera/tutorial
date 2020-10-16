import React from 'react';
import { withRouter, Link, Router, Route } from 'react-router-dom'
// import AutoButton from './autoBtn';
// import FireButton from './fireBtn';
// import LifeButton from './lifeBtn';



export default function mainPage(props){


    

    return (

          <div className="mainButtonContainer">
            <div className="autoButton">
                 <Link to="/auto">AUTO</Link>
            </div>
            <div className="fireButton">
                <Link to="/fire">FIRE</Link>
            </div>
            <div className="lifeButton">
                <Link to="/life">LIFE</Link>
            </div>
            
         </div>
      
        
     
    )
}

const ShowMainPageWithRouter = withRouter(mainPage)