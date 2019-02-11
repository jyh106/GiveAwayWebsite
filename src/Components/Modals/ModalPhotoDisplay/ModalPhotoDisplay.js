import React, { Component } from 'react';
import "./ModalPhotoDisplay.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import Actions from "../../../Actions/actions";
import Utils from '../../../utils.js';
import Constants from '../../../constants';
library.add(faAngleLeft, faAngleRight, faTimesCircle) 

class ModalPhotoDisplay extends Component {
    isCurrentClickedImage(image) {
        return image === this.props.currentClickedImage
    }

    renderThumbs() {
        const images = [];
        for (let image of this.props.images) {
            const imgFullSrc = Constants.UPLOADS_HOSTNAME + image;
            images.push(
                <img src={imgFullSrc} 
                        alt="" key={image} 
                        className={`thumbs ${(this.isCurrentClickedImage(imgFullSrc)) ? 'currentClickedImageThumb' : ''}`}
                        onClick={ ()=> this.props.updateCurrentImage(imgFullSrc)}>
                </img>
            )
        }
        return (
            <div className="thumbHolder">
                {images}
            </div>
        )
    }

    handleClickedArrow(){
        const currentImageSrc = this.props.currentClickedImage.split("/")[Constants.INDEX_FILE_SRC_AFTER_ROUTE_SPLIT];
        const currentImageIndex = this.props.images.indexOf(currentImageSrc);
        const newIndex = (currentImageIndex + 1) % this.props.images.length;
        const nextImageSrc = Constants.UPLOADS_HOSTNAME + this.props.images[newIndex]
        return this.props.updateCurrentImage(nextImageSrc)
    }   


    render() {
        return (
            <div className={`modalPhotoHolder ${this.props.modalStyle}`}>
                <div className={`${this.props.modalStyle}-photoModalCloseButton photoModalCloseButton`}
                    onClick={()=>this.props.toggleModal('photos', false)}>
                    x
                </div>
                <div className={`thumbParentHolder ${this.props.modalStyle}-thumbParentHolder`}>
                    {this.renderThumbs()}
                </div> 
                <div className={`${this.props.modalStyle}-photoSection`}>
                    <div className={`modalPhotos ${this.props.modalStyle}-modalPhotos`}>
                        <div className={`arrowIcons photoDisplay_iconAngleLeft ${this.props.modalStyle}-photoDisplay_iconAngleLeft`}>
                            <FontAwesomeIcon icon="angle-left" 
                                        onClick={()=> this.handleClickedArrow()}/>
                        </div>
                        <div className="imageHolder">
                            <img src={this.props.currentClickedImage} alt="" className="currentClickedImage"/>
                        </div>
                        <div className={`arrowIcons photoDisplay_iconAngleRight ${this.props.modalStyle}-photoDisplay_iconAngleRight`}>
                            <FontAwesomeIcon icon="angle-right" 
                                        onClick={()=> this.handleClickedArrow()}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        modalShown: Utils.getShowingModals(state),
        currentClickedImage: Utils.getCurrentClickedImages(state),
        images: Utils.getImages(state)
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