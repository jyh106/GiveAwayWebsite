import React, { Component } from 'react';
import "./PostPage.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Utils from '../../utils';
import Actions from '../../Actions/actions.js';
import Constants from '../../constants.js';
import ModalContainer from "../../Components/Modals/ModalContainer";
import { BrowserRouter } from 'react-router-dom';
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

    renderImageSection() {
        if (!this.props.post.images) {
            return null
        } else {
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
            return (
                <div className="imageSectionContainer">
                    <FontAwesomeIcon icon="angle-left" className="postPageArrow postPageLeftArrow"/>
                    <div className="imageSlider">
                        <div className="imageInnerSlider">
                            {images}
                        </div>
                    </div>
                    <FontAwesomeIcon icon="angle-right" className="postPageArrow postPageRightArrow"/>
                </div>
            )
        }
    }

    displayPageMask(){
        if (!this.props.isPageMaskShown) {
            return null
        }
        return (
            <div className="page-mask"></div>
        )
    }

    render() {
        return (
        <BrowserRouter>
        <div>
            <div className="postPageWrapper">
                <div className="postPageNavigation">
                    <a href="/" className="postPageBackButtonLabel">    
                        <FontAwesomeIcon icon="arrow-left" className="postPageBackButton" />
                        Main
                    </a>
                </div>
                <ModalContainer />
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
                {this.displayPageMask()}

            </div>
        </div>
        </BrowserRouter>
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