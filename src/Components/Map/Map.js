import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Constants from "../../constants";
import Utils from "../../utils";
import './Map.css';
import { Map as LeafletMap, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

const position = [37.5775225, -122.3481093];

class Map extends Component {
    renderMarker(postLocation, postID, postName){
        return (
            <Marker position={postLocation} key={postID}>
                {this.renderPopUp(postID)}
                {this.renderToolTip(postName)}
            </Marker>
        )
    }

    renderToolTip(postName) {
        return (
            <Tooltip>
                {postName}
            </Tooltip>
        )
    }

    renderPopUp(postID) {
        return (
            <Popup>
                <Link to={`${Constants.SINGULAR_POST_PAGE_ROUTE + postID}`}>
                    <div className="map-popUpMessage">
                        Click to see details
                    </div>
                </Link>
            </Popup>
        )
    }

    renderMarkers() {
        const markerList = [];
        let displayPosts = [];

        if (this.props.searchBarStatus) { //display search results
            displayPosts = this.props.searchResult;
        } else if (this.props.showUserPosts) { //display user posts
            displayPosts = this.props.userPosts;
        }  else if (Object.keys(this.props.showPostOnMap).length > 0) { // if individual post address was clicked
                const postLocation = [this.props.showPostOnMap.location_lat, this.props.showPostOnMap.location_long];
                const postID = this.props.showPostOnMap.id;
                const postName = this.props.showPostOnMap.name;
            return this.renderMarker(postLocation, postID, postName)
        } else { //display all posts
            displayPosts = this.props.posts
        }

        for (let post of displayPosts) {
            const postLocation = [post.location_lat, post.location_long];
            markerList.push(
                this.renderMarker(postLocation, post.id, post.name)
            )
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