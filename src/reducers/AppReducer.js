import { Map} from 'immutable';

const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'sideBarShown': false
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SEARCH_BOX_FOCUS'): 
        return state.set('searchBoxOnFocus', action.data);
    case('TOGGLE_SIDE_BAR'):
        return state.set('sideBarShown', !state.get('sideBarShown'))
    default:
        return state
    }
} 

export default AppReducer;