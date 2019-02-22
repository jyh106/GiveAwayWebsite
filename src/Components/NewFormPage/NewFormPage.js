import React, { Component } from 'react';
import "./NewFormPage.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Constants from '../../constants';
library.add(faArrowLeft)

class NewFormPage extends Component {
    constructor() {
        super();
        this.homeRef = React.createRef();
        this.state = {
            'name': '',
            'address_street': '',
            'address_apt': '',
            'address_city': '',
            'note': '',
            'images': [],
            'category': ''
        }
    }

    isSubmitButtonEnable(){
        return ((this.state.name.length > 0) 
                && (this.state.address_street.length > 0) 
                && (this.state.address_city.length > 0)
            )
    }


    onInputChange(type, answer){
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
            'images': [],
            'category': ''
        })
    }

    formatAddress() {
        return `${this.state.address_street} ${this.state.address_apt},${this.state.address_city}`
    }

    handleSubmit(e){
        e.stopPropagation();
        const postInfo = {
           'name': this.state.name,
           'address': this.formatAddress(),
           'note': this.state.note,
           'images': this.state.images,
           'category': this.state.category
       }
        this.props.addNewPost(postInfo);
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
                        onChange={(e)=>this.onInputChange('name', e.target.value)}
                        maxLength='25'>
                </input>
                <p className="maxCharacterLabel">max characters: {13 - this.state.name.length}</p>
            </div>
        )
    }

    renderQuestion_category() {
        const categories = [];
        categories.push(
            <option value="" key="default value">Select category</option>
        )
        for (let category of Constants.CATEGORY_LIST) {
            categories.push(
                <option value={category} key={category}>{category}</option>
            )
        }
        return (
            <div className="newForm_question question_name">
                <div className="questionLabel">
                    Item category:
                </div>
                <select className={`categorySelection ${this.getErrorMessage(this.state.category)} `} 
                        onChange={(e)=>this.onInputChange('category', e.target.value)}>
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
                        onChange={(e)=>this.onInputChange('address_street', e.target.value)}>
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
                <input className="input_apt newFormInput" onChange={(e)=>this.onInputChange('address_apt', e.target.value)}></input>
            </div>
        )
    }

    renderQuestion_city() {
        const cityOptions = [];
        cityOptions.push(<option value="" key="defaultlabel">Select city</option>);
        const cityList = Constants.CITIES.slice(1, Constants.CITIES.length); //took out 'all cities'
        for (let city of cityList) {
            cityOptions.push(
                <option value={city.name} key={city.name}>{city.name}</option>
            )
        }

        return (
            <div className="newForm_question question_city">
                <div className="questionLabel">
                    In:  
                </div>
                <select className={`citySelection ${this.getErrorMessage(this.state.address_city)} `} 
                        onChange={(e)=>this.onInputChange('address_city', e.target.value)}>
                    {cityOptions}
                </select>
            </div>
        )
    }

    getFileName(e) {
        const filepath = e.target.value.split('\\');
        const filename = filepath[filepath.length-1];
        return filename
    }

    handleDisplayFileNames() {
        const fileNameList = [];
        for (let i = 0; i < this.state.images.length; i++) {
            const fileName = this.state.images[i];
            fileNameList.push(
                <div className="displayFileName" key={i}>
                    {fileName}
                </div>
            )
        }
        return (
            <div className="displayFileNameWrapper">
                {fileNameList}
            </div>
        )
    }

    createNewImagesList(e) {
        // adding new image filename into the current image file list
        return this.state.images.slice(0).concat(this.getFileName(e))
    }

    renderQuestion_images() {
        return (
            <div className="newForm_question question_images">
                <div className="questionLabel question_images_label">
                    Images: 
                </div>
                <label htmlFor="post-images-upload" className="questionLabel select_button_label">
                    Select images
                </label>
                <input id="post-images-upload" 
                        type="file" 
                        accept="image/png, image/jpeg, image/jpg" 
                        onChange={(e)=>this.onInputChange('images', this.createNewImagesList(e))}/>
                {this.handleDisplayFileNames()}
            </div>
        )
    }

    renderQuestion_note() {
        return (
            <div className="newForm_question question_note">
                <div className="questionLabel">
                    Note: 
                </div>
                <textarea className="input_notes newFormInput" 
                            onChange={(e)=>this.onInputChange('note', e.target.value)} >
                </textarea>
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
        const submitButtonClassName = `newForm_buttons newFormButton_submit 
                                    ${(this.isSubmitButtonEnable()) ? "submit_enable" : "submit_disable"}`;
        return(
            <div>
                <button className="newForm_buttons newFormButton_cancel"
                        onClick={()=> this.homeRef.current.click()}>
                    Cancel
                </button>

                <button className= {submitButtonClassName}
                        onClick={(e)=> this.handleSubmit(e)}
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
                <div className="button_home" ref={div => this.homeReference = div}>
                    <a href="/" ref={this.homeRef} className="button_home_label">
                        <FontAwesomeIcon icon="arrow-left" className="icon_leftArrow" />
                        Dashboard
                    </a>
                </div>
            </div>
            {this.renderQuestions()}
            {this.renderButtons()}
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
  )(NewFormPage)


