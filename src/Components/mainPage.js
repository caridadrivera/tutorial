import React from 'react';
import { withRouter } from 'react-router-dom'
import AutoButton from './autoBtn';
import FireButton from './fireBtn';
import LifeButton from './lifeBtn';



export default function mainPage(props){

const handleAutoClick = () =>{
   console.log('clicked Auto')
}

const handleFireClick = () =>{
  console.log('im here');
}

const handleLifeClick = () =>{
  console.log('im here');
}
    

    return (

      
          <div className="mainPageButtons">
            <div className="autoButton">
                <AutoButton handleClick={handleAutoClick}/>
            </div>
        
            <div className="fireButton">
                <FireButton handleClick={handleFireClick}/>
            </div>
           <div className="lifeButton">
               <LifeButton handleClick={handleLifeClick}/>
           </div>
            

        </div>
      
        
     
    )
}

const ShowMainPageWithRouter = withRouter(mainPage)