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
        }  else if (Object.keys(this.props.showPostOnMap).length > 0) { // if individual post address was clicked
            return (
                <Marker position={this.props.showPostOnMap.location} key="individualPostOnMap">
                    <Popup>
                        <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + this.props.showPostOnMap.id}`}>
                            <div className="map-popUpMessage">
                                Click to see details
                            </div>
                        </Link>
                    </Popup>
                    <Tooltip>
                        {this.props.showPostOnMap.name}
                    </Tooltip>
                </Marker>
            )
        } else {
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
            <LeafletMap center={position} zoom={14} className={this.props.mapClassName}>
                <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.renderMarkers()}
            </LeafletMap>
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