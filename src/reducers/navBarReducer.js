import { Map } from 'immutable';

const INITIAL_STATE = Map({
    // currentSelectedCity: 'All cities',
});

function NavBarReducer (state = INITIAL_STATE, action) {
    switch(action.type){
    // case('UPDATE_CITY'):
    //     return state.set('currentSelectedCity', action.data)
    default:
        return state
    }
}

export default NavBarReducer;