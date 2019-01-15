import React, { Component } from 'react';
import './SideBar.css';
import { connect } from 'react-redux';
import Constants from '../../constants';
import Utils from '../../utils';
import Actions from '../../Actions/actions.js';

class SideBar extends Component {
    renderResetButton() {
        return (
                <div className="resetButton"
                     onClick={ ()=> this.props.resetSideBarSelections()}>
                    reset
                </div>
        )
    }

    renderSortByMenu() {
        const extraClassName_newest = this.props.isNewestSelected ?
                'selected' :
                '';
        return (
            <div className="sortByMenuContainer">
                <div className="sortByLabel">Sort by </div>
                <div className="optionWrapper optionWrapper_sort">
                    <div className={`option_newest option ${extraClassName_newest}`}
                        onClick = {()=> this.props.toggleNewest()}>
                        newest
                    </div>
                </div>
            </div>
        )
    }

    renderCategorizedOptions() {
        const categories = [];
        for (let category of Constants.CATEGORIES) {
            const extraClassName = this.isSelectedCategory(category.name) ?
                'selected' :
                '';
            categories.push(
                <div className= {`option ${category.className} ${extraClassName}`} 
                    key= {category.className}
                    onClick= {()=> this.props.updateCategory(category.name) }>
                    {category.name}
                </div>
            )
        }

        return (
            <div className="categorizedOptionsContainer">
                <div className="categoryLabel">
                    Filter by categories
                </div>
                <div className="optionWrapper optionWrapper_categories">
                    {categories}
                </div>
            </div>
        )
    }

    isSelectedCity(city) {
        return this.props.currentSelectedCity === city;
    }

    isSelectedCategory(category) {
        if (category === Constants.CATEGORY_ALL.name) {
            return this.props.currentSelectedCategories.size === Constants.CATEGORY_LIST_LENGTH;
        }
        if (this.props.currentSelectedCategories.size < Constants.CATEGORY_LIST_LENGTH) {
            return this.props.currentSelectedCategories.includes(category)
        }
        return false
    }

    renderCityOptions(){
        const cities = [];
        for (let city of Constants.CITIES) {
            const extraClassName = this.isSelectedCity(city.name) ?
                'selected' :
                '';
            cities.push(
                <div className={`option city_${city.className} ${extraClassName}`} 
                        key={city.name}
                        onClick={()=> this.props.updateCity(city.name)}>
                    {city.name}
                </div>
            )
        }
        return(
            <div className="selectCityOptions" key="options">
                <div className="cityOptionsLabel" key="optionlabels">
                    Select city
                </div>
                <div className="optionWrapper optionWrapper_cities">
                    {cities}
                </div>
            </div>
        )
    }

    renderMoreFilterMenu() {
        const extraClassName_hasImages = this.props.isImagesSelected ?
            'selected' :
            '';
        
        return (
            <div className="moreFilterContainer">
                <div className="moreFilterLabel" >
                    More filters
                </div>
                <div className="optionWrapper optionWrapper_moreFilters">
                    <div className={`option_hasImages option ${extraClassName_hasImages}`}
                        onClick = {() => this.props.toggleHasImages()}
                        key="hasImages">
                        has images
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return (
            <div className="sideBarWrapper" key="wrapper">
                <div className="sideBarContainer" key="container" onMouseLeave={()=> this.props.toggleSideBar()}>
                    {this.renderResetButton()}
                    {this.renderSortByMenu()}
                    {this.renderCityOptions()}
                    {this.renderCategorizedOptions()}
                    {this.renderMoreFilterMenu()}
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        isNewestSelected: Utils.getIsNewestSelected(state),
        isImagesSelected: Utils.getIsImageSelected(state),
        currentSelectedCity: Utils.getCurrentCity(state),
        currentSelectedCategories: Utils.getCurrentSelectedCategories(state),
        sideBarShown: Utils.getIsSideBarShown(state)
    }
  }

function mapDispatchToProps(dispatch) {
    return {
        updateCity: (city) => {
            dispatch(Actions.updateCity(city))
        },
        toggleSideBar: () => {
            dispatch(Actions.toggleSideBar());
        },
        updateCategory: (category) => {
            dispatch(Actions.updateCategory(category));
        },
        toggleHasImages: () => {
            dispatch(Actions.toggleHasImages());
        },
        toggleNewest: () => {
            dispatch(Actions.toggleNewest())
        },
        resetSideBarSelections: () => {
            dispatch(Actions.resetSideBarSelections());
        }
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)