import React from 'react';

function getCurrentCity(state) {
    return state.SideBar.get('currentSelectedCity');
}

function getCurrentSelectedCategories(state) {
    return state.SideBar.get('currentSelectedCategories');
}

function getShowingModals(state) {
    return state.Modal.get('modalShown');
}

function getPageMaskShown(state) {
    return state.Modal.get('isPageMaskShown');
}

function getClickedPostInfo(state) {
    return state.PostBoard.get('clickedListPost');
}

function getCurrentClickedImages(state) {
    return state.Modal.get('currentClickedImage');
}

function getImages(state) {
    return state.Modal.get('images');
}

function getDisplayStyle(state) {
    return state.PostBoard.get('displayStyle');
}

function getPosts(state) {
    return  state.PostBoard.get('posts');
}

function getIsNewestSelected(state) {
    return state.SideBar.get('newest');
}

function getIsImageSelected(state) {
    return state.SideBar.get('hasImages');
}

function getIsSideBarShown(state) {
    return state.SideBar.get('sideBarShown');
}

function getDate() {
    let date = new Date();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    return month + "/" + day + "/" +  year;
}

function getSideBarItems(state, selectionLabel) {
    if(selectionLabel === 'currentSelectedCategories'){
      return state.SideBar.get('currentSelectedCategories').toJS()
    }
      return state.SideBar.get(selectionLabel)
  }

function renderPageMask(pageMaskShown) {
    if (!pageMaskShown) {
        return null
    }
    return (
        <div className="page-mask"></div>
    )
}

function getUserInfo(state) {
    return state.App.get('user');
}

function getUsernameValidation(state) {
    return state.Modal.get('isSignUpUsernameValid');
}

function isSignInSuccessful(state) {
    return state.Modal.get('isSignInSuccessful');
}

export default {
    isSignInSuccessful,
    getUsernameValidation,
    getCurrentCity,
    getShowingModals,
    getDate,
    getCurrentSelectedCategories,
    getSideBarItems,
    getPageMaskShown,
    getClickedPostInfo,
    getCurrentClickedImages,
    getImages,
    getDisplayStyle,
    getPosts,
    getIsNewestSelected,
    getIsImageSelected,
    getIsSideBarShown,
    renderPageMask,
    getUserInfo
}