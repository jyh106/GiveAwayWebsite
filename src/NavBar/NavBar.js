import React, { Component } from 'react';
import "./NavBar.css";
import StyleMenu from './StyleMenu/StyleMenu.js';
import FilterMenu from './FilterMenu/FilterMenu.js';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
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
            <div className="request_userLocation location">
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
                <NavLink to="/newform" className="addNewFormButton"> +GiveAway </NavLink>
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
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)