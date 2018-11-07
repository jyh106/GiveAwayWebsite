import React, { Component } from 'react';
import "./NavBar.css";
import DisplayStyleMenu from './DisplayStyleMenu/DisplayStyleMenu.js';
import FilterMenu from './FilterMenu/FilterMenu.js';

// TODO name this navbar
class FilterBar extends Component {
    render() {
        return(
            <div className="navBar">
                <DisplayStyleMenu />
                <FilterMenu />
            </div>
        )
    }
}

export default FilterBar;