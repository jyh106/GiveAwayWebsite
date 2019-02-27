import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Actions from "../../../Actions/actions";
import React, { Component } from 'react';
import "./SearchBox.css";
library.add(faSearch);

class SearchBox extends Component {
    handleSearch(searchInput) {
        this.props.handleSearch(searchInput)
        this.props.searchBarActive(true)
    }

    render() {
        return(
                <div className={"searchBox"}>
                    <input className="searchBox_input" onChange={(e)=> this.handleSearch(e.target.value)}></input>
                    <FontAwesomeIcon className="searchBox_icon" icon="search" />
                </div>
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
        handleSearch: (searchInput) => {
            dispatch(Actions.searchForReleventPosts(searchInput))
        },
        searchBarActive: (isActive) => {
            dispatch(Actions.searchBarStatus(isActive))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBox)