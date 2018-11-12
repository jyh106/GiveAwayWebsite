import { Map } from 'immutable';



const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'isModal_zipcode_shown': true,
  'isModal_post_shown': false,
  'userLocation': 'none',
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SEARCH_BOX_FOCUS'): 
        return state.set('searchBoxOnFocus', action.data)
    case('TOGGLE_MODAL_ZIPCODE'):
        return state.set('isModal_zipcode_shown', action.data);
    case('TOGGLE_MODAL_POST'):
        return state.set('isModal_post_shown', action.data);
    case('UPDATE_USER_LOCATION'):
        return state.set('userLocation', action.data)
    default:
        return state
}
} 

export default AppReducer;