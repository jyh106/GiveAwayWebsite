import React, { Component } from 'react';
import "./Post-List.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faComment, faImages} from '@fortawesome/free-solid-svg-icons';
import Actions from '../../../Actions/actions.js';
import Constants from '../../../constants.js';
library.add(faMapMarkerAlt, faComment, faImages) 

class PostList extends Component {
    handlePostClcicked(){
        this.props.updateClickedPost({
            'name': this.props.name,
            'date': this.props.date,
            'address': this.props.address,
            'note': this.props.note,
            'images': this.props.images,
            'id': this.props.id
        })
        this.props.toggleDisplay('post', true);
    }

    renderNote() {
        if(this.props.description === ''){
            return null
        }
        return (
            <div className="postList_note postList_label" 
                        onClick={()=>{this.renderPostDetailModal()}}>
                <FontAwesomeIcon icon="comment" className="postList_note"></FontAwesomeIcon> 
            </div>
        )
    }

    renderImageMark() {
        if(this.props.images.length === 0){
            return null
        }
        return (
            <div className="postList_image postList_label">
                <FontAwesomeIcon icon="images" className="postList_image"></FontAwesomeIcon>
            </div>
        )
    }

    render(){
        return(
        <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
            <div className="postList postElement">
                <div className="postList_name postList_label">
                    {this.props.name} 
                </div>
                <div className="postList_date postList_label">
                    ({this.props.date})
                </div>
                <div className="postList_address postList_label">
                    <FontAwesomeIcon icon="map-marker-alt" className="icon_address" /> 
                    {this.props.address.city}
                </div>
                {this.renderNote()}
                {this.renderImageMark()}
            </div>
        </Link>
        )
    }
}

function mapStateToProps(state){
    return{
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        updateClickedPost: (postInfo)=> {
            dispatch(Actions.updateClickedPost(postInfo))
        },
        toggleDisplay: (type, toggle) => {
            dispatch(Actions.toggleModal(type, toggle))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList)