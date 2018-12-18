function isSearchBoxOnFocus(toggle) {
    return {
        type: 'SEARCH_BOX_FOCUS',
        data: toggle,
    }
}

function changeDisplayStyle(style) {
    return {
        type: 'CHANGE_DISPLAY_STYLE',
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

function filterResults({city, categories}){
    //city value is a string, categories value is a list
    return {
        type: 'FILTER_RESULTS',
        data: {city, categories},
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

function appWillMount() {
    return {
        type: 'APP_WILL_MOUNT'
    }
}

function getPosts(posts) {
    return {
        type: 'GET_POSTS',
        data: posts,
    }
}

function updateClickedImage(currentClickedImage) {
    return {
        type: 'UPDATE_CURRENT_CLICKED_IMAGE',
        data: currentClickedImage
    }
}

function handleClickedImage({currentViewingImage, postImages}) {
    return {
        type: 'POST_IMAGE_CLICKED',
        data: {
            currentViewingImage,
            postImages
        }
    }
}

function toggleSideBar(){
    return {
        type: 'TOGGLE_SIDE_BAR'
    }
}


export default {
    isSearchBoxOnFocus,
    changeDisplayStyle,
    toggleModal,
    filterResults,
    updateClickedPost,
    addNewPost,
    appMounted,
    getPosts,
    appWillMount, 
    handleClickedImage,
    updateClickedImage,
    toggleSideBar
}