import React from 'react';


function getAutoQuote(){
    const quotingButton = document.querySelector('.autoQuoteBtn')
    quotingButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('I have been clicked.')
   })

}


export default function mainAutoPage(){
   
    const autoQuote = 'Quoting'
    const autoBilling = 'Billing';
    const autoAccountMngmt = 'Account Management';
   
       
    return (

        
        
        <div className="autoPage">
            
            <button onClick={getAutoQuote} className="autoQuoteBtn">
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

