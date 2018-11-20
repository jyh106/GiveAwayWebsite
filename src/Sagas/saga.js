import { all, call, put, take } from 'redux-saga/effects'
import axios from 'axios';
import Actions from '../Actions/actions.js';


/*handle new posts*/
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
  // and upload to server
  //hide new form modal
  while (true) {
    const action = yield take('ADD_NEW_POST');
    yield call(toggleModal_newForm);
    yield call(sendPostToServer, action);
  }
}


/*handle sending posts from server to frontehd */
function* getPosts(){
  const response = yield call(axios.get, 'http://127.0.0.1:5000/posts');
  yield put(Actions.getPosts(response.data))
}

export function* watchAppMounted() {
  while (true) {
      yield take('APP_MOUNTED');
      yield call(getPosts);
  }
}

/* handle zipcode and filtering */
function* sendSelectedCityToServer(action) {
  yield call(axios, {
    method: 'POST',
    url: 'http://127.0.0.1:5000/selectCity',
    data: {"selectCity": action.data},
    config: { headers: {'Content-Type':'application/json'}}
  })
}

export function* watchSelectCity() {
  while(true) {
    const action = yield take('UPDATE_CITY');
    yield call(sendSelectedCityToServer, action)
  }
}

export default function* rootSaga() {
  yield all([
    watchSubmitPost(),
    watchAppMounted(),
    watchSelectCity(),
  ])
}