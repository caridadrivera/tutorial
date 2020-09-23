import React from 'react';
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
        <main>
            <AutoButton/>
            <FireButton/>
            <LifeButton/>

        </main>
     
    )
}