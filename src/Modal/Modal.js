import React, { Component } from 'react';
import "./Modal.css";
import { connect } from 'react-redux';
import Actions from "../Actions/actions.js";


class Modal extends Component {
    submitInput(e) {
        const inputValue = e.target.value;
        const code = (e.key)
        if ( (inputValue) && (code === "Enter") )  {
            this.props.toggleModal(false)
            this.props.updateUserLocation(inputValue);
        }
    }


    render() {
        if (this.props.isModalShown) {
            return (
                <div className="modal">
                    <div className="modal_question">Please enter your zip code: </div>
                     <input className="input_zipCode" type="number" onKeyDown={(e)=>this.submitInput(e)}></input>
                    <div className="modal_skipButton" onClick={()=>this.props.toggleModal(false)}>skip</div>
                </div>
            )
        }
        return null;
    }
    
}

function mapStateToProps(state) {
    return{
        isModalShown: state.AppReducer.get('isModalShown'),
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (toggle) => {
            dispatch( Actions.toggleModal(toggle) )
        },
        updateUserLocation: (location) => {
            dispatch(Actions.updateUserLocation(location))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Modal)