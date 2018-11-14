import React, { Component } from 'react';
import "./ModalNewForm.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";

class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            'name': '',
            'address1': '',
            'address2': '',
            'address3': '',
            'note': '',
            'date': '',
        }
    }

    getDate(){
        let date = new Date();
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        let year = date.getUTCFullYear();
        return month + "/" + day + "/" +  year;
    }

    onChangeInput(type, answer){
        this.setState({
            [type]: answer,
        })
    }

    clearState(){
        this.setState({
            'name': '',
            'address1': '',
            'address2': '',
            'address3': '',
            'note': '',
            'date': '',
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

       this.props.addNewPost(postInfo)
       this.props.toggleModal('newForm', false)
       this.clearState();
    }

    render() {
        if(!this.props.modalShown.includes('newForm')){ 
            return null
        }
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

                <button className="newForm_buttons newFormButton_cancel">
                    Cancel
                </button>

                <button className="newForm_buttons newFormButton_submit" onClick={()=> this.handleSubmit()}>
                    Submit
                </button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modalShown: state.Modal.get('modalShown'),
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


