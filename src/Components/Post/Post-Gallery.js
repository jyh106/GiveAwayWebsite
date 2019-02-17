import React, { Component } from 'react';
import "./Post-Gallery.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter } from 'react-router-dom';
import { faMapMarkerAlt, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Constants from '../../constants';
library.add(faMapMarkerAlt, faAngleLeft, faAngleRight) 

class PostGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingImageNavButtons: false,
            currentDisplayImageSrc: this.setInitialDisplayImageState(),
        }
    }

    setInitialDisplayImageState() {
        if (this.props.images.length === 0) {
            return Constants.POST_GALLERY_DEFAULT_IMAGE
        } else {
            return this.props.images[0]
        }
    }

    handleClickedImage(currentViewingImage, postImages){
        if (currentViewingImage === (Constants.UPLOADS_HOSTNAME + Constants.DEFAULT_IMG_SRC)) {
             return null
        }
        this.props.toggleModal('photos', true);
        this.props.handleClickedImage({currentViewingImage, postImages});
}

    onThumbnailButtonsClicked(isLeft) {
        const currentIndex = this.props.images.indexOf(this.state.currentDisplayImageSrc);
        let nextIndex = (currentIndex + 1) % this.props.images.length;
        this.setState({
            currentDisplayImageSrc: this.props.images[nextIndex]
        })
    }

    renderThumbnailNagivationButtons() {
        if ((!this.state.isShowingImageNavButtons)
            || (this.props.images.length <= 1)) {
            return null
        }
        return(
            <div className="thumbnailNagivationButtons" 
                onMouseOver={()=> this.showImageNavigationButtons(true)}
                onMouseLeave={()=> this.showImageNavigationButtons(true)}>
                <div className="thumbnailNavigationButton thumbnailNavigationButton_left"
                    onClick={()=> this.onThumbnailButtonsClicked(true)}>
                    <FontAwesomeIcon icon="angle-left" />
                </div>
                <div className="thumbnailNavigationButton thumbnailNavigationButton_right" 
                    onClick={()=> this.onThumbnailButtonsClicked(false)}>
                    <FontAwesomeIcon icon="angle-right"/>   
                </div>
            </div>
        )
    }

    renderFirstThumbnail() {
        const imagePath = `${Constants.UPLOADS_HOSTNAME}${this.state.currentDisplayImageSrc}`;
        return (
                <img className="postGallery-thumb" 
                    src={imagePath}
                    height="180" width="230"
                    alt=" "
                    onClick={(e)=> this.handleClickedImage(e.target.src, this.props.images)}>
                </img>        
        )
    }

    showImageNavigationButtons(toggle) {
        this.setState({
            isShowingImageNavButtons: toggle,
        })
    }

    renderImages() {
        return (
            <div className="thumbnailContainer"
                onMouseOver={()=> this.showImageNavigationButtons(true)}
                onMouseLeave={()=> this.showImageNavigationButtons(false)}>
                {this.renderFirstThumbnail()}
                {this.renderThumbnailNagivationButtons()}
            </div>
        )
    }

    renderCommentSection() {
        return (
            <div className="post_comment">
                Comments
            </div>
        )
    }

    renderNameSection() {
        return(
            <div className="post_details post_name_gallery">
                <a href={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
                    {this.props.name}
                </a>
            </div>
        )
    }

    render(){
        return(
        <BrowserRouter>
            <div className="post_gallery">
                {this.renderImages()}
                {this.renderNameSection()}
                <div className="post_details post_address_gallery">
                   <FontAwesomeIcon icon="map-marker-alt" className="post_address_icon"/> 
                   {this.props.address.city}
                </div>
                <div className="post_details post_date_gallery">
                    {this.props.date}
                </div>
                <div className="divider"></div>
                {this.renderCommentSection()}
            </div>
        </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        updateClickedPost: (postInfo)=> {
            dispatch(Actions.updateClickedPost(postInfo))
        },
        toggleModal: (type, toggle) => {
            dispatch(Actions.toggleModal(type, toggle));
        },
        handleClickedImage: ({currentViewingImage, postImages}) => {
            dispatch(Actions.handleClickedImage({currentViewingImage, postImages}))
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostGallery)

