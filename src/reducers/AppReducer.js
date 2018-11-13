import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'modalShown': List(['zipcode']),
  'userLocation': 'none',
  'isPageMaskShown': true,
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SEARCH_BOX_FOCUS'): 
        return state.set('searchBoxOnFocus', action.data)
    case('SHOW_MODAL'):
        return state.update('modalShown', list=>list.push(action.data)).set('isPageMaskShown', true);
    case('HIDE_MODAL'):
        if(state.get('modalShown').includes(action.data)){
            const index = state.get('modalShown').indexOf(action.data);
            return state.update('modalShown', list => list.splice(index, 1)).set('isPageMaskShown', false);
        }
        return state;
    case('UPDATE_USER_LOCATION'):
        return state.set('userLocation', action.data)
    default:
        return state
    }
} 

export default AppReducer;