function isSearchBoxOnFocus(toggle) {
    return {
        type: 'SEARCH_BOX_FOCUS',
        data: toggle,
    }
}

function changeDisplayStyle(style) {
    return {
        type: "CHANGE_DISPLAY_STYLE",
        data: style,
    }
}

function toggleModal(type, toggle){
    if(toggle){
        return {
            type:'SHOW_MODAL',
            data: type
        }
    }
    return {
        type: 'HIDE_MODAL',
        data: type,
    }
}

function updateUserLocation(zipcode){
    return {
        type: 'UPDATE_USER_LOCATION',
        data: zipcode,
    }
}

function updateClickedPost(postInfo){
    return {
        type: 'UPDATE_CLICKED_POST',
        data: postInfo,
    }
}

function addNewPost(postInfo){
    return {
        type: "ADD_NEW_POST",
        data: postInfo
    }
}

function appMounted() {
    return {
      type: 'APP_MOUNTED'
    }
  }

function getPosts(posts) {
    return {
        type: 'GET_POSTS',
        data: posts,
    }
}


export default {
    isSearchBoxOnFocus,
    changeDisplayStyle,
    toggleModal,
    updateUserLocation,
    updateClickedPost,
    addNewPost,
    appMounted,
    getPosts
}