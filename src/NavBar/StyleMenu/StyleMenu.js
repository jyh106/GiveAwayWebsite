import React, { Component } from 'react';
import "./StyleMenu.css";
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown, faThLarge, faListUl} from '@fortawesome/free-solid-svg-icons'
import Actions from '../../Actions/actions.js';
import OutsideAlert from '../../OutsideClick';
library.add(faCaretUp, faCaretDown, faThLarge, faListUl);

class StyleMenu extends Component {
    constructor() {
        super();
        this.state = {
            shouldDisplayStyleMenu: false,
        }
    }

    renderListButton() {
        return (
            <div className="style_list" 
                onClick={()=>{this.onClickStyleButtons('List')}}>
                <FontAwesomeIcon icon="list-ul"  className="icon_list"/>List
                {this.renderArrow('List')}
            </div>
        )
    }

    onClickStyleButtons(style){
        this.toggleDisplayStyleMenu();
        this.props.changeDisplayStyle(style);
    }

    renderGalleryButton() {
        return (
            <div className="style_default_gallery"
                    onClick = {()=>{this.onClickStyleButtons('Gallery')}}> 
                    <FontAwesomeIcon icon='th-large'/> Gallery
                {this.renderArrow('Gallery')}
            </div>
        )
    }


    toggleDisplayStyleMenu(){
        this.setState({
            shouldDisplayStyleMenu: !this.state.shouldDisplayStyleMenu
        })
    }


    renderArrow(style){
        if (style === this.props.currentStyle) {
            return <FontAwesomeIcon className="icon_arrows" icon="caret-down" />
        } 
        return null
    }

    renderMenu(){
        if(this.props.currentStyle === "Gallery"){
            return (
                <div>
                    {this.renderGalleryButton()}
                    { (this.state.shouldDisplayStyleMenu) ? this.renderListButton() : null }
                </div>

            )
        }
        return (
            <div>
                {this.renderListButton()}
                {(this.state.shouldDisplayStyleMenu) ? this.renderGalleryButton() : null }
            </div>

        )
    }


    render() {
        return (
            <OutsideAlert>
                <div className="styleMenu">
                    {this.renderMenu()}
                </div>
            </OutsideAlert>
        )
    }
}

function mapStateToProps(state){
    return{
        currentStyle: state.PostBoardReducer.get('displayStyle')
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