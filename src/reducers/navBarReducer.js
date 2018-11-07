import { Map } from 'immutable';

const INITIAL_STATE = Map({
    displayStylingMenu: false,
    displayFilterMenu: false,
    searchInputClicked: false,

});

function navBarReducer (state = INITIAL_STATE, action) {
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