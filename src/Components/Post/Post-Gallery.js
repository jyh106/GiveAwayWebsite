import React, { Component } from 'react';
import "./Post-Gallery.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Constants from '../../constants';
import  Utils  from '../../utils.js';
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

    onThumbnailButtonsClicked() {
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
            <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
                <img className="postGallery-thumb" 
                    src={imagePath}
                    height="180" width="230"
                    alt=" ">
                </img>        
            </Link>
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

    renderAuthorSection() {
        const username = (this.props.username.length === 0) ? "anonymous" : this.props.username;
        return (
            <div className="post_author">
                <p className="author-label">Given by: </p>
                {username}
            </div>
        )
    }

    renderNameSection() {
        const postName = (this.props.name.length > 23) ? `${(this.props.name).substring(0, 15)}...` : this.props.name;
        return(
            <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
                <div className="post_details post_name_gallery" onClick={()=> this.props.showPostOnMap(this.props)}>
                    {postName}
                </div>
            </Link>
        )
    }

    handleDeletePost() {
        this.props.deletePost(this.props.id);
    }


    renderDeleteButton() {
        if (!this.props.showUserPosts) {
            return null
        }
        return (
            <div className="postDeleteButton"
                onClick={()=>this.handleDeletePost()}>
                x
            </div>
        )
    }

    renderPostAddress() {
        return (
            <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
                <div className="post_details post_address_gallery" onClick={()=> this.props.showPostOnMap(this.props)}>
                    <FontAwesomeIcon icon="map-marker-alt" className="post_address_icon"/> 
                    {this.props.address.city}
                </div>
            </Link>
        )
    }

    renderDateSection() {
        return (
            <div className="post_details post_date_gallery">
                <p className="date-label">
                    Post on:
                </p>
                {this.props.date}
            </div>
        )
    }

    render(){
        return(
            <div className="post_gallery">
                {this.renderDeleteButton()}
                {this.renderImages()}
                {this.renderNameSection()}
                {this.renderPostAddress()}
                {this.renderDateSection()}
                <div className="divider"></div>
                {this.renderAuthorSection()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        showUserPosts: Utils.shouldShowUserPosts(state),
    }
  }

function mapDispatchToProps(dispatch) {
    return {
        updateClickedPost: (postInfo)=> {
            dispatch(Actions.updateClickedPost(postInfo))
        },
        toggleModal: (type, toggle) => {
            dispatch(Actions.toggleModal(type, toggle));
        },
        handleClickedImage: ({currentViewingImage, postImages}) => {
            dispatch(Actions.handleClickedImage({currentViewingImage, postImages}))
        },
        deletePost: (postID) => {
            dispatch(Actions.deletePost(postID))
        },
        showPostOnMap: (post) => {
            dispatch(Actions.showPostOnMap(post));
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostGallery)

