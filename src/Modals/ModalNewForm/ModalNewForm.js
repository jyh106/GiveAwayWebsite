import React, { Component } from 'react';
import "./ModalNewForm.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";


class PostForm extends Component {
    constructor() {
        super();
        this.state = {
            'name': '',
            'address_street': '',
            'address_apt': '',
            'address_city': '',
            'note': '',
            'date': '',
        }
    }

    isSubmitButtonEnable(){
        return ((this.state.name.length > 0) && (this.state.address_street.length > 0) && (this.state.address_city.length > 0))
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
            'address_street': '',
            'address_apt': '',
            'address_city': '',
            'note': '',
            'date': '',
        })
    }

    handleSubmit(){
        const address = `${this.state.address_street} ${this.state.address_apt}, ${this.state.address_city}`
        const postInfo = {
           'date': this.getDate(),
           'name': this.state.name,
           'address': address,
           'note': this.state.note
       }
       if(this.isSubmitButtonEnable()){
        this.props.addNewPost(postInfo)
        this.props.toggleModal('newForm', false)
        this.clearState();
       }
       return null;
    }

    checkInput(value){
        if(value.length > 0 ){
            return ""
        }
        return "value_invalid"
    }

    render() {
        if(!this.props.modalShown.includes('newForm')){ 
            return null
        }
        return(
        <form>
            <div className="newPostForm">
                <div className="form_header">
                    I Want To Give Away: 
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        Item(s):
                    </div>
                    <input type="form_name" className={`input_title ${this.checkInput(this.state.name)}`} 
                            onChange={(e)=>this.onChangeInput('name', e.target.value)}>
                    </input>
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        At(streetName):
                    </div>
                    <input className={`input_streetName ${this.checkInput(this.state.address_street)}`} 
                            onChange={(e)=>this.onChangeInput('address_street', e.target.value)}>
                    </input>
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        At(apt): 
                    </div>
                    <input className="input_apt" onChange={(e)=>this.onChangeInput('address_apt', e.target.value)}></input>
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        In(city): 
                    </div>
                    <input className={`input_city ${this.checkInput(this.state.address_city)}`}   onChange={(e)=>this.onChangeInput('address_city', e.target.value)}></input>
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

                <button className="newForm_buttons newFormButton_cancel"
                        onClick={()=> this.props.toggleModal('newForm', false)}>
                    Cancel
                </button>

                <button className={`newForm_buttons newFormButton_submit ${(this.isSubmitButtonEnable()) ? "submit_enable" : "submit_disable"}`} 
                        onClick={()=> this.handleSubmit()}
                        disabled={!this.isSubmitButtonEnable()}>
                    Submit
                </button>
            </div>
        </form>
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


