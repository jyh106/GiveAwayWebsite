import { all, call, put, take } from 'redux-saga/effects'
import axios from 'axios';
import Actions from '../Actions/actions.js';
import Constants from '../constants'


// handle new posts
function* toggleModal_newForm(){
  yield put(Actions.toggleModal(Constants.MODAL_TYPES['MODAL_NEWFORM'], false))
}

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
    yield call(toggleModal_newForm);
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
  while(true) {
    const action = yield take('UPDATE_CITY');
    yield call(sendSelectedCityToServer, action)
  }
}




function* handleClickedImage(action){
  // const currentClickedImage = action.data['currentClickedImage'];
  // const images = action.data['images'];
  // const currentClickedImageIndex = images.indexOf(currentClickedImage);
  yield put(Actions.toggleModal(Constants.MODAL_TYPES['MODAL_PHOTODISPLAY'], true))
}


export function* watchPostImageClicked() {
  while(true) {
    const action = yield take('POST_IMAGE_CLICKED');
    yield handleClickedImage(action)
  }
}

export default function* rootSaga() {
  yield all([
    watchSubmitPost(),
    watchSelectCity(),
    watchAppMounted(),
    // watchPostImageClicked()
  ])
}