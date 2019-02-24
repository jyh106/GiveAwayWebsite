import React, { Component } from 'react';
import "./Header.css";
import { connect } from 'react-redux';
import SearchBox from './SearchBox/SearchBox.js';
import { Link } from 'react-router-dom';

import User from "./User/User.js";

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header_name"> 
                    <Link to="/" className="header_label">
                        GiveAway
                    </Link>
                </div>
                <SearchBox />
                <User />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
    }
}
  
function mapDispatchToProps(dispatch) {
    return {
    }
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)