import { combineReducers } from 'redux';
import NavBar from './navBarReducer.js';
import PostBoard from './postBoardReducer.js';
import App from './AppReducer.js';
import Modal from './ModalReducer';
import SideBar from './SideBarReducer';


const reducers = combineReducers({
  App,
  NavBar,
  SideBar,
  PostBoard,
  Modal,
})

export default reducers;
