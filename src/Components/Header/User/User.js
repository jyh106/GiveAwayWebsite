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
    onSignOutClick() {
        localStorage.removeItem("username");
        localStorage.removeItem("userPosts");
        localStorage.removeItem("userID");
        this.props.userSignedOut();
        window.location.reload();
    }



    handleClick(modalName) {
        this.props.toggleModal(modalName, true);
    }



    renderUserIcon() {
        if (this.props.userInfo['isSignedIn']) {
            return (
                <div className="user userActive"> 
                    {this.props.userInfo['username'][0]}
                </div>
            )
        } 
        return (
            <div className="user">
                <FontAwesomeIcon icon="user-circle" 
                    className="icon_user" /> 
            </div>
        )
    }

    renderSignInAndOut() {
        if (this.props.userInfo['isSignedIn']) {
            return (
                <div className="userSignOut"
                    onClick={() => this.onSignOutClick()}>
                    Sign out
                </div>
            )
        }
        return (
            <div className="userSignIn"
            onClick={()=> this.handleClick('signIn')}>
                Sign in
            </div>
        )
    }
    
    render() {
        return (
            <div>
                {this.renderUserIcon()}
                {this.renderSignInAndOut()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        userInfo: Utils.getUserInfo(state),
        isSignInSuccessful: Utils.isSignInSuccessful(state)
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle) => {
            dispatch( Actions.toggleModal(type, toggle) )
        },
        userSignedOut: () => {
            dispatch( Actions.userSignedOut());
        }
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)