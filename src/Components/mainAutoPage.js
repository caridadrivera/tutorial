import React, {Component} from 'react';



export default class MainAutoPage extends Component {


    state = {
        buttonIsShowing: true
    }

    
    
    //  getAutoQuote = () =>{
    //     const quotingButton = document.querySelector('.autoQuoteBtn')
    //     quotingButton.addEventListener('click', (e) => {
    //     e.preventDefault();
        
    //    })
    // };
    
      
    render() {
        const autoQuote = 'Quoting';
        const autoBilling = 'Billing';
        const autoAccountMngmt = 'Policy Docs';
        const discounts = 'Discounts';
        const changes = 'Changes';



       
       
        return (


          
    
            <div className="autoPage">  
                <button className="autoQuoteBtn">
                {autoQuote}    
                </button>

                <button className="autoBillingBtn">
                {autoBilling}
                </button>

                <button className="autoAccountBtn">
                {autoAccountMngmt}
                </button>


                <button className="discounts">
                {discounts}    
                </button>

                <button className="changes">
                {changes}
                </button>



            </div>
                )

    }
 
}

