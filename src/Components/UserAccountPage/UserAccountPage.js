import React, { Component } from 'react';
import "./UserAccountPage.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Utils from '../../utils';
import Header from "../Header/Header.js";
import Actions from '../../Actions/actions.js';
import NewForm from "../../Components/NewForm/NewForm.js";
import { BrowserRouter } from 'react-router-dom';
import PostsGallery from "../Post/Post-Gallery.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faUserCircle, faCopy 
        , faCog, faComment, faHeart
        , faTh, faThList, faSearch
        ,faEdit, faHome, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
library.add(faArrowLeft, faUserCircle, faCopy, faCog
            , faComment, faHeart, faTh, faThList
            , faSearch,faEdit, faHome, faTrashAlt) 

class UserAccountPage extends Component {
    renderAccountPageNav() {
        return (
            <div className="accountPageNav">
                <a href="/"className="userAccount-homeButton">
                    <div className="account-home">
                        <FontAwesomeIcon icon="arrow-left" className="icon_leftArrow" />
                        <FontAwesomeIcon icon="home" className="accountIcon-home" />
                    </div>
                </a>
                <div className="accountPageNav-user">
                    <FontAwesomeIcon icon="user-circle" className="accountPageIcon-userCircle" />
                    <div className="accountPageNav-username">
                        {this.props.userInfo['username']}
                    </div>
                </div>
                <div className="accountPageNav-SearchBox">
                    <input className="postSearchBox"></input>
                    <FontAwesomeIcon icon="search" className="accountPageIcon-search"/>
                </div>
            </div>
        )
    }

    renderPostNavigationBar() {
        return(
            <div className="accountPostNavBar">
                <div className="accountPageNav-Header">
                    My posts
                </div>
                <div className="accountPostNavBar-styleMenu">
                    <div className="accountPostNavbar-list">
                        <FontAwesomeIcon icon="th-list" className="account-iconList"/>
                    </div>
                    <div className="accountPostBar-gallery">
                        <FontAwesomeIcon icon="th" className="account-iconGallery"/>
                    </div>
                </div>
                <div className="accountPostNavBar-managePostMenu">
                    <div className="accountPostNavBar-editButton">
                        <FontAwesomeIcon icon='edit' className="accountIcon-editIcon"/>
                    </div>
                    <div className="accountPostNavBar-deleteButton">
                        <FontAwesomeIcon icon='trash-alt' className="accountIcon-trashIcon"/>
                    </div>
                </div>
            </div>
        )
    }

    renderPostBoard() {
        const posts = JSON.parse(this.props.userInfo['userPosts']);
        let userPosts = [];
        for(let post of posts){
            const postAddress = {
                'street': post.address.split(",")[0],
                'city': post.address.split(",")[1],
            }
            userPosts.push(<PostsGallery name={post.name} 
                             address={postAddress}
                             date={post.date}
                             description={post.note}
                             editable={post.editable}
                             images ={post.images}
                             key={post.name}
                             id={post.id}
                             />)
        }
        return(
            <div className="accountPage-postBoardWrapper">
                <div className="accountPage-postBoardScrollableWrapper">
                    {userPosts}
                </div>
            </div>
        )
    }

    renderEditPostForm() {
        return(
            <div className="userAccount-editForm">
                <NewForm />
            </div>
        )
    }

    render() {
        return (
            <BrowserRouter>
            <div className="userAccountWrapper">
                <div className="userAccountPage-headerWrapper">
                    <Header />
                </div>
                {this.renderPostNavigationBar()}
                {this.renderPostBoard()}
                {this.renderEditPostForm()}
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
