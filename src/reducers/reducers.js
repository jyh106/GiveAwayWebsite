import { Map } from 'immutable';
import { combineReducers } from 'redux';
import NavBarReducer from './navBarReducer.js';

const INITIAL_STATE = Map({

});

function appReducer(state = INITIAL_STATE, action) {
  return state;
} 



const reducers = combineReducers({
  appReducer,
  NavBarReducer,
})

export default reducers;