import { Map} from 'immutable';

const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'userLocation': 'none',
  'isPageMaskShown': true,
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SEARCH_BOX_FOCUS'): 
        return state.set('searchBoxOnFocus', action.data)
    case('SHOW_MODAL'):
        return state.set('isPageMaskShown', true);
    case('HIDE_MODAL'):
        return state.set('isPageMaskShown', false);
    case('UPDATE_USER_LOCATION'):
        return state.set('userLocation', action.data)
    default:
        return state
    }
} 

export default AppReducer;