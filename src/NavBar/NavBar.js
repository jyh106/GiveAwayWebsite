import React, { Component } from 'react';
import "./NavBar.css";
import StyleMenu from './StyleMenu/StyleMenu.js';
import FilterMenu from './FilterMenu/FilterMenu.js';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return(
            <div className="navBar">
                <StyleMenu />
                <FilterMenu />
                <NavLink to="/newform" className="addNewFormButton"> add new form</NavLink>
            </div>
        )
    }
}

export default NavBar;