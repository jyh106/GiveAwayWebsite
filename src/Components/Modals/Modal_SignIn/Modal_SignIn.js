import React, { Component } from 'react';
import "./Modal_SignIn.css";
import { connect } from 'react-redux';
import OutsideClick from '../../../OutsideClick';
import Actions from "../../../Actions/actions";
import Utils from '../../../utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faExclamationCircle)

class ModalSignIn extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
        }
    }

    onSignInClicked() {
        this.props.onSignInClicked(this.state);
    }

    handleSignUpClick() {
        this.props.toggleModal('signIn', false);
        this.props.toggleModal('signUp', true);
    }

    renderSignInErrorMsg() {
        if (this.props.isSignInSuccessful) {
           return null
        }
        return (
            <div className="signInErrorMsg">
                <FontAwesomeIcon icon="exclamation-circle" className="icon-exlamation" />
                The username or password you entered is incorrect
            </div>
        )
    }


    handlePassword(e) {
        //handle Enter key pressed after finishing typing password
        if (e.key === 'Enter') {
            this.onSignInClicked();
        }
    }

    renderForm() {
        return (
            <div className="signInForm-elementContainer">
                <div className="signInForm-element signInForm-username">
                    <div className="form_label">
                        Username:
                    </div> 
                    <input className="signInInput signInFormInput-username" 
                        placeholder="user ID" 
                        onChange={(e)=> this.setState({username: e.target.value})}/>
                </div>
                <div className="signInForm-element signInForm-password">
                    <div className="form_label">
                        Password:
                    </div> 
                    <input className="signInInput signInFormInput-password" type="password" 
                        onChange = {(e)=> this.setState({password : e.target.value})}
                        onKeyPress={(e)=>this.handlePassword(e)}/>
                </div>
                {this.renderSignInErrorMsg()}
                <div className="signInForm-submit signInForm-element">
                    <button className= "signInForm-submitLabel"
                        onClick={()=> this.onSignInClicked()}
                        disable={!this.props.isSignInSuccessful}>
                        Log in
                    </button>
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
                    <div className="signInForm-signUpButton" 
                        onClick={()=>this.handleSignUpClick()}>
                        Don't have an account yet? 
                    </div>
                </div>
            </OutsideClick>
        )
    }
}

function mapStateToProps(state) {
    return{
        modalShown: Utils.getShowingModals(state),
        isSignInSuccessful: Utils.isSignInSuccessful(state),
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle)=>{
            dispatch(Actions.toggleModal(type, toggle))
        },
        onSignInClicked: (data)=> {
            dispatch(Actions.onSignInClick(data))
        }
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalSignIn)