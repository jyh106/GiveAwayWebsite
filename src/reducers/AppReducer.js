import { Map} from 'immutable';

const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'user': {
      'isSignedIn': false,
      'username': ""
    },
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SEARCH_BOX_FOCUS'): 
        return state.set('searchBoxOnFocus', action.data);
    default:
        return state
    }
} 

export default AppReducer;