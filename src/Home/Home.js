import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import PostBoard from '../PostBoard/PostBoard.js';
import ModalZipCode from "../Modals/Modal_zipcode/Modal_zipcode.js";
import ModalPost from '../Modals/Modal_post/Modal_post.js';
import ModalSignIn from "../Modals/Modal_SignIn/Modal_SignIn.js"
import ModalNewForm from '../Modals/ModalNewForm/ModalNewForm';
import ModalSignUp from '../Modals/ModalSignUp/ModalSignUp'
import './Home.css';



class Home extends Component {
    displayPageMask(){
        if (this.props.isPageMaskShown) {
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
                {/* <ModalZipCode /> */}
                <ModalPost />
               <ModalSignIn />
               <ModalNewForm />
               <ModalSignUp />
                {this.displayPageMask()}
             </div>
        )
    }
}

function mapStateToProps(state){
    return{
        isPageMaskShown: state.Modal.get('isPageMaskShown'),
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)