import React, { Component } from 'react';
import "./PostPage.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import Constants from '../../constants';
import Utils from '../../utils';
import Actions from '../../Actions/actions.js'
import { BrowserRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faAngleLeft, faAngleRight,
         faCalendarAlt, faStickyNote } from '@fortawesome/free-solid-svg-icons'
library.add(faMapMarkerAlt, faAngleLeft, faAngleRight, 
            faCalendarAlt, faStickyNote) 

class PostPage extends Component {
    componentDidMount() {
        const postID = this.props.match.params.postID;
        this.props.getClickedPostInfo(postID)
    }

    render() {

        return (
        <BrowserRouter>
            <div className="postPageWrapper">
                <div className="homeButton">
                    <a href="/">
                        Main
                    </a>
                </div>
                
                <div className="postName">  
                    {this.props.post.name}
                </div>

                <div className="postDate">
                    <FontAwesomeIcon icon="calendar-alt" />
                    {this.props.post.date}
                </div>

                <div className="postAddress">
                    <FontAwesomeIcon icon="map-marker-alt" />
                    {this.props.post.address}
                </div>

                <div className="postNote">
                    <FontAwesomeIcon icon="sticky-note" />
                    {this.props.post.note}
                </div>
            </div>
        </BrowserRouter>
        )
    }
}

function mapStateToProps(state) {
    return {
        post: Utils.getClickedPostInfo(state),
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
)(PostPage);