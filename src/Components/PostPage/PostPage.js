import React, { Component } from 'react';
import "./PostPage.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Utils from '../../utils';
import { Link } from "react-router-dom";
import Actions from '../../Actions/actions.js';
import Constants from '../../constants.js';
import ModalContainer from "../../Components/Modals/ModalContainer";
import PostMap from "../../Components/Map/Map.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faAngleLeft, faAngleRight,
         faCalendarAlt, faStickyNote, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
library.add(faMapMarkerAlt, faAngleLeft, faAngleRight, 
            faCalendarAlt, faStickyNote, faArrowLeft) 

class PostPage extends Component {
    componentDidMount() {
        const postID = this.props.match.params.postID;
        this.props.getClickedPostInfo(postID)
    }

    handleClickedImage(currentViewingImage, postImages){
        this.props.toggleModal('photos', true);
        this.props.handleClickedImage({currentViewingImage, postImages});
    } 

    imageList() {
        if (!this.props.post.images) {
            return null
        } 
        const images = [];
        for (let image of this.props.post.images) {
            images.push(
                <img src={image} 
                    className="postImage" key={image}
                    height="150" width="150" alt=""
                    onClick={(e)=> this.handleClickedImage(e.target.src, this.props.post.images)}>
                </img>
            )
        }
        return images
    }

    giveImageSectionClassName() {
        if (!this.props.post.images || (this.props.post.images.length === 0)) {
            return "imageSliderNotActive"
        }
        return "imageSlider"
    }

    renderImageSection() {
        return (
            <div className="imageSectionContainer">
                <div className={`${this.giveImageSectionClassName()}`}>
                    <div className="imageInnerSlider">
                        {this.imageList()}
                    </div>
                </div>
            </div>
        )
    }

    renderNoteSection() {
        if (!this.props.post.note) {
            return null
        }
        return (
            <div className="postNote postDetail">
                <FontAwesomeIcon icon="sticky-note" className="iconNote icons"/>
                <div className="postNoteText">
                    {this.props.post.note}  
                </div>
            </div>
        )
    }

    renderPostPageNav() {
        return (
            <Link to="/" className="postPageBackButtonLabel">    
            <div className="postPageNavigation" 
                onClick={()=> this.props.resetMapPosts()}>
                <FontAwesomeIcon icon="arrow-left" className="postPageBackButton" />
                Main
            </div>
            </Link>
        )
    }

    renderAuthorSection() {
        const username = this.props.post.username;
        return (
            <div className="post_page_author">
                <p className="post_page_author-label">Given by: </p>
                {(!username) ? "anonymous" : username}
            </div>
        )
    }

    render() {
        return (
        <div>
            <div className="postPageWrapper">
                {this.renderPostPageNav()}

                <div className="postName postDetail">  
                    {this.props.post.name}
                    {this.renderAuthorSection()}
                </div>

                <div className="postDate postDetail">
                    <FontAwesomeIcon icon="calendar-alt" className="iconDate icons" />
                    {this.props.post.date}
                </div>

                {this.renderNoteSection()}
                {this.renderImageSection()}
                {Utils.renderPageMask(this.props.isPageMaskShown)}

                <div className="photoModal">
                    <ModalContainer modalStyle='postPageStyle' />
                </div>

                <div className="postAddress postDetail">
                    <FontAwesomeIcon icon="map-marker-alt" className="iconAddress icons"/>
                    {this.props.post.address}
                </div>
                <PostMap mapClassName="postPage-map"/>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: Utils.getClickedPostInfo(state),
        isPageMaskShown: Utils.getPageMaskShown(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getClickedPostInfo: (postID) => {
            dispatch(Actions.fetchCurrentPostData(postID))
        },
        toggleModal: (type, toggle) => {
            dispatch(Actions.toggleModal(type, toggle));
        },
        handleClickedImage: ({currentViewingImage, postImages}) => {
            dispatch(Actions.handleClickedImage({currentViewingImage, postImages}))
        },
        showPostOnMap: (post) => {
            dispatch(Actions.showPostOnMap(post));
        },
        resetMapPosts: () => {
            dispatch(Actions.resetMapPosts());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);
