import React, { Component } from 'react';
import "./NewForm.css";
import { connect } from 'react-redux';
import Actions from "../Actions/actions";
import { BrowserRouter } from 'react-router-dom';
import Utils from '../utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Constants from '../constants';
library.add(faArrowLeft)

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
            'images': []
        }
    }

    isSubmitButtonEnable(){
        return ((this.state.name.length > 0) && (this.state.address_street.length > 0) && (this.state.address_city.length > 0))
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
            'image': []
        })
    }

    handleSubmit(){
        const address = `${this.state.address_street} ${this.state.address_apt}, ${this.state.address_city}`
        const postInfo = {
           'date': Utils.getDate(),
           'name': this.state.name,
           'address': address,
           'note': this.state.note,
           'images': this.state.images
       }
        this.props.addNewPost(postInfo)
        this.clearState();
    }

    getErrorMessage(value){
        if (value.length > 0) {
            return ""
        }
        return "value_invalid"
    }

    renderHeader(){
        return (
            <div className="newFormHeader_label">
                I Want To Give Away: 
            </div>
        )
    }

    renderQuestion_name() {
        return (
            <div className="newForm_question question_name">
                <div className="questionLabel">
                    Item(s):
                </div>
                <input type="form_name" className={`input_title newFormInput ${this.getErrorMessage(this.state.name)}`} 
                        onChange={(e)=>this.onChangeInput('name', e.target.value)}
                        maxLength='25'>
                </input>
                <p className="maxCharacterLabel">max characters: {25 - this.state.name.length}</p>
            </div>
        )
    }

    renderQuestion_category() {
        const categories = [];
        for (let category of Constants.CATEGORY_LIST) {
            categories.push(
                <option value={category}>{category}</option>
            )
        }
        return (
            <div className="newForm_question question_name">
                <div className="questionLabel">
                    Item category:
                </div>
                <select>
                    {categories}
                </select>
            </div>
        )
    }

    renderQuestion_street() {
        return (
            <div className="newForm_question question_street">
                <div className="questionLabel">
                    At (street):
                </div>
                <input className={`input_streetName newFormInput ${this.getErrorMessage(this.state.address_street)}`} 
                        onChange={(e)=>this.onChangeInput('address_street', e.target.value)}>
                </input>
            </div>
        )
    }

    renderQuestion_apt() {
        return (
            <div className="newForm_question question_apt">
                <div className="questionLabel">
                    At (apt): 
                </div>
                <input className="input_apt newFormInput" onChange={(e)=>this.onChangeInput('address_apt', e.target.value)}></input>
            </div>
        )
    }

    renderQuestion_city() {
        return (
            <div className="newForm_question question_city">
                <div className="questionLabel">
                    In:  
                </div>
                <select className={`citySelection ${this.getErrorMessage(this.state.address_city)} `} 
                        onChange={(e)=>this.onChangeInput('address_city', e.target.value)}>
                    <option value="">Select city</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Oakland">Oakland</option>
                    <option value="Berkeley">Berkeley</option>
                    <option value="San Bruno">San Bruno</option>
                    <option value="Burlingame">Burlingame</option>
                </select>
            </div>
        )
    }

    renderQuestion_images() {
        // TODO find out how to display selected files
        return (
            <div className="newForm_question question_images">
                <div className="questionLabel question_images_label">
                    Images: 
                </div>
                <label for="post-images-upload" className="questionLabel select_button_label">
                    Select images
                </label>
                <input id="post-images-upload" 
                        type="file" 
                        accept="image/png, image/jpeg, image/jpg" 
                        onChange={(e)=>this.onChangeInput('images', this.state.images + e.target.value)}/>
            </div>
        )
    }


    renderQuestion_note() {
        return (
            <div className="newForm_question question_note">
                <div className="questionLabel">
                    Note: 
                </div>
                <textarea className="input_notes newFormInput"  onChange={(e)=>this.onChangeInput('note', e.target.value)} ></textarea>
            </div>
        )
    }

    renderQuestions() {
        return(
            <div className="newForm_questionContainer">
                <div className="newForm_questionWrapper">
                    {this.renderQuestion_name()}
                    {this.renderQuestion_category()}
                    {this.renderQuestion_street()}
                    {this.renderQuestion_apt()}
                    {this.renderQuestion_city()}
                    {this.renderQuestion_images()}
                    {this.renderQuestion_note()}
                </div>
            </div>
        )
    }

    renderButtons(){
        return(
            <div>
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
        )
    }

    render() {
        return(
        <BrowserRouter>
        <div className="newForm_PageContainer">

            <div className="newForm_header">
                {this.renderHeader()}
                <div className="button_home">
                    <a href="/">
                        <FontAwesomeIcon icon="arrow-left" className="icon_leftArrow" />
                        Home
                    </a>
                </div>
            </div>

            <div className="newPost_FormContainer">
                {this.renderQuestions()}
                <div className="post_date">
                    {Utils.getDate()}
                </div>
                {this.renderButtons()}
            </div>

        </div>
        </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return state
  }

function mapDispatchToProps(dispatch) {
    return {
        addNewPost: (postInfo) => {
            dispatch(Actions.addNewPost(postInfo));
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostForm)


