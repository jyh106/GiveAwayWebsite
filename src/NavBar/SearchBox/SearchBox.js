import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import "./SearchBox.css";
import Actions from '../../Actions/actions.js';
import OutsideAlert from '../../OutsideClick';
library.add(faSearch);

class SearchBox extends Component {
    searchBoxOnFocus(){
        if (this.props.isSearchBoxOnFocus) {
            return 'searchBox_focus'
        }
        return ''
    }

    render() {
        return(
            <OutsideAlert>
                <div className={"searchBox " + this.searchBoxOnFocus()}>
                    <input className="searchBox_input"
                            onClick={()=>this.props.SearchBoxOnFocus(true)}
                    ></input>
                    <FontAwesomeIcon className="searchBox_icon" icon="search" />
                </div>
            </OutsideAlert>
        )
    }
}

function mapStateToProps(state){
    return{
        isSearchBoxOnFocus: state.App.get('searchBoxOnFocus')
    }
  }
  
function mapDispatchToProps(dispatch){
    return {
        SearchBoxOnFocus: (toggle) => {
            dispatch(Actions.isSearchBoxOnFocus(toggle))
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBox)