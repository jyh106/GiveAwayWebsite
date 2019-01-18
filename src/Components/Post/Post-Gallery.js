import React, { Component } from 'react';
import "./Post-Gallery.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Constants from '../../constants';
library.add(faMapMarkerAlt, faAngleLeft, faAngleRight) 

class PostGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showImageNavigationButtons: false,
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
        this.props.toggleModal('photos', true);
        this.props.handleClickedImage({currentViewingImage, postImages});
    }

    onThumbnailButtonsClicked(isLeft) {
        const currentIndex = this.props.images.indexOf(this.state.currentDisplayImageSrc);
        let nextIndex = currentIndex - 1;
        if (isLeft) {
            if (nextIndex < 0) {
                return
            }
        } else {
            nextIndex = currentIndex + 1;
            if (nextIndex > this.props.images.length) {
                return
            }
        }
        this.setState({
            currentDisplayImageSrc: this.props.images[nextIndex]
        })
    }

    renderThumbnailNagivationButtons() {
        if ((!this.state.showImageNavigationButtons)
            || (this.props.images.length <= 1)) {
            return null
        }
        return(
            <div className="thumbnailNagivationButtons" 
                onMouseOver={()=> this.toggleImageNavigationButtons(true)}
                onMouseLeave={()=> this.toggleImageNavigationButtons(true)}>
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
        return (
            <img className="image" 
                src={this.state.currentDisplayImageSrc} 
                height="170" width="203"
                alt=" "
                onClick={(e)=> this.handleClickedImage(e.target.src, this.props.images)}>
            </img>
        )
    }

    toggleImageNavigationButtons(toggle) {
        this.setState({
            showImageNavigationButtons: toggle,
        })
    }

    renderImages() {
        return (
            <div className="thumbnailContainer"
                onMouseOver={()=> this.toggleImageNavigationButtons(true)}
                onMouseLeave={()=> this.toggleImageNavigationButtons(false)}>
                {this.renderFirstThumbnail()}
                {this.renderThumbnailNagivationButtons()}
            </div>
        )
    }

    getCity() {
        return this.props.address.split(',')[1];
    }

    renderComment() {
        return (
            <div className="post_comment">
                Comments
            </div>
        )
    }

    render(){
        return(
            <div className="post_gallery">
                {this.renderImages()}
                <div className="post_details post_name_gallery">
                    {this.props.name}
                </div>
                <div className="post_details post_address_gallery">
                   <FontAwesomeIcon icon="map-marker-alt" className="post_address_icon"/> 
                   {this.getCity()}
                </div>
                <div className="post_details post_date_gallery">
                    {this.props.date}
                </div>
                <div className="divider"></div>
                {this.renderComment()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
  }

const mapDispatchToProps = dispatch => {
    return {
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

