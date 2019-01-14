import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import "./SearchBox.css";
import Actions from '../../../Actions/actions.js';
import OutsideAlert from '../../../OutsideClick';
library.add(faSearch);

class SearchBox extends Component {
    render() {
        return(
            <OutsideAlert>
                <div className={"searchBox"}>
                    <input className="searchBox_input"></input>
                    <FontAwesomeIcon className="searchBox_icon" icon="search" />
                </div>
            </OutsideAlert>
        )
    }
}

function mapStateToProps(state){
    return{
       state
    }
  }
  
function mapDispatchToProps(dispatch){
    return {
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBox)