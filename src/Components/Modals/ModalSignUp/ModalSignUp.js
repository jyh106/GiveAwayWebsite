import React, { Component } from 'react';
import "./ModalSignUp.css";
import { connect } from 'react-redux';
import OutsideClick from '../../../OutsideClick';
import Utils from '../../../utils.js';
import Actions from '../../../Actions/actions.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons'
library.add(faUserCircle, faLock)

class ModalSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        }
    }

    renderSignUpForm() {
        return (
            <div className="signUpForm-elementContainer">
                <div className="signUpForm-element signUpForm-username">
                    <FontAwesomeIcon className="signUpForm-icon" icon="user-circle" />
                    <input className="signUpForm-input signUpForm-username-input"
                            placeholder="email or mobile phone"
                            onChange={(e) => this.setState({'username': e.target.value})}>
                    </input>
                </div>
                <div className="signUpForm-element signUpForm-password">
                    <FontAwesomeIcon className="signUpForm-icon" icon="lock" />
                    <input className='signUpForm-input signUpForm-password-input'
                        type="password"
                        onChange={(e) => this.setState({'password': e.target.value})}
                        placeholder="password">
                    </input>
                </div>
                <div className="signUpForm-element signUpForm-password-confirm">
                    <FontAwesomeIcon className="signUpForm-icon" icon="lock" />
                    <input className="signUpForm-input signUpForm-password-confirm-input"
                        type="password"
                        onChange={(e) => this.setState({'confirmPassword': e.target.value})}
                        placeholder="confirm password">
                    </input>
                </div>
        </div>
        )
    }

    handleSignInClick() {
        this.props.toggleModal('signUp', false);
        this.props.toggleModal('signIn', true);
    }

    handleSignUpClick() {
        if (this.state.password !== this.state.confirmPassword) {
            // TODO have better error handling
            alert("you fucked up");
        } else {
            this.props.onSignUpClick({
                username: this.state.username,
                password: this.state.password,
            });
        }
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
                        <div className="signUpForm-signUpButton"
                            onClick={() => this.handleSignUpClick()}>
                            Sign up
                        </div>
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
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
        toggleModal: (modalType, toggle) => {
            dispatch(Actions.toggleModal(modalType, toggle))
        },
        onSignUpClick: (data) => {
            dispatch(Actions.onSignUpClick(data))
        }
    }
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalSignUp)