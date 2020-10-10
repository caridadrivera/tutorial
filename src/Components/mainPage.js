import React from 'react';
import { withRouter } from 'react-router-dom'
import AutoButton from './autoBtn';
import FireButton from './fireBtn';
import LifeButton from './lifeBtn';



export default function mainPage(props){


    

    return (

      
          <div className="mainButtonContainer">
                <AutoButton />
            
                <FireButton />
           
       
               <LifeButton />
           

        </div>
      
        
     
    )
}

const ShowMainPageWithRouter = withRouter(mainPage)