import React from 'react';

function autoQuote(){
    const quotingButton = document.querySelector('.autoQuoteBtn')
    quotingButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('I have been clicked.')
   })

}

export default function mainAutoPage(){
   
    
       
    return (

        
        
        <div className="autoPage">
            
            <button autoQuote={() => {autoQuote()}} className="autoQuoteBtn">
             Quoting
            </button>
            <button className="autoBillingBtn">
            Billing
            </button>
            <button className="autoAccountBtn">
            Account Management
            </button>
        </div>
    )


    
}

