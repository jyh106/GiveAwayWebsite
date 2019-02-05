import { all, call, put, take, select } from 'redux-saga/effects'
import axios from 'axios';
import Actions from '../Actions/actions.js';
import Constants from '../constants';
import Utils from '../utils';

function* sendPostToServer(action){
  yield call(axios, {
    method: 'POST',
    url: `${Constants.HOSTNAME}posts`,
    data: action.data,
    config: { headers: {'Content-Type':'application/json'}}
  })
}


export function* watchSubmitPost() {
  // upload post to server and hide new form modal
  while (true) {
    const action = yield take('ADD_NEW_POST');
    yield call(sendPostToServer, action);
  }
}

function* getPosts(){
  const response = yield call(axios.get, `${Constants.HOSTNAME}posts?city=All cities`)
  yield put(Actions.getPosts(response.data))
}

// handle sending posts from server to frontehd when app mounts
export function* watchAppMounted() {
  while (true) {
      yield take('APP_MOUNTED');
      yield call(getPosts);
  }
}

// handle update city and refresh the page with filtered posts
function* sendSelectedCityToServer(action) {
  const response = yield call(axios, {
      method: 'POST',
      url: `${Constants.HOSTNAME}city`,
      data: {"city": action.data},
      config: { headers: {'Content-Type':'application/json'}}
    })
   yield put(Actions.getPosts(response.data))
}

export function* watchSelectCity() {
  while (true) {
    const action = yield take('UPDATE_CITY');
    yield call(sendSelectedCityToServer, action)
  }
}

function* filterPosts(requirements) {
   const response = yield call(axios, {
    method: 'POST',
    url: `${Constants.HOSTNAME}filterPosts`,
    data: requirements,
    config: { headers: {'Content-Type':'application/json'}}
   })
   yield put(Actions.getPosts(response.data));
}


export function* watchSelectCategoryAndImages() {
  while (true) {
    yield take(['UPDATE_CATEGORY', 'TOGGLE_HAS_IMAGES','RESET_SELECTIONS', 'TOGGLE_NEWEST']);
    const selectedCity = yield select(Utils.getSideBarItems, 'currentSelectedCity');
    const selectedCategories = yield select(Utils.getSideBarItems, 'currentSelectedCategories');
    const newestPreference = yield select(Utils.getSideBarItems, 'newest');
    const imagePreference = yield select(Utils.getSideBarItems, 'hasImages');
    const req = {
      'city': selectedCity,
      'categories': selectedCategories,
      'newest': newestPreference,
      'images': imagePreference
    }
    yield call(filterPosts, req);
  }
}

export default function* rootSaga() {
  yield all([
    watchSubmitPost(),
    watchSelectCity(),
    watchAppMounted(),
    watchSelectCategoryAndImages(),
  ])
}