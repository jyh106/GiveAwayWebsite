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
    case('SIGNIN'):
        return signIn(state, action);
    default:
        return state
    }
} 

function signIn(state, action) {
    return state.merge({
        'user': {
            'isSignedIn': true,
            'username': action.data.username
        }
    });
}

export default AppReducer;