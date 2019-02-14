import React, { Component } from 'react';
import "./Modal_SignIn.css";
import { connect } from 'react-redux';
import OutsideClick from '../../../OutsideClick';
import Actions from "../../../Actions/actions";
import Utils from '../../../utils'

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
        this.props.toggleModal('signIn', false)
    }

    renderForm() {
        return (
            <div className="signInForm-elementContainer">
                <div className="signInForm-element signInForm-username">
                    <div className="form_label">
                        Username:
                    </div> 
                    <input className="signInInput signInFormInput-username" 
                        placeholder="email or phone number" 
                        onChange={(e)=> this.setState({username: e.target.value})}/>
                </div>
                <div className="signInForm-element signInForm-password">
                    <div className="form_label">
                        Password:
                    </div> 
                    <input className="signInInput signInFormInput-password" type="password" 
                        onChange={(e)=> this.setState({password: e.target.value})}/>
                </div>
                <div className="signInForm-submit signInForm-element">
                    <div className="signInForm-submitLabel"
                        onClick={()=> this.onSignInClicked()}>
                        Log in
                    </div>
                </div>
            </div>
        )
    }

    handleSignUpClick() {
        this.props.toggleModal('signIn', false);
        this.props.toggleModal('signUp', true);
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