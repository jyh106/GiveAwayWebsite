import React, { Component } from 'react';
import './SideBar.css';
import { connect } from 'react-redux';
import Constants from '../constants';
import Utils from '../utils';
import Actions from '../Actions/actions.js';



class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedOptions: ['newest'],
        }
    }
    renderMilesFromZip() {
        return (
            <div className="milesFromZipContainer">
                <div className="milesFromZipLabel">
                    miles from zipcode
                </div>
                <div className="mileZipInputs">
                    <input className="milesInput" />
                </div>
                <div className="mileZipInputs">
                    <input className="zipCodeInput"/>
                </div>
            </div>
        )
    }


    renderResetUpdateButtons() {
        return (
            <div className="resetAndUpdate">
                <div className="resetAndUpdate_button resetButton">reset</div>
                <div className="resetAndUpdate_button updateButton">update search</div>
            </div>
        )
    }

    renderNewestAndHasImageOptions() {
        return (
            <div className="newestAndHasImageOptionContainer">
                <div className={`option_newest option ${this.handleSelected('newest')}`}>
                    newest
                </div>

                <div className={`option_hasImages option ${this.handleSelected('hasImages')}`}>
                    has images
                </div>
            </div>
        )
    }

    renderCategorizedOptions() {
        const categories = [];
        for (let category of Constants.CATEGORIES) {
            categories.push(
                <div className={`option ${category.className} ${this.handleSelected(category.className)}`} key={category.className}>
                    {category.name}
                </div>
            )
        }
        return (
            <div className="categorizedOptionsContainer">
                <div className="categoryLabel">
                    Filter by categories: 
                </div>
                {categories}
            </div>
        )
    }

    handleSelected(optionLabel){
        if (this.state.selectedOptions.includes(optionLabel) || this.props.currentSelectedCity.includes(optionLabel)) {
            return 'selected'
        }
        return ''
    }

    renderCityOptions(){
        const cities = [];
        for (let city of Constants.CITIES) {
            cities.push(
                <div className={`option city_${city.className} ${this.handleSelected(city.name)}`} 
                        key={city.name}
                        onClick={()=> this.props.updateCity(city.name)}>
                    {city.name}
                </div>
            )
        }
        return(
            <div className="selectCityOptions" key="options">
                <div className="cityOptionsLabel">Select cities: </div>
                {cities}
            </div>
        )
    }

    render(){
        if(!this.props.sideBarShown){
            return null
        }
        return (
        <div className="sideBarWrapper">
            <div className="sideBarContainer" onMouseLeave={()=> this.props.toggleSideBar()}>
                {this.renderResetUpdateButtons()}
                {this.renderCityOptions()}
                {this.renderMilesFromZip()}
                {this.renderNewestAndHasImageOptions()}
                {this.renderCategorizedOptions()}
            </div>
        </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        currentSelectedCity: Utils.getCurrentCity(state),
        sideBarShown: state.App.get('sideBarShown'),
    }
  }

function mapDispatchToProps(dispatch) {
    return {
        updateCity: (city) => {
            dispatch(Actions.updateCity(city))
        },
        toggleSideBar: () => {
            dispatch(Actions.toggleSideBar());
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)