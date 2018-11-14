import React, { Component } from 'react';
import "./ModalSignUp.css";
import { connect } from 'react-redux';
import OutsideClick from '../../OutsideClick';
// import Actions from "../../Actions/actions";

class ModalSignUp extends Component {
    render(){
        if(this.props.modalShown.includes('signUp')){
            return(
                <OutsideClick>
                    <div className="form_signUp">
                        <div className="form_signUp_header">Create an account: </div>
                        <div className="signUp_username">
                            <div className="create_username">Username: </div> 
                            <input className="input_username"></input>
                            <div className="username_requirement">at least 6 letters long</div>
                        </div>
                        <div className="signUp_email">
                            <div className="create_email">Email: </div> 
                            <input className="input_email"></input>
                        </div>
                        <div className="button_submit">
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
        modalShown: state.ModalReducer.getIn(['modalShown']),
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalSignUp)