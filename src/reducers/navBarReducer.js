import { Map } from 'immutable';

const INITIAL_STATE = Map({
    searchInputClicked: false,

});

function NavBarReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        default:
            return state
    }
}

export default NavBarReducer;