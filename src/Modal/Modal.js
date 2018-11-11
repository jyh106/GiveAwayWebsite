import React, { Component } from 'react';
import "./Modal.css";
import { connect } from 'react-redux';
import Actions from "../Actions/actions.js";


class Modal extends Component {
    submitInput(e) {
        let inputValue = e.target.value;
        let code = (e.key)
        if((inputValue) && (code === "Enter")){
            return this.props.hideModal()
        }
        return null;
    }
    renderModal() {
        if(this.props.isModalShown){
            return (
                <div className="modal">
                    <div className="modal_question">Please enter your zip code: </div>
                     <input className="input_zipCode" type="number" onKeyDown={(e)=>this.submitInput(e)}></input>
                    <div className="modal_skipButton" onClick={()=>this.props.hideModal()}>skip</div>
                </div>
            )
        }
        return null;
    }

    render() {
        return (
           this.renderModal()
        )
    }
    
}

function mapStateToProps(state){
    return{
        isModalShown: state.AppReducer.get('isModalShown'),
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        hideModal: () => {
            dispatch(Actions.hideModal())
        }
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Modal)