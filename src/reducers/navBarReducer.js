import { Map } from 'immutable';

const INITIAL_STATE = Map({
    isSearchActive: false,
});

function NavBarReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case("SEARCH_STATUS"):
            return state.set('isSearchActive', action.data)
    default:
        return state
    }
}

export default NavBarReducer;