import React, {Component} from 'react'


export default class AutoQuotesPage extends Component{
    constructor(){
        super();

        this.state = {
            showMenu: false
        }

        this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event){
        event.preventDefault();
        this.setState({showMenu: true} , () => {
            document.addEventListener('click', this.closeMenu)
        })
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }

    render() {
        return (
            <div className="autoQuotesPageContainer">
                <div>
                    <button className="autoNew" onClick={this.showMenu}>
                    New Business
                </button>

                {
                    this.state.showMenu ? (
                        <div className="menu">
                        <li> Raw New Business</li>
                        <li> State to State</li>
        
                    </div>
                    ) : (
                        null
                    )
                }

                </div>
                




                <button className="autoExisting">
                    Existing Business
                </button>

              
    
               
    
            </div>
        );
    }

    
}