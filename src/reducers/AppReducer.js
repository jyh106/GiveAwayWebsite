import { Map } from 'immutable';

const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'isModal_zipcode_shown': true,
  'isModal_post_shown': false,
  'isModal_signIn_shown': false,
  'userLocation': 'none',
  'isPageMaskShown': true,
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SEARCH_BOX_FOCUS'): 
        return state.set('searchBoxOnFocus', action.data)
    case('TOGGLE_MODAL'):
        return state.set(action.data.modalType, action.data.isOn).set('isPageMaskShown', action.data.isOn);
    case('UPDATE_USER_LOCATION'):
        return state.set('userLocation', action.data)
    default:
        return state
    }
} 

export default AppReducer;