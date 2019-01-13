import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import SideBar from '../SideBar/SideBar.js';
import SideBarHidden from '../SideBar/SideBarHidden.js';
import PostBoard from '../PostBoard/PostBoard.js';
import ModalContainer from '../Modals/ModalContainer';
import { BrowserRouter } from 'react-router-dom';
import './Home.css';
import Utils from '../../utils.js';

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
                <SideBarHidden />
                <ModalContainer />
                {this.displayPageMask()}
             </div>
        </BrowserRouter>
        )
    }
}

function mapStateToProps(state){
    return{
        isPageMaskShown: Utils.getPageMaskShown(state),
    }
  }
  
  
  export default connect(
    mapStateToProps
  )(Home)