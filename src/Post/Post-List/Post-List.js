import React, { Component } from 'react';
import "./Post-List.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather} from '@fortawesome/free-solid-svg-icons'
import Actions from '../../Actions/actions.js'
library.add(faMapMarkerAlt, faFeather) 

class PostList extends Component {
    renderPostDetailModal(title, date, address, description){
        this.props.updateClickedPost({
            'name': title,
            'date': date,
            'address': address,
            'note': description
        })
        this.props.toggleDisplay(true);
    }

    render(){
        return(
            <div className="postList" 
                onClick={()=>{this.renderPostDetailModal(this.props.name, this.props.date, this.props.address, this.props.description)}}>
                <div className="postList_details postList_name">
                    <FontAwesomeIcon icon="feather" className="icon_feather" />
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

function mapStateToProps(state){
    return{
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        updateClickedPost: (postInfo)=> {
            dispatch(Actions.updateClickedPost(postInfo))
        },
        toggleDisplay: (toggle) => {
            dispatch(Actions.toggleModal_post(toggle))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList)