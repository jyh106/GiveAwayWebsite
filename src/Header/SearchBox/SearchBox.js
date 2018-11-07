import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import "./SearchBox.css";
import Actions from '../../Actions/actions.js';


library.add(faSearch);

class SearchBox extends Component {
    searchBoxClicked(){
        if(this.props.searchInputClicked){
            return 'searchBox_focus'
        }
    }

    render() {
        return(
            <div className={"searchBox " + this.searchBoxClicked()}>
                <input className="searchBox__input"

    //TODO need to be fixed
                        onMouseDown={
                            ()=>this.props.searchBoxClicked(!this.props.searchInputClicked)
                            }
                        onMouseOut={
                            ()=>this.props.searchBoxClicked(!this.props.searchInputClicked)
                            }
                ></input>
                <FontAwesomeIcon className="searchBox__Icon" icon="search" />
            </div>
        )
    }
}


function mapStateToProps(state){
    return{
        searchInputClicked: state.NavBarReducer.get('searchInputClicked')
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        searchBoxClicked: (toggle) => {
            dispatch(Actions.searchBoxClicked(toggle))
        },
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchBox)