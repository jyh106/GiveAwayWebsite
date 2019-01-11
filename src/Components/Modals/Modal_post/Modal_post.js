import React, { Component } from 'react';
import "./Modal_post.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Constants from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather , faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import OutsideClick from '../../OutsideClick';
library.add(faMapMarkerAlt, faFeather, faAngleLeft, faAngleRight) 

class ModalPost extends Component {
    // this modal is for displaying individual post when user click on a post when viewing in list style
    renderThumbs() {
        let images = [];
        for (let image of this.props.clickedPostInfo.images) {
            images.push(
                <img src={image} 
                        alt="" key={image} 
                        className={`individualPost_thumbs`}
                        >
                </img>
            )
        }
        return (
            <div className="images">
                {images}
            </div>
        )
    }

    renderImages(){
        if (this.props.clickedPostInfo.images.length === 0) {
            return null
        }
        if (this.props.clickedPostInfo.images.length < Constants.NONE_SCROLLABLE_THUMBS) {
            return (
                <div className="post_details postImages">
                    <div className="imageWrapper">
                        {this.renderThumbs()}
                    </div>
                </div>
            )
        }
        return (
            <div className="post_details postImages">
                <FontAwesomeIcon className="icon_angleLeft" icon="angle-left" />
                   <div className="imageWrapper">
                        {this.renderThumbs()}
                    </div>
                <FontAwesomeIcon className="icon_angleRight" icon="angle-right" /> 
            </div>
        )
    }


    renderNote() {
        if (!this.props.clickedPostInfo.note) {
            return null
        } else {
            return (
                <div className="modal_note">
                    {this.props.clickedPostInfo.note}
                </div>
            )
        }
    }

    render() {
        return (
            <OutsideClick>
            <div className="modal_post_detail">
                <div className="modal_title">
                    {this.props.clickedPostInfo.name}
                </div>
                <div className="modal_date">
                    {this.props.clickedPostInfo.date}
                </div>
                <div className="modal_address">
                    <FontAwesomeIcon icon="map-marker-alt" className="icon_address" /> 
                    {this.props.clickedPostInfo.address}
                </div>
                {this.renderNote()}
                {this.renderImages()}
            </div>
            </OutsideClick>
        )
    }
}

function mapStateToProps(state){
    return{
        modalShown: state.Modal.getIn(['modalShown']),
        clickedPostInfo: state.PostBoard.get('clickedListPost'),
        // currentClickedImage: state.Modal.get('currentClickedImage'),
        // images: state.Modal.get('images')
    }
  }
  
  
  export default connect(
    mapStateToProps,
  )(ModalPost)