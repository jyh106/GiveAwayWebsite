import React, { Component } from 'react';
import "./Header.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import SearchBox from './SearchBox/SearchBox.js';
import { BrowserRouter } from 'react-router-dom';

library.add(faUserCircle) 

class Header extends Component {
    constructor() {
        super();
        this.state = {
            accountDropDownMenuShown: false,
            isUserSignedIn: true,
            username: "Hera",
        }
    }

    renderSignedInAccountMenu() {
        return (
            <div className="accountDropDownMenu signedInMenu">
                <div className="account_header">
                    {this.state.username}
                </div>
                <div className="account_profile accountMenuItem">
                    Profile
                </div>
                <div className="account_settings accountMenuItem">
                    Settings
                </div>
                <div className="account_signOut accountMenuItem">
                    Sign out
                </div>
            </div>
        )
    }

    renderNotSignedInAccountMenu() {
        return (
            <div className="accountDropDownMenu notSignedInMenu">
                <div className="account_header">
                    Welcome!
                </div>
                <div className="account_logIn accountMenuItem">
                    Log in
                </div>
                <div className="account_signUp accountMenuItem">
                    Don't have an account
                </div>
            </div>
        )
    }

    renderAccountDropdownMenu() {
        if (!this.state.accountDropDownMenuShown) {
            return null
        } else {
            if (!this.state.isUserSignedIn) {
                return this.renderNotSignedInAccountMenu();
            } else {
                return this.renderSignedInAccountMenu();
            }
        }
    }

    toggleAccountMenu() {
        this.setState({
            accountDropDownMenuShown: !this.state.accountDropDownMenuShown,
        })
    }

    render() {
        return(
            <BrowserRouter>
            <div className="header">
                <a href="/about">
                    <div className="header_name"> 
                        GiveAway 
                    </div>
                </a>
                <div className="user">
                    <SearchBox />
                    <FontAwesomeIcon icon="user-circle" 
                                    className="icon_user" 
                                    onClick={ ()=> this.toggleAccountMenu()} /> 
                </div>
                {this.renderAccountDropdownMenu()}
            </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return{
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle) => {
            dispatch( Actions.toggleModal(type, toggle) )
        }
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)