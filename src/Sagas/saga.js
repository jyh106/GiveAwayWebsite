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
  const response = yield call(axios.get, 'http://127.0.0.1:5000/posts?city=All cities');
  yield put(Actions.getPosts(response.data))
}

export function* watchAppMounted() {
  while (true) {
      yield take('APP_MOUNTED');
      yield call(getPosts);
  }
}

/* handle update city and filtering */
function* sendSelectedCityToServer(action) {
  yield call(axios, {
    method: 'POST',
    url: 'http://127.0.0.1:5000/city',
    data: {"city": action.data},
    config: { headers: {'Content-Type':'application/json'}}
  })
}

function* getFilteredPosts(city){
  const response = yield call(axios.get, `http://127.0.0.1:5000/posts?city=${city}`)
  yield put(Actions.getPosts(response.data))
}

export function* watchSelectCity() {
  while(true) {
    const action = yield take('UPDATE_CITY');
    yield call(sendSelectedCityToServer, action)
    yield call(getFilteredPosts, action.data)
  }
}

export default function* rootSaga() {
  yield all([
    watchSubmitPost(),
    watchAppMounted(),
    watchSelectCity(),
  ])
}