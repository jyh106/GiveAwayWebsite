import React, { Component } from 'react';
import "./ModalNewForm.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    getDate(){
        let date = new Date();
        var month = date.getUTCMonth() + 1;
        var day = date.getUTCDate();
        var year = date.getUTCFullYear();
        return month + "/" + day + "/" +  year;
    }

    onChangeInput(type, answer){
        this.setState({
            [type]: answer,
        })
    }

    handleSubmit(){
        let address = `${this.state.address1}, ${this.state.address2}, ${this.state.address3}`
       let postInfo = {
           'date': this.getDate(),
           'name': this.state.name,
           'address': address,
           'note': this.state.note
       }
       this.props.toggleModal('newForm', false)
       return postInfo
    }

    render() {
        if(this.props.modalShown.includes('newForm')){
            return(
                <div className="newPostForm">
                    <div className="form_header">
                        I Want To Give Away: 
                    </div>

                    <div className="postForm_question">
                        <div className="titles">
                            Title:
                        </div>
                        <input className="input_title" onChange={(e)=>this.onChangeInput('name', e.target.value)} ></input>
                    </div>

                    <div className="postForm_question">
                        <div className="titles">
                            Address(StreetName):
                        </div>
                        <input className="input_streetName" onChange={(e)=>this.onChangeInput('address1', e.target.value)}></input>
                    </div>

                    <div className="postForm_question">
                        <div className="titles">
                            Address(apt): 
                        </div>
                        <input className="input_apt" onChange={(e)=>this.onChangeInput('address2', e.target.value)}></input>
                    </div>

                    <div className="postForm_question">
                        <div className="titles">
                            City: 
                        </div>
                        <input className="input_city"  onChange={(e)=>this.onChangeInput('address3', e.target.value)} ></input>
                    </div>
                    

                    <div className="postForm_question">
                        <div className="titles">
                            Note: 
                        </div>
                        <textarea className="input_notes"  onChange={(e)=>this.onChangeInput('note', e.target.value)} ></textarea>
                    </div>

                    <div className="post_date">
                        {this.getDate()}
                    </div>

                    <button className="button_cancel">
                        Cancel
                    </button>

                    <button className="button_submit" onClick={()=> this.props.addNewPost(this.handleSubmit())}>
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
        },
        addNewPost: (postInfo) => {
            dispatch(Actions.addNewPost(postInfo));
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostForm)


