import { all, call, put, takeEvery, select, take } from 'redux-saga/effects'
import axios from 'axios';
import Actions from '../Actions/actions.js';
// import Constants from './constants.js';

function* uploadPost(action){
  //add new post info to redux store
    yield put(Actions.addNewPost(action.data))
}

function* toggleModal_newForm(){
  yield put(Actions.toggleModal('newForm', false))
}

function* sendPostToServer(action){
  yield call(axios, {
    method: 'POST',
    url: 'http://127.0.0.1:5000/posts',
    data: action.data,
    config: { headers: {'Content-Type':'application/json'}}
  })
}


export function* watchSubmitPost() {
  //add new post info to redux store, and upload to server
  //hide new form modal
  while (true) {
    const action = yield take('ADD_NEW_POST');
    yield call(uploadPost, action);
    yield call(toggleModal_newForm);
    yield call(sendPostToServer, action);
  }
}


function* getPosts(){
  const response = yield call(axios.get, 'http://127.0.0.1:5000/posts');
  yield put(Actions.getPosts(response.data))
}

export function* watchAppMounted() {
  while (true) {
      const action = yield take('APP_MOUNTED');
      yield call(getPosts);
  }
}

export default function* rootSaga() {
  yield all([
    watchSubmitPost(),
    watchAppMounted(),
  ])
}