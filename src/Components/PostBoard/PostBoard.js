import React, { Component } from 'react';
import "./PostBoard.css";
import PostsList from '../Post/Post-List/Post-List.js';
import PostsGallery from '../Post/Post-Gallery.js';
import { connect } from 'react-redux';
import Utils from '../../utils.js';

class PostBoard extends Component {
    renderPostsGallery(){
        let posts = [];
        for(let post of this.props.posts){
            const postAddress = {
                'street': post.address.split(",")[0],
                'city': post.address.split(",")[1],
            }
            posts.push(<PostsGallery name={post.name} 
                             address={postAddress}
                             date={post.date}
                             description={post.note}
                             editable={post.editable}
                             images ={post.images}
                             key={post.name}
                             id={post.id}
                             />)
        }
        return posts;
    }

    renderPostsList(){
        let posts = [];
        for(let post of this.props.posts){
            const postAddress = {
                'street': post.address.split(",")[0],
                'city': post.address.split(",")[1],
            }
            posts.push(<PostsList name={post.name} 
                             address={postAddress}
                             date={post.date}
                             description={post.note}
                             editable={post.editable}
                             images ={post.images}
                             key={post.name}
                             id={post.id}
                             />)
        }
        return posts;
    }

    renderPosts(){
        if(this.props.displayStyle === 'Gallery'){
            return this.renderPostsGallery()
        } 
        return this.renderPostsList();
    }

    render() {
        return(
        <div className="postBoardWrapper" key="postBoardWrapper">
            <div className="PostBoard" key="postBoard">
                {this.renderPosts()}
            </div>
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        posts: Utils.getPosts(state),
        displayStyle: Utils.getDisplayStyle(state),
    }
  }

  export default connect(
    mapStateToProps
  )(PostBoard)