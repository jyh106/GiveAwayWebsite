import React, { Component } from 'react';
import "./NavBar.css";
import { connect } from 'react-redux';
import Actions from '../../Actions/actions.js';
import Utils from "../../utils.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTh, faThList, faMapMarkedAlt, faBook } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart, faTh, faThList, faMapMarkedAlt, faBook);

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            displayHeartOnButton: false,
        }
    }

    toggleDisplayHeartOnButton() {
        this.setState({
            displayHeartOnButton: !this.state.displayHeartOnButton
        })
    }

    newFormButtonLabel() {
        if (!this.state.displayHeartOnButton) {
            return null
        } 
        return <FontAwesomeIcon icon="heart" className="icon_heart fadeInHeart"></FontAwesomeIcon>
    }

    renderNewFormButton() {
        return (
            <div className="addNewFormButton"
                onMouseEnter={()=>this.toggleDisplayHeartOnButton()}
                onMouseLeave={()=>this.toggleDisplayHeartOnButton()}>
                <a href="/newGiveAway" className="navBar_giveButton">
                    Give {this.newFormButtonLabel()}
                </a>
            </div>
        )
    }

    getActiveClassName(style){
        if (this.props.currentStyle === style) {
            return "activeStyle"
        }
        return ""
    }

    renderUserPostsButton() {
        if (!this.props.isUserSignedIn) {
            return null
        }
        return( 
            <div className={` ${(this.props.shouldShowUserPosts) ? 'userPostsButtonActive' : "userPostsButton"}`}
                onClick={()=>this.props.showUserPosts(!this.props.shouldShowUserPosts)}>
                <FontAwesomeIcon icon="book" className="icon_userPosts"/>
                My posts
            </div>
        )
    }


    renderStyleButtons() {
        return (
            <div className="styleBar">
                <div className={`display_map styleIcon ${this.getActiveClassName('Map')}`}
                    onClick = {()=>{this.props.changeDisplayStyle('Map')}}>
                    <FontAwesomeIcon icon="map-marked-alt" className="icon_map"></FontAwesomeIcon>
                </div>
                <div className= {`display_list styleIcon ${this.getActiveClassName('List')}`}
                    onClick = {()=>{this.props.changeDisplayStyle('List')}}>
                    <FontAwesomeIcon icon="th-list" className="icon_list"></FontAwesomeIcon>
                </div>
                <div className={`display_gallery styleIcon ${this.getActiveClassName('Gallery')}`}
                    onClick = {()=>{this.props.changeDisplayStyle('Gallery')}}>
                    <FontAwesomeIcon icon="th" className="icon_gallery"></FontAwesomeIcon>
                </div>
                {this.renderUserPostsButton()}
            </div>
        )
    }

    render() {
        return(
            <div className="navBar">
                {this.renderNewFormButton()}
                {this.renderStyleButtons()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        currentStyle: Utils.getDisplayStyle(state),
        isUserSignedIn: Utils.getUserInfo(state)['isSignedIn'],
        shouldShowUserPosts: Utils.shouldShowUserPosts(state)

    }
  }

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle) => {
            dispatch(Actions.toggleModal(type, toggle));
        },
        changeDisplayStyle: (style)=> dispatch(Actions.changeDisplayStyle(style)),
        showUserPosts: (toggle) => {
            dispatch(Actions.shouldShowUserPosts(toggle));
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)