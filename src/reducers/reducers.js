import { combineReducers } from 'redux';
import NavBarReducer from './NavBarReducer.js';
import PostBoardReducer from './PostBoardReducer.js';
import AppReducer from './AppReducer.js';


const reducers = combineReducers({
  AppReducer,
  NavBarReducer,
  PostBoardReducer,
})

export default reducers;