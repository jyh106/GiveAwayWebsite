import React, { Component } from 'react';
import "./Header.css";
import SearchBox from './SearchBox/SearchBox.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDove} from '@fortawesome/free-solid-svg-icons'

library.add(faDove) 

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div className="header__name"> 
                    <FontAwesomeIcon icon="dove" className="dove" /> GiveAway 
                </div>
                <SearchBox />
            </div>
        )
    }
}

export default Header;