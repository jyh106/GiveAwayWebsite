import React, { Component } from 'react';
import "./Modal_SignIn.css";
import { connect } from 'react-redux';
import OutsideClick from '../../OutsideClick';
import Actions from "../../Actions/actions";

class ModalSignIn extends Component {
    render(){
        if(this.props.modalShown.includes('signIn')){
            return(
                <OutsideClick>
                    <div className="form_signIn">
                        <div className="form_signIn_header">Sign In </div>
                        <div className="form_username">
                            <div className="username">Username: </div> 
                            <input className="input_username"></input>
                        </div>
                        <div className="form_email">
                            <div className="email">Email: </div> 
                            <input className="input_email"></input>
                        </div>
                        <div className="form_signIn_submit">
                            submit
                        </div>
                        <div className="form_signUp_button" 
                            onClick={()=>{this.props.toggleModal('signIn', false) ;this.props.toggleModal('signUp', true)}}>
                            Don't have an account yet? 
                        </div>
                    </div>
                </OutsideClick>
                )
        }
        return null
    }
}

function mapStateToProps(state) {
    return{
        modalShown: state.ModalReducer.getIn(['modalShown']),
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