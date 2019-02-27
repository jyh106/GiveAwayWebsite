import React, { Component } from 'react';
import "./PostBoard.css";
import PostsList from '../Post/Post-List/Post-List.js';
import PostsGallery from '../Post/Post-Gallery.js';
import { connect } from 'react-redux';
import Utils from '../../utils.js';
import PostMap from "../../Components/Map/Map.js";


class PostBoard extends Component {

    changeAddressFormat(post){
        return {
            'street': post.address.split(",")[0],
            'city': post.address.split(",")[1],
        }
    }

    producePostGalleryComponent(post) {
        const postAddress = this.changeAddressFormat(post);
        return (
            <PostsGallery name={post.name} 
                        address={postAddress}
                        date={post.date}
                        note={post.note}
                        editable={post.editable}
                        images ={post.images}
                        key={post.name}
                        id={post.id}
                        />
        )
    }

    producePostListComponent(post) {
        const postAddress = this.changeAddressFormat(post);
        return (
            <PostsList name={post.name} 
                        address={postAddress}
                        date={post.date}
                        note={post.note}
                        editable={post.editable}
                        images ={post.images}
                        key={post.name}
                        id={post.id}
                        />
        )
    }


    renderPosts() {
        if (this.props.displayStyle === 'Map') {
            return <PostMap />;
        } 

        let posts = [];
        let displayPosts = [];

        if (this.props.searchBarStatus) { //display search results
            displayPosts = this.props.searchResult;
        } else if (this.props.showUserPosts) { //display user posts
            displayPosts = this.props.userPosts;
        } else {
            displayPosts = this.props.posts //display all posts
        }

        if (this.props.displayStyle === 'Gallery') {
            for (let post of displayPosts) {
                posts.push(this.producePostGalleryComponent(post))
            }
        } else if (this.props.displayStyle === 'List') {
            for (let post of displayPosts) {
                posts.push(this.producePostListComponent(post))
            }
        }

        return posts
    }

    success(position) {
        console.log('success',position.coords)
    }

    error(er) {
        console.log('fail',er)
    }


    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.success, this.error, {timeout: 10000})
        } else {
         console.log("Geolocation is not supported by this browser.");
        }
      }
      

    render() {
        return(
        <div className="postBoardWrapper" key="postBoardWrapper">
            {/* {this.getLocation()} */}
            <div className="PostBoard" key="postBoard">
                {this.renderPosts()}
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userInfo: Utils.getUserInfo(state),
        posts: Utils.getPosts(state),
        displayStyle: Utils.getDisplayStyle(state),
        showUserPosts: Utils.shouldShowUserPosts(state),
        searchResult: Utils.getSearchResults(state),
        searchBarStatus: Utils.getSearchBarStatus(state),
        userPosts: Utils.getUserPosts(state)
    }
  }

  export default connect(
    mapStateToProps
  )(PostBoard);