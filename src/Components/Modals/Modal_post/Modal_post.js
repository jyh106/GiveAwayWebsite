import React, { Component } from 'react';
import "./Modal_post.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Constants from '../../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather,
         faAngleLeft, faAngleRight,
         faCalendarAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons'
import OutsideClick from '../../../OutsideClick';
import Utils from '../../../utils';
library.add(faMapMarkerAlt, faFeather, 
            faAngleLeft, faAngleRight, 
            faCalendarAlt, faStickyNote) 

class ModalPost extends Component {
    // this modal is for displaying individual post when user click on a post while viewing in list style
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
                <div className="post_details postImages modal_detail">
                    <div className="imageWrapper">
                        {this.renderThumbs()}
                    </div>
                </div>
            )
        }
        return (
            <div className="post_details postImages modal_detail">
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
                <div className="modal_note modal_detail">
                    <FontAwesomeIcon icon="sticky-note" 
                                    className="icon_sticky_note modal_post_icons" />
                    <div className="modal_note_text">
                        {this.props.clickedPostInfo.note}
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <OutsideClick>
            <div className="modal_post">
                <div className="modal_title modal_detail">
                    {this.props.clickedPostInfo.name}
                </div>
                <div className="modal_date modal_detail">
                    <FontAwesomeIcon icon="calendar-alt" className="icon_date modal_post_icons"></FontAwesomeIcon>
                    {this.props.clickedPostInfo.date}
                </div>
                <div className="modal_address modal_detail">
                    <FontAwesomeIcon icon="map-marker-alt" className="icon_address modal_post_icons" /> 
                    {`${this.props.clickedPostInfo.address.street}, ${this.props.clickedPostInfo.address.city}`}
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
        modalShown: Utils.getShowingModals(state),
        clickedPostInfo: Utils.getClickedPostInfo(state)
    }
  }
  
  
export default connect(
    mapStateToProps,
  )(ModalPost)