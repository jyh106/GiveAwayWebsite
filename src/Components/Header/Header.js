import React, { Component } from 'react';
import "./Header.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import SearchBox from './SearchBox/SearchBox.js';
library.add(faAngleDown, faUserCircle) 

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header_name"> 
                   GiveAway 
                </div>
                <div className="user">
                    <SearchBox />
                    <FontAwesomeIcon icon="user-circle" className="icon_user" /> 
                    <div className="accountDropDownMenu">
                        <FontAwesomeIcon icon="angle-down" className="icon_angleDown" />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
    }
}
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleModal: (type, toggle) => {
            dispatch( Actions.toggleModal(type, toggle) )
        }
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)