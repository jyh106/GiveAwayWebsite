import React, { Component } from 'react';
import "./ModalNewForm.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import Utils from '../../utils'

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
            <div className="form_header">
                I Want To Give Away: 
            </div>
        )
    }

    renderQuestions() {
        return(
            <div>
                 <div className="postForm_question">
                    <div className="titles">
                        Item(s):
                    </div>
                    <input type="form_name" className={`input_title ${this.getErrorMessage(this.state.name)}`} 
                            onChange={(e)=>this.onChangeInput('name', e.target.value)}
                            maxLength='25'>
                    </input>
                    <p className="maxCharacterLabel">max characters: {25 - this.state.name.length}</p>
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        At(streetName):
                    </div>
                    <input className={`input_streetName ${this.getErrorMessage(this.state.address_street)}`} 
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
                        In:  
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
                </div>

                <div className="postForm_question">
                    <div className="titles">
                        Images: 
                    </div>
                    <input className="input_images" type="file" accept="image/png, image/jpeg, image/jpg" 
                        onChange={(e)=>this.onChangeInput('images', this.state.images + e.target.value)}/>
                </div>
                
                <div className="postForm_question">
                    <div className="titles">
                        Note: 
                    </div>
                    <textarea className="input_notes"  onChange={(e)=>this.onChangeInput('note', e.target.value)} ></textarea>
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
            <form>
                <div className="newPostForm">
                    {this.renderHeader()}
                    {this.renderQuestions()}

                    <div className="post_date">
                        {Utils.getDate()}
                    </div>

                    {this.renderButtons()}
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


