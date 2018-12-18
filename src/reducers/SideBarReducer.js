import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
    'sideBarShown': true,
    'currentSelectedCity': 'All cities',
    'currentSelectedCategories': ['All categories'],
});

function SideBarReducer (state = INITIAL_STATE, action) {
    switch(action.type){
    case('FILTER_RESULTS'):
        return state.set('currentSelectedCity', action.data.city).update('currentSelectedCategories', list => action.data.categories)
    case('TOGGLE_SIDE_BAR'):
        return state.set('sideBarShown', !state.get('sideBarShown'))
    default:
        return state
    }
}

export default SideBarReducer;