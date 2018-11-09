import React, { Component } from 'react';
import "./FilterMenu.css";
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCaretUp,
    faCaretDown, 
    faArrowDown, 
    faArrowUp
} from '@fortawesome/free-solid-svg-icons'

library.add(faCaretUp, faCaretDown, faArrowDown, faArrowUp);

class FilterMenu extends Component {
    constructor() {
        super();
        this.state = {
            shouldDisplayFilterMenu: false,
        }
    }
    renderDisplayFilterMenu() {
        if(this.state.shouldDisplayFilterMenu){
            return (
                <div className="DisplayFilterMenu">
                    <div className="DisplayFilterMenu_item">
                        Nearest to me 
                    </div>
                </div>
            )
        }
        return null;
    }

    shouldDisplayArrow(){
        if(this.state.shouldDisplayFilterMenu){
            return <FontAwesomeIcon className="icon_arrows" icon="caret-up" />
        } else {
            return <FontAwesomeIcon className="icon_arrows" icon="caret-down" />
        }
    }

    toggleDisplayFilterMenu(){
        this.setState({
            shouldDisplayFilterMenu: !this.state.shouldDisplayFilterMenu
        })
    }

    render() {
        return (
            <div className="FilterMenu">
                <div className="FilterMenu_default FilterMenu_newest"
                    onClick = {()=> {this.toggleDisplayFilterMenu()}}
                    >Newest{this.shouldDisplayArrow()}
                </div>
                {this.renderDisplayFilterMenu()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FilterMenu)