import { Map } from 'immutable';

const INITIAL_STATE = Map({
    // TODO give these yes or no names
    displayStylingMenu: false,
    displayFilterMenu: false,
    searchInputClicked: false,

});

function navBarReducer (state = INITIAL_STATE, action) {
    // TODO do these have to be in the redux store?
    // Can these just be in component state?
    switch(action.type){
        case('TOGGLE_STYLING_MENU'):
            return state.set('displayStylingMenu', action.data);
        case('TOGGLE_FILTER_MENU'):
            return state.set('displayFilterMenu', action.data);
        case('TOGGLE_SEARCH'): 
            return state.set('searchInputClicked', action.data)
        default:
            return state
    }
}

export default navBarReducer;