import { combineReducers } from 'redux';
import NavBarReducer from './NavBarReducer.js';
import PostBoardReducer from './PostBoardReducer.js';
import AppReducer from './AppReducer.js';
import ModalReducer from './ModalReducer'


const reducers = combineReducers({
  AppReducer,
  NavBarReducer,
  PostBoardReducer,
  ModalReducer,
})

export default reducers;