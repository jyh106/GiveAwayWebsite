import React, { Component } from 'react';
import "./User.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import Actions from "../../../Actions/actions.js";
import { BrowserRouter } from 'react-router-dom';
import Utils from '../../../utils.js';
library.add(faUserCircle)

class User extends Component {
    constructor() {
        super();
        this.state = {
            accountDropDownMenuShown: false,
        }
    }

    onSignOutClick() {
        localStorage.removeItem("username");
        window.location.reload();
    }

    renderSignedInAccountMenu() {
        return (
            <div className="accountDropDownMenu signedInMenu"
            onMouseLeave={()=>this.hideModal()}>
                <div className="account_header">
                    {this.props.userInfo['username']}
                </div>
                <div className="account_profile accountMenuItem">
                    Profile
                </div>
                <div className="account_settings accountMenuItem">
                    <a href="/settings">
                        Settings
                    </a>
                </div>
                <div className="account_signOut accountMenuItem"
                    onClick={() => this.onSignOutClick()}>
                    Sign out
                </div>
            </div>
        )
    }

    hideModal() {
        this.setState({
            accountDropDownMenuShown: false,
        })
    }

    handleClick(modalName) {
        this.hideModal();
        this.props.toggleModal(modalName, true);
    }

    renderNotSignedInAccountMenu() {
        return (
            <div className="accountDropDownMenu notSignedInMenu"
                onMouseLeave={()=>this.hideModal()}>
                <div className="account_header">
                    Welcome!
                </div>
                <div className="account_logIn accountMenuItem"
                    onClick={()=> this.handleClick('signIn')}>
                    Log in
                </div>
                <div className="accountMenuItem"
                    onClick={()=> this.handleClick('signUp')}>
                    Don't have an account yet?
                </div>
            </div>
        )
    }

    renderAccountDropdownMenu() {
        if (!this.state.accountDropDownMenuShown) {
            return null
        } else {
            if (!this.props.userInfo['isSignedIn']) {
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
        return (
            <BrowserRouter>
            <div>
                <div className="user">
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
        userInfo: Utils.getUserInfo(state),
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
)(User)