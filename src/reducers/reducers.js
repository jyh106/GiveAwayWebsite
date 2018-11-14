import { combineReducers } from 'redux';
import NavBar from './NavBarReducer.js';
import PostBoard from './PostBoardReducer.js';
import App from './AppReducer.js';
import Modal from './ModalReducer'


const reducers = combineReducers({
  App,
  NavBar,
  PostBoard,
  Modal,
})

export default reducers;