import React, { Component } from 'react';
import "./Post-List.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faFeather, faCircle} from '@fortawesome/free-solid-svg-icons'
import Actions from '../../Actions/actions.js'
library.add(faMapMarkerAlt, faFeather, faCircle) 

class PostList extends Component {
    renderPostDetailModal(){
        this.props.updateClickedPost({
            'name': this.props.name,
            'date': this.props.date,
            'address': this.props.address,
            'note': this.props.description
        })
        this.props.toggleDisplay('post', true);
    }

    renderNote(){
        if(this.props.description === 'none'){
            return null
        }
        return (
            <div className="postList_note postElement postList_label" 
                        onClick={()=>{this.renderPostDetailModal()}}>
                <FontAwesomeIcon icon="circle" className="icon_circle" /> note 
            </div>
        )
    }

    renderImageMark() {
        // if(!this.props.images){
        //     return null
        // }
        return (
            <div className="postList_image postElement postList_label">
                <FontAwesomeIcon icon="circle" className="icon_circle" /> images
            </div>
        )
    }

    render(){
        return(
            <div className="postList postElement"
                onClick={()=>{this.renderPostDetailModal()}}>

                <div className="postList_name postElement postList_label" 
                    onClick={()=>{this.renderPostDetailModal()}}>
                    <FontAwesomeIcon icon="feather" className="icon_feather" />
                    {this.props.name} 
                </div>

                <div className="postList_date postElement postList_label" 
                    onClick={()=>{this.renderPostDetailModal()}}>
                    ({this.props.date})
                </div>

                {this.renderNote()}

                <div className="postList_address postElement postList_label"
                    onClick={()=>{this.renderPostDetailModal()}}>
                    <FontAwesomeIcon icon="map-marker-alt" className="icon_address" /> 
                    {this.props.address.split(',')[1]}
                </div>

                {this.renderImageMark()}
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
        toggleDisplay: (type, toggle) => {
            dispatch(Actions.toggleModal(type, toggle))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostList)