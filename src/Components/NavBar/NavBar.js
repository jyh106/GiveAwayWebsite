import React, { Component } from 'react';
import "./NavBar.css";
import StyleMenu from './StyleMenu/StyleMenu.js';
import { connect } from 'react-redux';
import Actions from '../../Actions/actions.js';

class NavBar extends Component {
    render() {
        return(
            <div className="navBar">
                <StyleMenu />
                <div className="addNewFormButton">
                    <a href="/newGiveAway">+GiveAway</a>
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