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
  axios.defaults.withCredentials = true;
  const response = yield call(axios.get, `${Constants.HOSTNAME}posts?city=All cities`, {withCredentials: true})
  yield put(Actions.getPosts(response.data))
}

function* signInWithCredential() {
  axios.defaults.withCredentials = true;
  try {
    const response = yield call(axios, {
      method: 'POST',
      url: `${Constants.HOSTNAME}signin`,
      config: { headers: {'Content-Type':'application/json'}},
      withCredentials: true
    });
    yield put(Actions.signIn({
      username: response.data.username,
      userID: response.data.userID,
    }));
  } catch (err) {
    console.log('cannot sign in with credential', err);
  }
}

// handle sending posts from server to frontehd when app mounts
export function* watchAppMounted() {
  while (true) {
      yield take('APP_MOUNTED');
      yield call(getPosts);
      yield call(signInWithCredential);
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
     const response = yield call(axios, {
      method: 'POST',
      url: `${Constants.HOSTNAME}signup`,
      data: action.data,
      config: { headers: {'Content-Type':'application/json'}}
    });
    yield put(Actions.signIn({
      username: action.data.username,
      userID: response.data.userID
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
      username: response.data.username,
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

function* signOutWithCredential() {
  axios.defaults.withCredentials = true;
  try {
    const response = yield call(axios, {
      method: 'POST',
      url: `${Constants.HOSTNAME}signout`,
      config: { headers: {'Content-Type':'application/json'}},
      withCredentials: true
    });
  } catch (err) {
    console.log('cannot sign out')
  }
}

function* watchSignOutClick() {
  while(true) {
    yield take('SIGN_OUT');
    yield call(signOutWithCredential);
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


export function* watchSideBarSelection() {
  while (true) {
    yield take(['UPDATE_CATEGORY', 'TOGGLE_HAS_IMAGES','RESET_SELECTIONS', 'TOGGLE_NEWEST', 'UPDATE_CITY']);
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
  try {
    yield call(axios, {
    method: 'POST',
    data: postID,
    url : `${Constants.HOSTNAME}deletepost`,
    config: { headers: {'Content-Type':'application/json'}}
  })
    yield put(Actions.shouldShowUserPosts(true));
  } catch (err) {
    console.log('error in trying to delete post: ', err)
  }
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
    const action = yield take("SHOW_USER_POSTS");
    if (action.data) {
      const userInfo = yield select(Utils.getUserInfo);
      yield call(getUserPosts, userInfo['userID'])
    }
  }
}

export default function* rootSaga() {
  yield all([
    watchSignOutClick(),
    watchShowUserPosts(),
    watchSearchActive(),
    watchDeletePost(),
    watchSubmitPost(),
    watchOnSignUpClick(),
    watchAppMounted(),
    watchSideBarSelection(),
    watchFetchCurrentPostData(),
    watchOnSignInClick(),
    watchValidateUsername(),
  ])
}
