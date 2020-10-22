import React from 'react';
import './App.css';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
// import AutoButton from './Components/autoBtn';
// import FireButton from './Components/fireBtn';
// import LifeButton from './Components/lifeBtn';
import MainPage from './Components/mainPage';
import MainAutoPage from './Components/mainAutoPage';
import MainFirePage from './Components/mainFirePage';
import MainLifePage from './Components/mainLifePage';

export default function App() {
 
  
  return (
    
<Router>
  <Route exact path="/" component={MainPage}></Route>
  <Route path="/auto" component={MainAutoPage}></Route>
  <Route path="/fire" component={MainAutoPage}></Route>
  <Route path="/life" component={MainAutoPage}></Route>

</Router>
        


   


   
    
  );
}
