import { Map } from 'immutable';



const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'isModalShown': false,
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SEARCH_BOX_FOCUS'): 
        return state.set('searchBoxOnFocus', action.data)
    case('DISPLAY_MODAL'):
        return state.set('isModalShown', true);
    case('HIDE_MODAL'):
        return state.set('isModalShown', false)
    default:
        return state
}
} 

export default AppReducer;