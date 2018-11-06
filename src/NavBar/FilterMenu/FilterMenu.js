import React, { Component } from 'react';
import "./FilterMenu.css";
import Actions from '../../Actions/actions.js';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp,faCaretDown, faArrowDown, faArrowUp
            } from '@fortawesome/free-solid-svg-icons'

library.add(faCaretUp, faCaretDown, faArrowDown, faArrowUp);

class FilterMenu extends Component {
    displayFilterMenu() {
        if(this.props.displayFilterMenu){
            return (
                <div className="DisplayFilterMenu">
                    <div className="DisplayFilterMenu_item DisplayFilterMenu_priceUp">
                        Price <FontAwesomeIcon className="Arrow_price" icon="arrow-up" />
                    </div>
                    <div className="DisplayFilterMenu_item DisplayFilterMenu_priceDown">
                        Price <FontAwesomeIcon className="Arrow_price" icon="arrow-down" />
                    </div>
                </div>
            )
        }
    }

    displayArrow(){
        if(this.props.displayFilterMenu){
            return <FontAwesomeIcon className="icon_arrows" icon="caret-up" />
        } else {
            return <FontAwesomeIcon className="icon_arrows" icon="caret-down" />
        }
    }

    render() {
        return (
            <div className="FilterMenu">
                <div className="FilterMenu_default FilterMenu_newest"
                    onClick = {
                        ()=> {this.props.toggleFilterMenu(!this.props.displayFilterMenu)}
                    }
                >Newest
                 {this.displayArrow()}
                </div>
                {this.displayFilterMenu()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        displayFilterMenu: state.NavBarReducer.get('displayFilterMenu')
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        toggleFilterMenu: (toggle) => {
            dispatch(Actions.toggleFilterMenu(toggle))
        },
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilterMenu)