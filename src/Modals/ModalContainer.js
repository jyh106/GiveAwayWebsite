import React, { Component } from 'react';
import ModalPost from '../Modals/Modal_post/Modal_post.js';
import ModalSignIn from "../Modals/Modal_SignIn/Modal_SignIn.js";
import ModalNewForm from '../Modals/ModalNewForm/ModalNewForm';
import ModalSignUp from '../Modals/ModalSignUp/ModalSignUp';
import ModalPhotoDisplay from "../Modals/ModalPhotoDisplay/ModalPhotoDisplay";
import { connect } from 'react-redux';


class ModalContainer extends Component {
    render() {
        if (this.props.modalShown.includes('newForm')) {
            return <ModalNewForm />
        } else if (this.props.modalShown.includes('post')) {
            return <ModalPost />
        } else if (this.props.modalShown.includes('signIn')) {
            return <ModalSignIn />
        } else if (this.props.modalShown.includes('photos')) {
            return <ModalPhotoDisplay />
        } else if (this.props.modalShown.includes('signUp')) {
            return <ModalSignUp />
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        modalShown: state.Modal.get('modalShown'),
    }
  }


 export default connect(
    mapStateToProps
)(ModalContainer)