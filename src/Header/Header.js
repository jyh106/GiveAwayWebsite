import React, { Component } from 'react';
import "./Header.css";
import SearchBox from './SearchBox/SearchBox.js';


class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header__name"> GiveAway</div>
                <SearchBox />
            </div>
        )
    }
}

export default Header;