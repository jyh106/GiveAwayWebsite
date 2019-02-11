import React, { Component } from 'react';
import ModalPost from '../Modals/Modal_post/Modal_post.js';
import ModalSignIn from "../Modals/Modal_SignIn/Modal_SignIn.js";
import ModalSignUp from '../Modals/ModalSignUp/ModalSignUp';
import ModalPhotoDisplay from "../Modals/ModalPhotoDisplay/ModalPhotoDisplay";
import Utils from "../../utils"
import { connect } from 'react-redux';


class ModalContainer extends Component {
    render() {
       if (this.props.modalShown.includes('post')) {
            return <ModalPost />
        } else if (this.props.modalShown.includes('signIn')) {
            return <ModalSignIn />
        } else if (this.props.modalShown.includes('photos')) {
            return <ModalPhotoDisplay modalStyle={this.props.modalStyle}/>
        } else if (this.props.modalShown.includes('signUp')) {
            return <ModalSignUp />
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        modalShown: Utils.getShowingModals(state),
    }
  }


 export default connect(
    mapStateToProps
)(ModalContainer)