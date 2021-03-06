import React, { Component } from 'react';
import "./Post-List.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faComment, faImages} from '@fortawesome/free-solid-svg-icons';
import Actions from '../../../Actions/actions.js';
import Constants from '../../../constants.js';
import  Utils  from '../../../utils';
library.add(faMapMarkerAlt, faComment, faImages) 

class PostList extends Component {
    renderNote() {
        if(this.props.note === ''){
            return null
        }
        return (
            <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
            <div className="postList_note postList_label">
                <FontAwesomeIcon icon="comment" className="postList_note"></FontAwesomeIcon> 
            </div>
            </Link>
        )
    }

    renderImageMark() {
        if(this.props.images.length === 0){
            return null
        }
        return (
            <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
            <div className="postList_image postList_label">
                <FontAwesomeIcon icon="images" className="postList_image"></FontAwesomeIcon>
            </div>
            </Link>
        )
    }


    renderAddressSection() {
        return (
            <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
                <div className="postList_address postList_label"
                        onClick={()=> this.props.showPostOnMap(this.props)}>
                    <FontAwesomeIcon icon="map-marker-alt" className="icon_address" /> 
                    {this.props.address.city}
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
            <div className="postList-DeleteButton"
                onClick={()=>this.handleDeletePost()}>
                x
            </div>
        )
    }

    renderAuthorSection() {
        const username = (this.props.username.length === 0) ? "anonymous" : this.props.username;
        return (
            <div className="post_list_author">
                <p className="post_list_author-label">Given by: </p>
                {username}
            </div>
        )
    }

    render(){
        const postName = (this.props.name.length > 23) ? `${(this.props.name).substring(0, 20)}...` : this.props.name;
        return(
            <div className="postList postElement" onClick={()=> this.props.showPostOnMap(this.props)}>
            {this.renderDeleteButton()}
             <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.id}`}>
                <div className="postList_name postList_label">
                    {postName} 
                </div>
            </Link>
                <div className="postList_date postList_label">
                    Post on: ({this.props.date})
                </div>
                {this.renderAuthorSection()}
                {this.renderAddressSection()}
                {this.renderNote()}
                {this.renderImageMark()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        showUserPosts: Utils.shouldShowUserPosts(state),
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        showPostOnMap: (post) => {
            dispatch(Actions.showPostOnMap(post));
        },
        deletePost: (postID) => {
            dispatch(Actions.deletePost(postID))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList)