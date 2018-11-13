import React, { Component } from 'react';
import "./Header.css";
import SearchBox from './SearchBox/SearchBox.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import Actions from "../Actions/actions";


library.add(faDove, faUserCircle) 

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header_name"> 
                    <FontAwesomeIcon icon="dove" className="dove" /> GiveAway 
                </div>
                <SearchBox />
                <div className="user">
                    <FontAwesomeIcon icon="user-circle" className="icon_user" /> 
                    <p className="sign_in" onClick={()=> this.props.toggleModal(true) }>Sign in</p>
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
        toggleModal: (toggle) => {
            dispatch( Actions.toggleModal_signIn(toggle) )
        }
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)