import { Map, List} from 'immutable';

const INITIAL_STATE = Map({
  'searchBoxOnFocus': false,
  'user': {
      'isSignedIn': !!localStorage.username,
      'username': localStorage.username || "",
      'userID': "",
      'userPosts': localStorage.userPosts
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
    localStorage.username = action.data.username;
    localStorage.userID = action.data.userID;
    localStorage.setItem('userPosts', JSON.stringify( action.data.userPosts));
    return state.merge({
        'user': {
            'isSignedIn': true,
            'username': action.data.username,
            'userID': action.data.userID,
            'userPosts': action.data.userPosts
        }
    });
}

export default AppReducer;