import React, { Component } from 'react';
import "./PostBoard.css";
import Post from '../Post/Post.js';
import { connect } from 'react-redux';

class PostBoard extends Component {
    producePostsList(){
        let posts = [];
        for(let post of this.props.posts.entries()){
            let post_name= post[0];
            let post_date = post[1]['date'];
            let post_address = post[1]['address'];
            let post_note = post[1]['note'];
            posts.push(<Post name={post_name} 
                             address={post_address}
                             date={post_date}
                             description={post_note}/>)
        }
        return posts;
    }
    render() {
        this.producePostsList();
        return(
            <div className="PostBoard">
                {this.producePostsList()}
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        posts: state.postBoardReducer.get('posts')
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