import React, { Component } from 'react';
import { connect } from "react-redux";
import Header from "../Header/Header.js";
import NavBar from "../NavBar/NavBar.js";
import { withRouter } from 'react-router-dom';
import SideBar from '../SideBar/SideBar.js';
import PostBoard from '../PostBoard/PostBoard.js';
import ModalContainer from '../Modals/ModalContainer';
import './Home.css';
import Utils from '../../utils.js';

class Home extends Component {
    success(position) {
        this.props.updateUserLocation([position.coords.latitude, position.coords.longitude])
        console.log('success',position.coords)
    }
    
    error(er) {
        console.log('fail to access user location',er.code)
    }

    getLocation() {
        if (!this.props.userInfo['isSignedIn']) {
            return null
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.success, this.error, 
                {
                enableHighAccuracy: false, 
                maximumAge        : 0, 
                timeout           : 60000
              }
              )
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }
    
    render() {
        return (
             <div className="App">
                {this.getLocation()}
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
        userInfo: Utils.getUserInfo(state),
        isPageMaskShown: Utils.getPageMaskShown(state),
    }
  }
  
  
  export default withRouter(connect(
    mapStateToProps
  )(Home))