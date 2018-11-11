import React, { Component } from 'react';
import "./Modal.css";
import { connect } from 'react-redux';


class Modal extends Component {

    renderModal() {
        if(this.props.isModalShown){
            return (
                <div className="modal">
                    Select city
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