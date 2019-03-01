import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Constants from "../../constants";
import Utils from "../../utils";
import './Map.css';

import { Map as LeafletMap, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

const position = [37.5775225, -122.3481093];

class Map extends Component {
    renderMarkers() {
        const markerList = [];

        let displayPosts = [];
        if (this.props.searchBarStatus) { //display search results
            displayPosts = this.props.searchResult;
        } else if (this.props.showUserPosts) { //display user posts
            displayPosts = this.props.userPosts;
        }  else {
            displayPosts = this.props.posts //display all posts
        }

        for (let post of displayPosts) {
            const marker = <Marker position={post.location} key={post.id}>
                                <Popup>
                                    <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + post.id}`} key={post.id}>
                                        <div className="map-popUpMessage">
                                            Click to see details
                                        </div>
                                    </Link>
                                </Popup>
                                <Tooltip>
                                    {post.name}
                                </Tooltip>
                            </Marker>
            markerList.push(marker)
        }

        return markerList
    }
    render() {
        return (
             <div className="Map">
                <LeafletMap center={position} zoom={14}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {this.renderMarkers()}
                </LeafletMap>
             </div>
        )
    }
}

function mapStateToProps(state){
    return{
        userInfo: Utils.getUserInfo(state),
        posts: Utils.getPosts(state),
        showUserPosts: Utils.shouldShowUserPosts(state),
        searchResult: Utils.getSearchResults(state),
        userPosts: Utils.getUserPosts(state),
        showPostOnMap: Utils.getShowPostOnMapStatus(state),
    }
  }

export default connect(
   mapStateToProps, 
)(Map);