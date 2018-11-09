import React, { Component } from 'react';
import "./Post-List.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather} from '@fortawesome/free-solid-svg-icons'
library.add(faMapMarkerAlt, faFeather) 

class PostList extends Component {
    render(){
        return(
            <div className="postList">
                <div className="postList_details postList_name">
                    <FontAwesomeIcon icon="feather"/>
                    {this.props.name} 
                    <div className="postList_date">
                        ({this.props.date})
                    </div>
                </div>
                <div className="postList_details postList_address">
                   <FontAwesomeIcon icon="map-marker-alt" className="post_address_icon"/> 
                   {this.props.address}
                </div>
                <div className="postList_details postList_note">
                    {this.props.description}
                </div>
            </div>

        )
    }
}

export default PostList;
