import { Map } from 'immutable';



const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'isModalShown': false,
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SEARCH_BOX_FOCUS'): 
        return state.set('searchBoxOnFocus', action.data)
    case('TOGGLE_MODAL'):
        return state.set('isModalShown', action.data);
    default:
        return state
}
} 

export default AppReducer;