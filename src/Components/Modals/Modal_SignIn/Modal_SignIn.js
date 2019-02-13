import React, { Component } from 'react';
import "./Modal_SignIn.css";
import { connect } from 'react-redux';
import OutsideClick from '../../../OutsideClick';
import Actions from "../../../Actions/actions";
import Utils from '../../../utils'

class ModalSignIn extends Component {
    renderForm() {
        return (
            <div className="signInForm-elementContainer">
                <div className="signInForm-element signInForm-username">
                    <div className="form_label">
                        Username:
                    </div> 
                    <input className="signInInput signInFormInput-username" placeHolder="email or phone number" />
                </div>
                <div className="signInForm-element signInForm-password">
                    <div className="form_label">
                        Password:
                    </div> 
                    <input className="signInInput signInFormInput-password"/>
                </div>
                <div className="signInForm-submit signInForm-element">
                    <div className="signInForm-submitLabel">
                        Log in
                    </div>
                </div>
            </div>
        )
    }
    render(){
        return(
            <OutsideClick>
                <div className="signInModal">
                    <div className="signInForm-header">
                        Log in
                    </div>
                    {this.renderForm()}
                    <div >
                        <a href="/signUp" className="signInForm-signUpButton" >
                            Don't have an account yet? 
                        </a>
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
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle)=>{
            dispatch(Actions.toggleModal(type, toggle))
        }
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalSignIn)