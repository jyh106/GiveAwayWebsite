import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import SideBar from '../SideBar/SideBar.js';
import SideBarStatic from '../SideBar/SideBarStatic.js';
import PostBoard from '../PostBoard/PostBoard.js';
import ModalContainer from '../Modals/ModalContainer';
import { BrowserRouter } from 'react-router-dom';
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
                <SideBar />
                <SideBarStatic />
                <ModalContainer />
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