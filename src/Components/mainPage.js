import React from 'react';
import '../index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter, Link, Route } from 'react-router-dom';
import MainAutoPage from './mainAutoPage'
// import AutoButton from './autoBtn';
// import FireButton from './fireBtn';
// import LifeButton from './lifeBtn';



export default function mainPage(props){


    

    return (
        <Router>
                <div className="mainButtonContainer">
              
              <div className="autoButton">
                   <Link to="/auto">AUTO</Link>
                   <Route path="/auto" component={MainAutoPage}> </Route>
              </div>
              <div className="fireButton">
                  <Link to="/fire">FIRE</Link>
              </div>
              <div className="lifeButton">
                  <Link to="/life">LIFE</Link>
              </div>
              
           </div>
        </Router>
          
      
        
     
    )
}

const ShowMainPageWithRouter = withRouter(mainPage)