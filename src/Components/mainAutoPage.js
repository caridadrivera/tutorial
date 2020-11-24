import React, {Component} from 'react';
import {  Link } from 'react-router-dom';
import AutoQuotePage from './autoQuotePage'

export default class MainAutoPage extends Component {


    constructor(props){
        super(props)
        this.state = {isEmptyState: true}
    }

    
    
    
      
    render() {
        const autoQuote = 'Quoting';
        const autoBilling = 'Billing/Payments';
        const autoAccountMngmt = 'Policy Docs';
        const changes = 'Changes';
        const discounts = 'Discounts';
        const coverage = 'Coverage'; 
       
        return (

            <div className="autoPage">  
                <button className="autoQuoteBtn"> 
                 <Link to="autoPage"> {autoQuote} </Link>
                </button>

                <button className="autoBillingBtn">
                 {autoBilling}
                </button>

                <button className="autoAccountBtn">
                {autoAccountMngmt}
                </button>

                <button className="changes">
                {changes}
                </button>

                <button className="discounts">
                {discounts}    
                </button>

                <button className="coverages">
                {coverage}    
                </button>

            </div>
                )

    }
 
}

