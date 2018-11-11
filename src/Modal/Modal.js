import React, { Component } from 'react';
import "./Modal.css";
import { connect } from 'react-redux';


class Modal extends Component {

    renderModal() {
        if(this.props.isModalShown){
            return (
                <div className="modal">
                    <div className="modal_question">Please enter your zip code: </div>
                     <input className="input_zipCode" maxLength="5" type="number"></input>
                    <div className="modal_skipButton">skip</div>
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
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Modal)