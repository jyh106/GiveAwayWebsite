import React, { Component } from 'react';
import "./ModalPhotoDisplay.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
library.add(faAngleLeft, faAngleRight) 

class ModalPhotoDisplay extends Component {
    constructor(){
        super();
        this.state = {
            photos: [],
        }
    }

    isCurrentClikedImage(image) {
        return image === this.props.currentClickedImage
    }

    renderThumbs() {
        let images = [];
        for (let image of this.props.images) {
            images.push(
                <img src={image} alt="image" key={image} className={`thumbs ${(this.isCurrentClikedImage(image)) ? 'currentClickedImageThumb' : ''}`}></img>
            )
        }
        return (
            <div className="thumbHolder">
                {images}
            </div>
        )
    }
    render() {
        if(!this.props.modalShown.includes('photos')){ 
            return null
        }
        return (
            <div>
                {this.renderThumbs()}
                <div className="Modal_photos">
                    <FontAwesomeIcon icon="angle-left" className="arrowIcons photoDisplay_iconAngleLeft" />
                    <img src={this.props.currentClickedImage} alt="image" className="currentClickedImage"/>
                    <FontAwesomeIcon icon="angle-right" className="arrowIcons photoDisplay_iconAngleRight"/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modalShown: state.Modal.get('modalShown'),
        currentClickedImage: state.Modal.get('currentClickedImage'),
        images: state.Modal.get('images')
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
  )(ModalPhotoDisplay)