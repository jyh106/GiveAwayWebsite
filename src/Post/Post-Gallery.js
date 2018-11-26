import React, { Component } from 'react';
import "./Post-Gallery.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather, faPencilAlt, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
library.add(faMapMarkerAlt, faFeather, faPencilAlt, faAngleLeft, faAngleRight) 

class PostGallery extends Component {
    constructor(){
        super();
        this.myRef = React.createRef();
    }

    renderEditIcon(){
        if (!this.props.editable) {
            return null
        }
        return <FontAwesomeIcon icon="pencil-alt" className="edit_icon" />
    }

    checkImages(){
        if(!this.props.images){
            return null
        }
        const images = [];
        let index = 1;
        for (let image of this.props.images) {
                images.push(
                    <img className="image" src={image} alt=" " key={image + this.props.name + index}></img>
                )
                index++;
        }
        return images
    }

    scroll(ref) {
        ref.current.scrollIntoView({behavior: 'smooth'})
      }

    renderImages(){
        return (
            <div className="post_details postImages">
                <FontAwesomeIcon className="icon_angleLeft" icon="angle-left" />
                <div className="imageWrapper">
                    <div className="images" ref={this.myRef} onClick={() => {this.scroll(this.myRef)}}>
                        {this.checkImages()}
                    </div>
                </div>
                <FontAwesomeIcon className="icon_angleRight" icon="angle-right" /> 
            </div>
        )
    }

    render(){
        return(
            <div className="post">
                <div className="post_details post_name">
                    <FontAwesomeIcon icon="feather" className="post_name_icon"/>
                    {this.props.name}
                </div>
                <div className="post_details post_date">
                    {this.props.date}
                </div>
                <div className="post_details post_address">
                   <FontAwesomeIcon icon="map-marker-alt" className="post_address_icon"/> 
                   {this.props.address}
                </div>
                <div className="post_details post_note">
                    {this.props.description}
                </div>
                {this.renderImages()}
            </div>
        )
    }
}

export default PostGallery;

