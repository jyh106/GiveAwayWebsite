import React, { Component } from 'react';
import './SideBarStatic.css';
import { connect } from 'react-redux';
import Actions from '../Actions/actions.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
library.add(faAngleDoubleRight) 

// SideBarStatic represents the component when it's hidden (not hovered over making selections)
class SideBarStatic extends Component {
    render() {
        if (this.props.sideBarShown) {
            return null;
        }
        return (
            <div className="sideBarStatic" onMouseOver={()=>this.props.toggleSideBar()}>
                <FontAwesomeIcon className="icon_doubleArrow" icon="angle-double-right" />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        sideBarShown: state.App.get('sideBarShown'),
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
  )(SideBarStatic)