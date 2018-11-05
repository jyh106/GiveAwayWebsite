import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import "./SearchBox.css";


library.add(faSearch);

class SearchBox extends Component {
    render() {
        return(
            <div className="searchBox">
                <input className="searchBox__input"></input>
                <FontAwesomeIcon className="searchBox__Icon" icon="search" />
            </div>
        )
    }
}

export default SearchBox;