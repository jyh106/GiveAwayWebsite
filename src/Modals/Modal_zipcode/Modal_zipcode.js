import React, { Component } from 'react';
import "./Modal_zipcode.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import OutsideClick from '../../OutsideClick';


class ModalZipCode extends Component {
    submitInput(e) {
        const inputValue = e.target.value;
        const code = (e.key)
        if ( (inputValue) && (code === "Enter") )  {
            this.props.toggleModal('zipcode', false)
            this.props.updateUserLocation(inputValue);
        }
    }


    render() {
        if (this.props.modalShown.includes('zipcode')) {
            return (
            <OutsideClick>
                <div className="modal">
                    <div className="modal_question">Please enter your zip code: </div>
                     <input className="input_zipCode" type="number" onKeyDown={(e)=>this.submitInput(e)}></input>
                    <div className="modal_skipButton" onClick={()=>this.props.toggleModal('zipcode', false)}>skip</div>
                </div>
            </OutsideClick>
            )
        }
        return null;
    }
    
}

function mapStateToProps(state) {
    return{
        modalShown: state.AppReducer.getIn(['modalShown']),
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle) => {
            dispatch( Actions.toggleModal(type, toggle) )
        },
        updateUserLocation: (location) => {
            dispatch(Actions.updateUserLocation(location))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalZipCode)