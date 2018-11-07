import React, { Component } from 'react';
import "./NavBar.css";
import StyleMenu from './StyleMenu/StyleMenu.js';
import FilterMenu from './FilterMenu/FilterMenu.js';

class NavBar extends Component {
    render() {
        return(
            <div className="navBar">
                <StyleMenu />
                <FilterMenu />
            </div>
        )
    }
}

export default NavBar;