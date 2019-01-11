import React, { Component } from 'react';
import './SideBarHidden.css';
import { connect } from 'react-redux';
import Actions from '../Actions/actions.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons',
import Utils from '../../utils'
library.add(faAngleDoubleRight) 

// SideBarHiddenrepresents the component when it's hidden (not hovered over making selections)
class SideBarHidden extends Component {
    render() {
        if (this.props.sideBarShown) {
            return null;
        }
        return (
            <div className="sideBarHidden" onMouseOver={()=>this.props.toggleSideBar()}>
                <FontAwesomeIcon className="icon_doubleArrow" icon="angle-double-right" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sideBarShown: Utils.getIsSideBarShown(state),
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        toggleSideBar: () => {
            dispatch(Actions.toggleSideBar());
        },
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBarHidden)