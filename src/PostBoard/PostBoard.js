import React, { Component } from 'react';
import "./PostBoard.css";
import PostsList from '../Post/Post-List/Post-List.js';
import PostsGallery from '../Post/Post-Gallery.js';
import { connect } from 'react-redux';

class PostBoard extends Component {
    renderPostsGallery(){
        let posts = [];
        for(let post of this.props.posts){
            posts.push(<PostsGallery name={post.name} 
                             address={post.address}
                             date={post.date}
                             description={post.note}
                             editable={post.editable}
                             images ={post.images}
                             key={"post " + post.name}
                             />)
        }
        return posts;
    }

    renderPostsList(){
        let posts = [];
        for(let post of this.props.posts){
            posts.push(<PostsList name={post.name} 
                             address={post.address}
                             date={post.date}
                             description={post.note}
                             editable={post.editable}
                             images ={post.images}
                             key={"post " + post.name}
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
            <div className="PostBoard">
                {this.renderPosts()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        posts: state.PostBoard.get('posts'),
        displayStyle: state.PostBoard.get('displayStyle')
    }
  }

  export default connect(
    mapStateToProps
  )(PostBoard)