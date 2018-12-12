import React, { Component } from 'react';
import './SideBar.css'

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedOptions: ['newest']
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

    handleSelected(optionLabel){
        if (this.state.selectedOptions.includes(optionLabel)) {
            return 'selected'
        }
        return ''
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
        return (
            <div className="categorizedOptionsContainer">
                <div className="categoryLabel">
                    Filter by categories: 
                </div>
                <div className={`kidsRelated option ${this.handleSelected('kidsRelated')}`}> kids Related </div>
                <div className={`furnitures option ${this.handleSelected('furnitures')}`}> furnitures </div>
                <div className={`clothes option ${this.handleSelected('clothes')}`}> clothes </div>
                <div className={`kitchenwares option ${this.handleSelected('kitchenwares')}`}> kitchenwares </div>
                <div className={`sports option ${this.handleSelected('sports')}`}> sports/fitness </div>
                <div className={`organizers option ${this.handleSelected('organizers')}`}> organizers </div>
                <div className={`garden option ${this.handleSelected('garden')}`}> garden </div>
                <div className={`electronics option ${this.handleSelected('electronics')}`}> electronics </div>
            </div>
        )
    }

    render(){
        return (
            <div className="sideBarContainer">
                {this.renderResetUpdateButtons()}
                {this.renderMilesFromZip()}
                {this.renderNewestAndHasImageOptions()}
                {this.renderCategorizedOptions()}
            </div>
        )
    }
}

export default SideBar;