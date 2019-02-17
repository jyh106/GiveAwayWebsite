import React, { Component } from 'react';
import "./UserAccountPage.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Utils from '../../utils';
import Actions from '../../Actions/actions.js';
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUserCircle, faCopy 
        , faCog, faComment, faHeart
        , faTh, faThList} from '@fortawesome/free-solid-svg-icons'
library.add(faArrowLeft, faUserCircle, faCopy, faCog
            , faComment, faHeart, faTh, faThList) 

class UserAccountPage extends Component {
    renderAccountSideBar() {
        return(
            <div className="accountSideBar">
                <div className="userNameWrapper">
                    <FontAwesomeIcon icon="user-circle" className="account-userIcon"/>
                    {this.props.userInfo['username']}
                </div>

                <div className="accountSideBarElement accountSideBar-addPost">
                    <FontAwesomeIcon icon="heart" className="accountSideBar-icon" />
                    Give
                </div>

                <div className="accountSideBarElement accountSideBar-myPosts">
                    <FontAwesomeIcon icon="copy" className="accountSideBar-icon" />
                    My posts
                </div>

                <div className="accountSideBarElement accountSideBar-settings">
                    <FontAwesomeIcon icon="cog" className="accountSideBar-icon" />
                    Settings
                </div>

                <div className="accountSideBarElement accountSideBar-messages">
                    <FontAwesomeIcon icon="comment" className="accountSideBar-icon" />
                    Messages
                </div>
            </div>
        )
    }

    renderPostNavigationBar() {
        return(
            <div className="accountPostNavBar">
                <div className="accountPostNavBar-selectButton">
                    Select
                </div>
                <div className="accountPostNavBar-styleMenu">
                    <div className="accountPostNavbar-list">
                        <FontAwesomeIcon icon="th-list" className="account-iconList"/>
                    </div>
                    <div className="accountPostBar-gallery">
                        <FontAwesomeIcon icon="th" className="account-iconGallery"/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <BrowserRouter>
            <div className="userAccountWrapper">
                <div className="userAccount-navigation">
                    <a href="/"className="userAccount-homeButton">
                        <FontAwesomeIcon icon="arrow-left" className="icon_leftArrow" />
                        Dashboard
                    </a>
                </div>
                {this.renderAccountSideBar()}
                {this.renderPostNavigationBar()}
            </div>
            </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        userInfo: Utils.getUserInfo(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

 export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAccountPage)
