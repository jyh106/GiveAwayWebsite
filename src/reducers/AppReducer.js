import { Map } from 'immutable';

const INITIAL_STATE = Map({
  'user': {
      'isSignedIn': false,
      'username': "",
      'userID': "",
    }
});

function AppReducer(state = INITIAL_STATE, action) {
  switch(action.type){
    case('SIGNIN'):
        return signIn(state, action);
    case('SIGN_OUT'):
        return signOut(state);
    case('UPDATE_USER_LOCATION'):
        return state.set('userLocation', action.data);
    default:
        return state
    }
} 

function signOut(state) {
    return state.merge({
        'user' : {
            'isSignedIn': false,
            'username': "",
            'userID': "",
        }
    });
}

function signIn(state, action) {
    return state.merge({
        'user': {
            'isSignedIn': true,
            'username': action.data.username,
            'userID': action.data.userID,
        }
    });
}

export default AppReducer;
