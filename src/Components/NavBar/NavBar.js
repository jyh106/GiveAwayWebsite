import React, { Component } from 'react';
import "./NavBar.css";
import StyleMenu from './StyleMenu/StyleMenu.js';
import { connect } from 'react-redux';
import Actions from '../../Actions/actions.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faHeart);

class NavBar extends Component {
    constructor() {
        super();
        this.state = {
            displayHeartOnButton: false,
        }
    }

    toggleDisplayHeartOnButton() {
        this.setState({
            displayHeartOnButton: !this.state.displayHeartOnButton
        })
    }

    newFormButtonLabel() {
        if (!this.state.displayHeartOnButton) {
            return "Give"
        } 
        return <FontAwesomeIcon icon="heart"></FontAwesomeIcon>
    }
    renderNewFormButton() {
        return (
            <div className="addNewFormButton"
                onMouseEnter={()=>this.toggleDisplayHeartOnButton()}
                onMouseLeave={()=>this.toggleDisplayHeartOnButton()}>
                <a href="/newGiveAway">
                    {this.newFormButtonLabel()}
                </a>
            </div>
        )
    }
    render() {
        return(
            <div className="navBar">
                <StyleMenu />
                {this.renderNewFormButton()}
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