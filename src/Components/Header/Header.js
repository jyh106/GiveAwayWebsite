import React, { Component } from 'react';
import "./Header.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { connect } from 'react-redux';
import SearchBox from './SearchBox/SearchBox.js';
import { BrowserRouter } from 'react-router-dom';
import User from "./User/User.js";

class Header extends Component {
    render() {
        return(
            <BrowserRouter>
            <div className="header">
                <div className="header_name"> 
                    <a href="/about" className="header_label">
                        GiveAway
                    </a>
                </div>
                <SearchBox />
                <User />
            </div>
            </BrowserRouter>
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