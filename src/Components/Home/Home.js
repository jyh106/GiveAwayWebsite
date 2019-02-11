import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import SideBar from '../SideBar/SideBar.js';
import PostBoard from '../PostBoard/PostBoard.js';
import ModalContainer from '../Modals/ModalContainer';
import './Home.css';
import Utils from '../../utils.js';

class Home extends Component {
    render() {
        return (
             <div className="App">
                <Header />
                <NavBar />
                <PostBoard />
                <SideBar />
                <ModalContainer modalStyle='galleryStyle' />
                {Utils.renderPageMask(this.props.isPageMaskShown)}
             </div>
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