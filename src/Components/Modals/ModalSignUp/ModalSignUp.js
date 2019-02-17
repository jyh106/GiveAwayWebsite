import React, { Component } from 'react';
import "./ModalSignUp.css";
import { connect } from 'react-redux';
import OutsideClick from '../../../OutsideClick';
import Utils from '../../../utils.js';
import Actions from '../../../Actions/actions.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faLock , faExclamationCircle} from '@fortawesome/free-solid-svg-icons'
library.add(faUserCircle, faLock, faExclamationCircle)

class ModalSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        }
    }

    renderUsernameErrorMessage() {
        if (!this.props.isUsernameValid) {
            return (
                <div className="usernameErrorMsg signUpErrorMsg">
                    <FontAwesomeIcon icon="exclamation-circle" className="signUp-exclamation-icon"/>
                    username already taken, please choose another
                </div>
            )
        } else if (!this.state.username) {
            return (
                <div className="usernameErrorMsg signUpErrorMsg">
                    <FontAwesomeIcon icon="exclamation-circle" className="signUp-exclamation-icon"/>
                    must fill out username
                </div>
            )
        }
    }

    renderPasswordErrorMessage() {
        if (!this.state.password) {
            return (
                <div className="passwordErrorMsg signUpErrorMsg">
                    <FontAwesomeIcon icon="exclamation-circle" className="signUp-exclamation-icon"/>
                    must fill out password
                </div>
            )
        }
    }

    renderUnmatchPasswordErrorMessage() {
        if (!this.state.confirmPassword) {
            return (
                <div className="unmatchPasswordErrorMsg signUpErrorMsg">
                    <FontAwesomeIcon icon="exclamation-circle" className="signUp-exclamation-icon"/>
                   must confirm password
                </div>
            )
        } else if (this.state.password !== this.state.confirmPassword) {
            return (
                <div className="unmatchPasswordErrorMsg signUpErrorMsg">
                    <FontAwesomeIcon icon="exclamation-circle" className="signUp-exclamation-icon"/>
                    password does not match
                </div>
            )
        }
    }

    handleSignInClick() {
        this.props.toggleModal('signUp', false);
        this.props.toggleModal('signIn', true);
    }


    handleSignUpClick() {
        this.props.onSignUpClick({
            username: this.state.username,
            password: this.state.password,
        });
        this.props.toggleModal('signUp', false)
    }

    isSubmitButtonEnable() {
        //need to check whether they are empty or not in addition to checking their values
        return ((this.props.isUsernameValid && this.state.username)
                && (this.state.password === this.state.confirmPassword)
                && (this.state.password && this.state.confirmPassword))
    }

    handleEnterKeyPressed(e) {
        if (e.key === 'Enter') {
            this.handleSignUpClick()
        }
    }


    renderSignUpForm() {
        return (
            <div className="signUpForm-elementContainer">
                <div className="signUpForm-element signUpForm-username">
                    <FontAwesomeIcon className="signUpForm-icon" icon="user-circle" />
                    <input className="signUpForm-input signUpForm-username-input"
                            placeholder="username"
                            onChange={(e) => this.setState({'username': e.target.value})}
                            onBlur = {(e) => this.props.validateUsernameBackend(e.target.value)}>
                    </input>
                </div>
                {this.renderUsernameErrorMessage()}
                <div className="signUpForm-element signUpForm-password">
                    <FontAwesomeIcon className="signUpForm-icon" icon="lock" />
                    <input className='signUpForm-input signUpForm-password-input'
                        type="password"
                        onChange={(e) => this.setState({'password': e.target.value})}
                        placeholder="password">
                    </input>
                </div>
                {this.renderPasswordErrorMessage()}
                <div className="signUpForm-element signUpForm-password-confirm">
                    <FontAwesomeIcon className="signUpForm-icon" icon="lock" />
                    <input className="signUpForm-input signUpForm-password-confirm-input"
                        type="password"
                        onChange={(e) => this.setState({'confirmPassword': e.target.value})}
                        onKeyPress={(e) => this.handleEnterKeyPressed(e)}
                        placeholder="confirm password">
                    </input>
                </div>
                {this.renderUnmatchPasswordErrorMessage()}
        </div>
        )
    }


    render(){
        return(
            <OutsideClick>
                <div className="form_signUp">
                    <div className="form_signUp_header">
                        Create an account:
                    </div>
                    {this.renderSignUpForm()}
                    <div className="signUpForm-signUpSubmit">
                        <button className={`${this.isSubmitButtonEnable() ? 'signUpForm-signUpButtonActive' : ""} signUpForm-signUpButton`}
                            onClick={() => this.handleSignUpClick()}
                            disabled={!this.isSubmitButtonEnable()}>
                            Sign up
                        </button>
                    </div>
                    <div className="signUpForm-alreadyHaveAccount"
                        onClick={()=> this.handleSignInClick()}>
                        Already have an account?
                    </div>
                </div>
            </OutsideClick>
        )
    }
}

function mapStateToProps(state) {
    return{
        modalShown: Utils.getShowingModals(state),
        isUsernameValid: Utils.getUsernameValidation(state),
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        toggleModal: (modalType, toggle) => {
            dispatch(Actions.toggleModal(modalType, toggle))
        },
        onSignUpClick: (data) => {
            dispatch(Actions.onSignUpClick(data))
        },
        validateUsernameBackend: (username) => {
            dispatch(Actions.validateUsernameBackend(username))
        }
    }
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalSignUp)