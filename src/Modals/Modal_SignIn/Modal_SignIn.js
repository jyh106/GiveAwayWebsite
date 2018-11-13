import React, { Component } from 'react';
import "./Modal_SignIn.css";
import { connect } from 'react-redux';
import OutsideClick from '../../OutsideClick';
// import Actions from "../../Actions/actions";

class ModalSignIn extends Component {
    render(){
        if(this.props.isModal_signIn_shown){
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
                    </div>
                </OutsideClick>
                )
        }
        return null
    }
}

function mapStateToProps(state) {
    return{
        isModal_signIn_shown: state.AppReducer.get('isModal_signIn_shown'),
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalSignIn)