import React, { Component } from 'react';
import "./PostPage.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Utils from '../../utils';
import { Link } from "react-router-dom";
import Actions from '../../Actions/actions.js';
import Constants from '../../constants.js';
import ModalContainer from "../../Components/Modals/ModalContainer";
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
                <img src={Constants.UPLOADS_HOSTNAME + image} 
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

    render() {
        return (
        <div>
            <div className="postPageWrapper">
                <div className="postPageNavigation">
                    <Link to="/" className="postPageBackButtonLabel">    
                        <FontAwesomeIcon icon="arrow-left" className="postPageBackButton" />
                        Main
                    </Link>
                </div>

                <div className="postName postDetail">  
                    {this.props.post.name}
                </div>

                <div className="postDate postDetail">
                    <FontAwesomeIcon icon="calendar-alt" className="iconDate icons" />
                    {this.props.post.date}
                </div>

                <div className="postAddress postDetail">
                    <FontAwesomeIcon icon="map-marker-alt" className="iconAddress icons"/>
                    {this.props.post.address}
                </div>

                <div className="postNote postDetail">
                    <FontAwesomeIcon icon="sticky-note" className="iconNote icons"/>
                    <div className="postNoteText">
                        {this.props.post.note}  
                    </div>
                </div>
                {this.renderImageSection()}
                {Utils.renderPageMask(this.props.isPageMaskShown)}
                <div className="photoModal">
                    <ModalContainer modalStyle='postPageStyle' />
                </div>
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
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPage);