import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import Constants from "../../constants";
import Utils from "../../utils";
import './Map.css';

import { Map as LeafletMap, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';

const position = [37.5775225, -122.3481093];

class Map extends Component {
    renderMarkers() {
        const markerList = [];
        let i = 0;
        for (let post of this.props.posts) {
            const position = Constants.MOCK_POST_POSITION[i];
            markerList.push(
                <Marker position={position} key={post.id}>
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
            )
            i++;
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
    }
  }

export default connect(
   mapStateToProps, 
)(Map);