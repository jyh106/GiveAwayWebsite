import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import PostBoard from '../PostBoard/PostBoard.js';
import ModalZipCode from "../Modals/Modal_zipcode/Modal_zipcode.js";
import ModalPost from '../Modals/Modal_post/Modal_post.js';
import ModalSignIn from "../Modals/Modal_SignIn/Modal_SignIn.js"
import Actions from "../Actions/actions.js"
import './Home.css';



class Home extends Component {
    displayPageMask(){
        if ((this.props.isModal_zipcode_shown) || (this.props.isModal_post_shown) || (this.props.isModal_signIn_shown)) {
            return (
                <div className="page-mask"></div>
            )
        }
        return null
    }
    
    render() {
        return (
            <div className="App">
                <Header />
                <NavBar />
                <PostBoard />
                {(this.props.isModal_zipcode_shown) ? <ModalZipCode /> : null}
                {(this.props.isModal_post_shown) ? <ModalPost /> : null}
                {(this.props.isModal_signIn_shown) ? <ModalSignIn /> : null}
                {this.displayPageMask()}
             </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isModal_zipcode_shown: state.AppReducer.get('isModal_zipcode_shown'),
        isModal_post_shown: state.AppReducer.get('isModal_post_shown'),
        isModal_signIn_shown: state.AppReducer.get('isModal_signIn_shown'),
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (toggle) => {
            dispatch(Actions.toggleModal(toggle));
        }
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)