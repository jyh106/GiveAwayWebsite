import React, { Component } from 'react';
import "./User.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import Actions from "../../../Actions/actions.js";
import Utils from '../../../utils.js';
library.add(faUserCircle)

class User extends Component {
    onSignOutClick() {
        this.props.userSignedOut();
        window.location.reload();
    }

    renderUserIcon() {
        if (this.props.userInfo['isSignedIn']) {
            const firstLetterOfUsername = this.props.userInfo['username'][0];
            return (
                <div className="user userActive"> 
                    {firstLetterOfUsername}
                </div>
            )
        } 
        return (
            <div className="user">
                <FontAwesomeIcon icon="user-circle" className="icon_user" /> 
            </div>
        )
    }

    renderSignInOrOut() {
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
                onClick={()=> this.props.toggleModal('signIn', true)}>
                Sign in
            </div>
        )
    }
    
    render() {
        return (
            <div>
                {this.renderUserIcon()}
                {this.renderSignInOrOut()}
            </div>
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
        },
        userSignedOut: () => {
            dispatch(Actions.userSignedOut());
        }
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)