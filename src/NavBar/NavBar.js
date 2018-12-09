import React, { Component } from 'react';
import "./NavBar.css";
import StyleMenu from './StyleMenu/StyleMenu.js';
import FilterMenu from './FilterMenu/FilterMenu.js';
import CitySelector from './CitySelector/CitySelector.js'
import { connect } from 'react-redux';
import Actions from '../Actions/actions.js'

class NavBar extends Component {
    render() {
        return(
            <div className="navBar">
                <StyleMenu />
                <FilterMenu />
                <CitySelector />
                <div className="myPageButton"><a href="/myPage">Manage my posts</a></div>
                <div className="addNewFormButton" onClick={()=> this.props.toggleModal('newForm', true)}>
                    +GiveAway
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
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