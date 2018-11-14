import React, { Component } from 'react';
import "./PostBoard.css";
import PostsList from '../Post/Post-List/Post-List.js';
import PostsGallery from '../Post/Post-Gallery.js';
import { connect } from 'react-redux';

class PostBoard extends Component {
    producePostsGallery(){
        let posts = [];
        for(let post of this.props.postsInfo){
            posts.push(<PostsGallery name={post.name} 
                             address={post.address}
                             date={post.date}
                             description={post.note}
                             key={"post " + post.name}
                             />)
        }
        return posts;
    }

    producePostsList(){
        let posts = [];
        for(let post of this.props.postsInfo){
            posts.push(<PostsList name={post.name} 
                             address={post.address}
                             date={post.date}
                             description={post.note}
                             key={"post " + post.name}
                             />)
        }
        return posts;
    }

    producePosts(){
        if(this.props.displayStyle === 'Gallery'){
            return this.producePostsGallery()
        } 
        return this.producePostsList();
    }

    render() {
        return(
            <div className="PostBoard">
                {this.producePosts()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        postsInfo: state.PostBoard.get('posts'),
        displayStyle: state.PostBoard.get('displayStyle')
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostBoard)