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

    handleClickedImage(currentViewingImage, postImages){
        this.props.toggleModal('photos', true);
        this.props.handleClickedImage({currentViewingImage, postImages});
    }

    handleImages(){
        if (!this.props.images) {
            return null
        }
        const images = [];
        let index = 1;
        for (let image of this.props.images) {
                images.push(
                    <img className="image" 
                            src={image} 
                            alt=" " 
                            key={image + this.props.name + index}
                            onClick={ ()=> this.handleClickedImage(image, this.props.images) }>
                    </img>
                )
                index++;
        }
        return images
    }

    renderImages(){
            return (
                <div className="post_details postImages">
                    <img className="image" 
                        src={Constants.POST_GALLERY_DEFAULT_IMAGE} 
                        alt=" ">
                    </img>
                </div>
            )
    }

    renderNote() {
        if (!this.props.description) {
            return null
        }
        return (
            <div className="post_details post_note">
                {this.props.description}
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
            <div className="post">
                {this.renderImages()}
                <div className="post_details post_name">
                    {this.props.name}
                </div>
                <div className="post_details post_address">
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

