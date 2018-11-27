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
                <img src={image} 
                        alt="" key={image} 
                        className={`thumbs ${(this.isCurrentClikedImage(image)) ? 'currentClickedImageThumb' : ''}`}
                        onClick={ ()=> this.props.updateCurrentImage(image)}>
                </img>
            )
        }
        return (
            <div className="thumbHolder">
                {images}
            </div>
        )
    }

    handleClickedArrow(isLeft){
        const currentImageIndex = this.props.images.indexOf(this.props.currentClickedImage);
        let newIndex = -3;

        if(isLeft){
            newIndex = currentImageIndex - 1;
            if(newIndex < 0) {
                return null
            }
        } else {
            newIndex = currentImageIndex + 1;
            if(newIndex > this.props.images.length-1){
                return null
            }
        }
        return this.props.updateCurrentImage(this.props.images[newIndex])
    }   

    render() {
        if(!this.props.modalShown.includes('photos')){ 
            return null
        }
        return (
            <div>
                <div className="thumbParentHolder">
                {this.renderThumbs()}
                </div>
                <div className="Modal_photos">
                    <FontAwesomeIcon icon="angle-left" 
                                    className="arrowIcons photoDisplay_iconAngleLeft" 
                                    onClick={()=> this.handleClickedArrow(true)}/>
                    <img src={this.props.currentClickedImage} alt="" className="currentClickedImage"/>
                    <FontAwesomeIcon icon="angle-right" 
                                        className="arrowIcons photoDisplay_iconAngleRight"
                                        onClick={()=> this.handleClickedArrow(false)}/>
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
        },
        updateCurrentImage: (image) => {
            dispatch(Actions.updateClickedImage(image))
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalPhotoDisplay)