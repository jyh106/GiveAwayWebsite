import React, { Component } from 'react';
import "./Modal_post.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather , faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import OutsideClick from '../../OutsideClick';
library.add(faMapMarkerAlt, faFeather, faAngleLeft, faAngleRight) 

class ModalPost extends Component {
    // this modal is for displaying individual post when user click on a post when viewing in list style
    renderImages(){
        return (
            <div className="post_details postImages">
                <FontAwesomeIcon className="icon_angleLeft" icon="angle-left" />
                    <img className="image" src='https://www.akc.org/wp-content/themes/akc/component-library/assets//img/welcome.jpg' alt="clothes"></img>
                <FontAwesomeIcon className="icon_angleRight" icon="angle-right" /> 
            </div>
        )
    }

    render() {
        if(!this.props.modalShown.includes('post')) {
            return null
        }
        return (
            <OutsideClick>
            <div className="modal_post_detail">
                <div className="modal_title">
                    {this.props.clickedPostInfo.name}
                </div>
                <div className="modal_date">
                    {this.props.clickedPostInfo.date}
                </div>
                <div className="modal_address">
                    <FontAwesomeIcon icon="map-marker-alt" className="icon_address" /> 
                    {this.props.clickedPostInfo.address}
                </div>
                <div className="modal_note">
                    {this.props.clickedPostInfo.note}
                </div>
                {this.renderImages()}
            </div>
            </OutsideClick>
        )
    }
}

function mapStateToProps(state){
    return{
        modalShown: state.Modal.getIn(['modalShown']),
        clickedPostInfo: state.PostBoard.get('clickedListPost')
    }
  }
  
  
  export default connect(
    mapStateToProps,
  )(ModalPost)