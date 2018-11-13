import React, { Component } from 'react';
import "./NavBar.css";
import StyleMenu from './StyleMenu/StyleMenu.js';
import FilterMenu from './FilterMenu/FilterMenu.js';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import Actions from '../Actions/actions.js'
library.add(faBell, faCheckCircle) 

class NavBar extends Component {
    renderUserLocation(){
        if(this.props.userLocation !== 'none'){
            return (
                <div className="userLocation location">
                    <FontAwesomeIcon className="icon_check" icon="check-circle" />
                    Displaying results near: 
                    <div className="zipcode">
                        {this.props.userLocation}
                    </div>
                </div>
            )
        } 
        return(
            <div className="request_userLocation location" onClick={()=>this.props.toggleModal('zipcode', true)}>
                <FontAwesomeIcon className="icon_bell" icon="bell" />
                Please update your location to see give aways near you.
            </div>
        )
    }
    render() {
        return(
            <div className="navBar">
                <StyleMenu />
                <FilterMenu />
                {this.renderUserLocation()}
                <div className="addNewFormButton" onClick={()=> this.props.toggleModal('newForm', true)}> +GiveAway</div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userLocation: state.AppReducer.get('userLocation'),
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle) => {
            dispatch(Actions.toggleModal(type, toggle));
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)