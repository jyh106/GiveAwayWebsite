import React, { Component } from 'react';
import "./Modal_post.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather} from '@fortawesome/free-solid-svg-icons'
import Actions from '../../Actions/actions.js'
import OutsideClick from '../../OutsideClick';
library.add(faMapMarkerAlt, faFeather) 

class ModalPost extends Component {
    render() {
        return(
            <OutsideClick>
                <div className="modal_post_detail">
                    <div className="modal_title">
                        {this.props.clickedPostInfo.name}
                    </div>
                    <div className="modal_date">
                        {this.props.clickedPostInfo.date}
                    </div>
                    <div className="modal_address">
                    <FontAwesomeIcon icon="map-marker-alt" className="icon_address" /> {this.props.clickedPostInfo.address}
                    </div>
                    <div className="modal_note">
                        {this.props.clickedPostInfo.note}
                    </div>
                </div>
            </OutsideClick>
        )
    }
}

function mapStateToProps(state){
    return{
        clickedPostInfo: state.PostBoardReducer.get('clickedListPost')
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        updateClickedPost: (postInfo)=> {
            dispatch(Actions.updateClickedPost(postInfo))
        }
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModalPost)