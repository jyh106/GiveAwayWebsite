import React, { Component } from 'react';
import "./Settings.css";
import { connect } from 'react-redux';
import Actions from "../../Actions/actions";
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Constants from '../../constants';
library.add(faArrowLeft)

class Settings extends Component {
    constructor(){
        super();
        this.state = {
            communicationMethod: 'email'
        }
    }

    handleCommunicationClicked(method) {
        this.setState({
            communicationMethod: method
        })
    }

    giveActiveCommunicationOptionsClassName(method){
        if (this.state.communicationMethod === method){
            return 'communicationOption-active'
        } 
        return ""
    }

    renderProfilePhoto() {
        return (
            <div className="settingPage-profilePhonto">
            </div>
        )
    }

    renderSettingOptions() {
        return (
            <div className="settingPage-optionsContainer">
                    <div className="settingPage-option settingPage-username">
                        <div className="settingPage-optionLabel">
                            Username
                        </div>
                        <input className="settingPage-optionInput" />
                    </div>

                    <div className="settingPage-option settingPage-email">
                        <div className="settingPage-optionLabel">
                            Email
                        </div>
                        <input className="settingPage-optionInput" />
                    </div>

                    <div className="settingPage-option settingPage-phone">
                        <div className="settingPage-optionLabel">
                            Phone
                        </div>
                        <input className="settingPage-optionInput" />
                    </div>

                    <div className="settingPage-option settingPage-communication">
                        <div className="settingPage-optionLabel">
                            Communicate by
                        </div>
                        <div className="settingPage-communicationOptions">
                            <div className={`${this.giveActiveCommunicationOptionsClassName('email')} 
                                    communicationOption communicationOption-email`}
                                onClick={()=> this.handleCommunicationClicked('email')}>
                                Email
                            </div>
                            <div className={`${this.giveActiveCommunicationOptionsClassName('phone')} 
                                    communicationOption communicationOption-phone`}
                                onClick={()=> this.handleCommunicationClicked('phone')}>
                                Phone
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
    render() {
        return (
            <div className="settingPage">
                <div className="settingPage-navigationBar">
                    <Link to="/" className="settingPage-dashboardButton">
                        <FontAwesomeIcon icon="arrow-left" className="icon_leftArrow" />
                        Dashboard
                    </Link>
                </div>
                <div className="settingPage-header">
                    Settings
                </div>
                {this.renderSettingOptions()}
                <div className="settingPage-buttonWrapper">
                    <div className="settingPage-buttons settingPage-cancelButton">
                        Cancel
                    </div>
                    <div className="settingPage-buttons settingPage-saveButton">
                        Save
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Settings)