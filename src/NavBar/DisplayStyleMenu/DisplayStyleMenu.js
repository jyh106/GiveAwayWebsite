import React, { Component } from 'react';
import "./DisplayStyleMenu.css";
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faThLarge, faListUl} from '@fortawesome/free-solid-svg-icons'
import Actions from '../../Actions/actions.js';

library.add(faCaretUp, faCaretDown, faThLarge, faListUl);

// TODO not a good name
class DisplayStyleMenu extends Component {
    // TODO for things that return divs, best to preface with `renderX`
    // TODO use consistent types. e.g., render null;
    displayStylingMenu() {
        if(this.props.displayStylingMenu){
            return (
                <div className="DisplayStyleMenu">
                    <div className="DisplayStyle_default__thumb">
                        <FontAwesomeIcon icon="list-ul"  className="icon_list"/> Thumb
                    </div>
                </div>
            )
        }
    }

    displayArrow(){
        // TODO you don't need the else here
        if(this.props.displayStylingMenu){
            return <FontAwesomeIcon className="icon_arrows" icon="caret-up" />
        } else {
            return <FontAwesomeIcon className="icon_arrows" icon="caret-down" />
        }
    }
    render() {
        // TODO use one underscore or two
        return (
            <div className="DisplayStyle_default">
                <div className="DisplayStyle_default__gallery"
                    onClick = {
                        ()=> {this.props.toggleStyleMenu(!this.props.displayStylingMenu)}
                    }
                > <FontAwesomeIcon icon='th-large'/> Gallery
                    {this.displayArrow()}
                </div>
                {this.displayStylingMenu()}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        displayStylingMenu: state.NavBarReducer.get('displayStylingMenu')
    }
  }
  
  const mapDispatchToProps = dispatch => {
    // TODO don't need the value toggle
    return {
        toggleStyleMenu: (toggle) => {
            dispatch(Actions.toggleDisplayStylingMenu(toggle))
        },
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DisplayStyleMenu)