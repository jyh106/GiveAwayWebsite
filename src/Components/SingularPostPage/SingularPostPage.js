import React, { Component } from 'react';
import "./SingularPostPage.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Constants from '../../constants';
import Utils from '../../utils';
import Actions from '../../Actions/actions.js'
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather,
         faAngleLeft, faAngleRight,
         faCalendarAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons'
library.add(faMapMarkerAlt, faFeather, 
            faAngleLeft, faAngleRight, 
            faCalendarAlt, faStickyNote) 

class SingularPostPage extends Component {
    componentDidMount() {
        const singularPostID = this.props.match.params.postID;
        this.props.getClickedPostInfo(singularPostID)
    }

    render() {

        return (
        <BrowserRouter>
            <div className="singularPostPageWrapper">
                <div className="homeButton">
                    <a href="/">
                        Main
                    </a>
                </div>
                
                <div className="postName">  
                    {this.props.postInfo.name}
                </div>
            </div>
        </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        postInfo: Utils.getClickedPostInfo(state),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getClickedPostInfo: (postID) => {
            dispatch(Actions.fetchCurrentPostData(postID))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingularPostPage);