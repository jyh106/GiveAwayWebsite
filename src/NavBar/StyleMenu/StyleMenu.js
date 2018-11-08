import React, { Component } from 'react';
import "./StyleMenu.css";
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faThLarge, faListUl} from '@fortawesome/free-solid-svg-icons'
import Actions from '../../Actions/actions.js';
library.add(faCaretUp, faCaretDown, faThLarge, faListUl);

class StyleMenu extends Component {
    constructor() {
        super();
        this.state = {
            shouldDisplayStyleMenu: false,
        }
    }

    renderStylingMenu() {
        if (this.state.shouldDisplayStyleMenu) {
            return (
                <div>
                    <div className="style_thumb" onClick={()=>this.props.changeDisplayStyle('Thumb')}>
                        <FontAwesomeIcon icon="list-ul"  className="icon_list"/>Thumb
                    </div>
                </div>
            )
        }
        return null;
    }

    toggleDisplayStyleMenu(){
        this.setState({
            shouldDisplayStyleMenu: !this.state.shouldDisplayStyleMenu
        })
        this.props.changeDisplayStyle('Gallery');
    }

    displayArrow(){
        if (this.state.shouldDisplayStyleMenu) {
            return <FontAwesomeIcon className="icon_arrows" icon="caret-up" />
        } 
        return <FontAwesomeIcon className="icon_arrows" icon="caret-down" />
    }

    render() {
        return (
            <div className="styleMenu">
                <div className="style_default_gallery"
                    onClick = {()=> {this.toggleDisplayStyleMenu()}}> 
                    <FontAwesomeIcon icon='th-large'/> Gallery
                    {this.displayArrow()}
                </div>
                {this.renderStylingMenu()}
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
        changeDisplayStyle: (style)=> dispatch(Actions.changeDisplayStyle(style))
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(StyleMenu)