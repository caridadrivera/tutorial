import React from 'react';
import mainAutoPage from './Components/mainAutoPage'

import {useHistory, Router, Route, Link} from 'react-router-dom';

export default function autoButton(props){

    console.log(props)
    return (
        <main>
<Router>
         <button onClick={props.handleClick}>
            <Link to="/auto">
                    AUTO
            </Link>
        </button>
     </Router>
        
     <Route path="/auto" exact component={mainAutoPage}></Route>

        </main>
     
    )
}