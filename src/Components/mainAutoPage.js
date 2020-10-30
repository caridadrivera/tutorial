import React, {Component} from 'react';





export default class MainAutoPage extends Component {

    
     getAutoQuote = () =>{
        const quotingButton = document.querySelector('.autoQuoteBtn')
        quotingButton.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('I have been clicked.')
       })
    };
      
    render() {
        const autoQuote = 'Quoting';
        const autoBilling = 'Billing';
        const autoAccountMngmt = 'Account Management';



       
       
        return (
    
            <div className="autoPage">  
                <button onClick={this.getAutoQuote} className="autoQuoteBtn">
                {autoQuote}    
                </button>

                <button className="autoBillingBtn">
                {autoBilling}
                </button>

                <button className="autoAccountBtn">
                    {autoAccountMngmt}
                </button>
            </div>
                )

    }
 
}

