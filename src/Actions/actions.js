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

function updateCity(location){
    return {
        type: 'UPDATE_CITY',
        data: location,
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

function updateClickedImage(currentClickedImage){
    return {
        type: "UPDATE_CURRENT_CLICKED_IMAGE",
        data: currentClickedImage
    }
}

function handleClickedImage(currentClickedImage, images){
    return {
        type: 'POST_IMAGE_CLICKED',
        data: {
            currentClickedImage,
            images
        }
    }
}


export default {
    isSearchBoxOnFocus,
    changeDisplayStyle,
    toggleModal,
    updateCity,
    updateClickedPost,
    addNewPost,
    appMounted,
    getPosts,
    appWillMount, 
    handleClickedImage,
    updateClickedImage
}