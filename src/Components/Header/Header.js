import React, { Component } from 'react';
import "./Header.css";
import SearchBox from './SearchBox/SearchBox.js';
import User from "./User/User.js";

class Header extends Component {
    renderPageTitle() {
        return (
            <div className="header_name"> 
                Give&Seek
            </div>
        )
    }
    render() {
        return(
            <div className="header">
                {this.renderPageTitle()}
                <SearchBox />
                <User />
            </div>
        )
    }
}

  export default Header;