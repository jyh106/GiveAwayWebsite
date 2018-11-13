import React, { Component } from 'react';
import "./ModalNewForm.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";

class PostForm extends Component {
    getDate(){
        let date = new Date();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        return month + "/" + day + "/" +  year;
    }
    render() {
        if(this.props.modalShown.includes('newPost')){
            return(
                <div className="postForm">
                    <div className="form_header">
                        I Want To Give Away: 
                    </div>

                    <div className="postForm_question">
                        <div className="titles">
                            Title:
                        </div>
                        <input className="input_title"></input>
                    </div>

                    <div className="postForm_question">
                        <div className="titles">
                            Address(StreetName):
                        </div>
                        <input className="input_streetName" ></input>
                    </div>

                    <div className="postForm_question">
                        <div className="titles">
                            Address(apt): 
                        </div>
                        <input className="input_apt"></input>
                    </div>
                        

                    <div className="postForm_question">
                        <div className="titles">
                            City: 
                        </div>
                        <input className="input_city"></input>
                    </div>
                    

                    <div className="postForm_question">
                        <div className="titles">
                            Note: 
                        </div>
                        <textarea className="input_notes"></textarea>
                    </div>

                    <div className="post_date">
                        {this.getDate()}
                    </div>

                    <button className="button_cancel">
                        Cancel
                    </button>

                    <button className="button_submit">
                        Submit
                    </button>

                </div>
            )
         }
         return null;
    }
}

function mapStateToProps(state) {
    return {
        modalShown: state.ModalReducer.get('modalShown'),
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle) => {
            dispatch(Actions.toggleModal(type, toggle));
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostForm)


