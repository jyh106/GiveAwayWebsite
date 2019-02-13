import React, { Component } from 'react';
import "./ModalSignUp.css";
import { connect } from 'react-redux';
import OutsideClick from '../../../OutsideClick';
import Utils from '../../../utils.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons'
library.add(faUserCircle, faLock)

class ModalSignUp extends Component {
    renderSignUpForm() {
        return (
            <div className="signUpForm-elementContainer">
                <div className="signUpForm-element signUpForm-username">
                    <FontAwesomeIcon className="signUpForm-icon" icon="user-circle" />
                    <input className="signUpForm-input signUpForm-username-input"
                            placeholder="email or mobile phone">
                    </input>
                </div>
                <div className="signUpForm-element signUpForm-password">
                    <FontAwesomeIcon className="signUpForm-icon" icon="lock" />
                    <input className='signUpForm-input signUpForm-password-input'
                        placeholder="password">
                    </input>
                </div>
                <div className="signUpForm-element signUpForm-password-confirm">
                    <FontAwesomeIcon className="signUpForm-icon" icon="lock" />
                    <input className="signUpForm-input signUPForm-password-confirm-input"
                            placeholder="confirm password">
                    </input>
                </div>
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
                        <div className="signUpForm-signUpButton">
                            Sign up
                        </div>
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
    }
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalSignUp)