import React, { Component } from 'react';
import "./CitySelector.css";
import { connect } from 'react-redux';
import Actions from '../../Actions/actions.js';
import Constants from '../../constants';


class SelectCity extends Component {
    constructor(){
        super();
        this.state = {
            currentSelectedCity: 'All cities',
            isMenuShown: false,
        }
    }

    toggleMenu(){
        this.setState({
            isMenuShown: !this.state.isMenuShown
        })
    }

    handleSelectCity(city){
        this.toggleMenu()
        this.props.updateLocation(city)
    }

    renderCityMenu(){
        let cities = []
        for (let city of Constants.cities) {
            cities.push(
                <div className={`cityOption city_${city.className}`} 
                        onClick={()=> this.handleSelectCity(city.name)}
                        key={city}>
                    {city.name}
                </div>
            )
        }
        return cities
     }

    renderSelectCityMenu(){
        if (!this.state.isMenuShown) {
            return null
        }
        return(
            <div className="selectCityOptions">
                {this.renderCityMenu()}
            </div>
        )
    }

    render() {
        return(
            <div className="selectCityMenu" onClick={()=> this.toggleMenu()}>
                <p className="displayCity_label">Displaying results in: </p> <div className="currentCity" >{this.props.currentSelectedCity}</div>
                {this.renderSelectCityMenu()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentSelectedCity: state.NavBar.get('currentSelectedCity')
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        updateLocation: (city) => {
            dispatch(Actions.updateCity(city));
        }
    }
  }
  
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectCity)
