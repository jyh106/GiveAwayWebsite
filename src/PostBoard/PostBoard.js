import React, { Component } from 'react';
import "./PostBoard.css";
import Post from '../Post/Post.js';
import { connect } from 'react-redux';

class PostBoard extends Component {

    producePostsList(){
        let posts = [];
        for(let post of this.props.posts){
            posts.push(<Post name={post.name} 
                             address={post.address}
                             date={post.date}
                             description={post.note}
                             key={"post " + post.name}
                             />)
        }
        return posts;
    }
    render() {
        return(
            <div className="PostBoard">
                {this.producePostsList()}
                {this.props.displayStyle}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        posts: state.PostBoardReducer.get('posts'),
        displayStyle: state.PostBoardReducer.get('displayStyle')
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