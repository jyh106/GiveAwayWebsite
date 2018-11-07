import { Map } from 'immutable';
import { combineReducers } from 'redux';
import NavBarReducer from './navBarReducer.js';
import postBoardReducer from './postBoardReducer.js';

const INITIAL_STATE = Map({

});

// TODO app reducer should be its own file
function appReducer(state = INITIAL_STATE, action) {
  return state;
} 



const reducers = combineReducers({
  appReducer,
  NavBarReducer,
  postBoardReducer,
})

export default reducers;