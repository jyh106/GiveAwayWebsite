import { Map } from 'immutable';

const INITIAL_STATE = Map({
  'user': {
      'isSignedIn': !!localStorage.username,
      'username': localStorage.username || "",
      'userID': localStorage.userID || "",
    },
    userLocation: [],
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SIGNIN'):
        return signIn(state, action);
    case('UPDATE_USER_LOCATION'):
        return state.set('userLocation', action.data);
    default:
        return state
    }
} 

function signIn(state, action) {
    localStorage.username = action.data.username;
    localStorage.setItem('userID', action.data.userID);

    return state.merge({
        'user': {
            'isSignedIn': true,
            'username': action.data.username,
            'userID': action.data.userID,
        }
    });
}

export default AppReducer;