import { all, call, put, take, select } from 'redux-saga/effects'
import axios from 'axios';
import Actions from '../Actions/actions.js';
import Constants from '../constants';
import Utils from '../utils';
import { yellow } from 'ansi-colors';

function* sendPostToServer(action){
  yield call(axios, {
    method: 'POST',
    url: `${Constants.HOSTNAME}posts`,
    data: action.data,
    config: { headers: {'Content-Type':'application/json'}}
  })
  window.location.href = '/';
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

function* watchOnSignUpClick() {
  while (true) {
    const action = yield take('ON_SIGNUP_CLICK');
    yield call(onSignUpClick, action)
  }
}

function* onSignUpClick(action) {
  try {
     yield call(axios, {
      method: 'POST',
      url: `${Constants.HOSTNAME}signup`,
      data: action.data,
      config: { headers: {'Content-Type':'application/json'}}
    });
    yield put(Actions.signIn({
      username: action.data.username
    }));
  } catch (err) {
    console.log('sign up unsuccessful')
  }
}

function* watchValidateUsername() {
  while (true) {
    const action = yield take('VALIDATE_USERNAME_BACKEND');
    yield call(validateUsername, action)
  }
}

function* validateUsername(action) {
  try {
    yield call(axios, {
      method: 'POST',
      url: `${Constants.HOSTNAME}username`,
      data: action.data,
      config: { headers: {'Content-Type':'application/json'}}
    });
    yield put(Actions.validateUsername(true))
  } catch(err) {
    yield put(Actions.validateUsername(false))
  }
}

function* onSignInClick(action) {
  try {
    const response = yield call(axios, {
      method: 'POST',
      url: `${Constants.HOSTNAME}signin`,
      data: action.data,
      config: { headers: {'Content-Type':'application/json'}}
    });
    yield put(Actions.signIn({
      username: action.data.username,
      userID: response.data.userID,
    }));
    yield put(Actions.isSignInSuccessful(true))
    yield put(Actions.toggleModal('signIn', false))
  } catch (err) {
    yield put(Actions.isSignInSuccessful(false))
  }

}

function* watchOnSignInClick() {
  while(true) {
    const action = yield take('ON_SIGNIN_CLICK');
    yield call(onSignInClick, action)
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

function* fetchCurrentPostData(postID) {
    const response = yield call(axios, {
      method: 'GET',
      url: `${Constants.HOSTNAME}post/${postID}`,
      config: { headers: {'Content-Type':'application/json'}}
    })
    yield put(Actions.updateClickedPost(response.data));
}

export function* watchFetchCurrentPostData() {
  while (true) {
    const action = yield take('FETCH_CURRENT_POST_DATA');
    yield call(fetchCurrentPostData, action.data)
  }
}

function* handleDeletePost(postID) {
  yield call(axios, {
    method: 'POST',
    data: postID,
    url : `${Constants.HOSTNAME}deletepost`,
    config: { headers: {'Content-Type':'application/json'}}
  })
}

function* watchDeletePost() {
  while (true) {
    const action = yield take('DELETE_POST');
    yield call(handleDeletePost, action.data)
  }
}

function* handleSearch(searchInput) {
  try {
      const response = yield call(axios, {
      method: 'GET',
      url: `${Constants.HOSTNAME}search/${searchInput}`,
      config: { headers: {'Content-Type':'application/json'}}
    });
    yield put(Actions.updateSearchOutput(response.data));
  } catch(err) {
    console.log('failed to search: ', err)
  }
}

function* watchSearchActive() {
  while (true) {
    const action = yield take("SEARCH_POSTS");
    yield call(handleSearch, action.data)
  }
}

function* getUserPosts(userID) {
  try {
      const response = yield call(axios, {
      method: 'GET',
      url: `${Constants.HOSTNAME}getuserposts/${userID}`,
      config: { headers: {'Content-Type':'application/json'}}
    });
    yield put(Actions.updateUserPosts(response.data));
  } catch(err) {
    console.log('failed to get user posts: ', err)
  }
}

function* watchShowUserPosts() {
  while (true) {
    const action = yield take("GET_USER_POSTS");
    yield call(getUserPosts, action.data)
  }
}

export default function* rootSaga() {
  yield all([
    watchShowUserPosts(),
    watchSearchActive(),
    watchDeletePost(),
    watchSubmitPost(),
    watchOnSignUpClick(),
    watchSelectCity(),
    watchAppMounted(),
    watchSelectCategoryAndImages(),
    watchFetchCurrentPostData(),
    watchOnSignInClick(),
    watchValidateUsername(),
  ])
}