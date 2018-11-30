import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import PostBoard from '../PostBoard/PostBoard.js';
import ModalPost from '../Modals/Modal_post/Modal_post.js';
import ModalSignIn from "../Modals/Modal_SignIn/Modal_SignIn.js";
import ModalNewForm from '../Modals/ModalNewForm/ModalNewForm';
import ModalSignUp from '../Modals/ModalSignUp/ModalSignUp';
import ModalPhotoDisplay from "../Modals/ModalPhotoDisplay/ModalPhotoDisplay";
import { BrowserRouter, Route } from 'react-router-dom';

import './Home.css';

class Home extends Component {
    displayPageMask(){
        if (!this.props.isPageMaskShown) {
            return null
        }
        return (
            <div className="page-mask"></div>
        )
    }
    
    render() {
        return (
        <BrowserRouter>
             <div className="App">
                <Header />
                <NavBar />
                <PostBoard />
                <ModalPost />
               <ModalSignIn />
               <ModalNewForm />
               <ModalSignUp />
               <ModalPhotoDisplay />
                {this.displayPageMask()}
             </div>
        </BrowserRouter>
        )
    }
}

function mapStateToProps(state){
    return{
        isPageMaskShown: state.Modal.get('isPageMaskShown'),
    }
  }
  
  
  export default connect(
    mapStateToProps
  )(Home)