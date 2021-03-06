
function changeDisplayStyle(style) {
    return {
        type: 'CHANGE_DISPLAY_STYLE',
        data: style,
    }
}

function toggleModal(type, toggle) {
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

function onSignUpClick(data) {
    return {
        type: 'ON_SIGNUP_CLICK',
        data
    };
}

function onSignInClick(data) {
    return {
        type: 'ON_SIGNIN_CLICK',
        data
    };
}

function signIn(data) {
    return {
        type: 'SIGNIN',
        data
    }
}


function updateCity(city) {
    return {
        type: 'UPDATE_CITY',
        data: city,
    }
}

function updateCategory(category) {
    return {
        type: 'UPDATE_CATEGORY',
        data: category
    }
}

function updateClickedPost(postInfo) {
    return {
        type: 'UPDATE_CLICKED_POST',
        data: postInfo,
    }
}

function addNewPost(postInfo) {
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

function toggleSideBar() {
    return {
        type: 'TOGGLE_SIDE_BAR'
    }
}

function toggleNewest() {
    return {
        type: 'TOGGLE_NEWEST'
    }
}

function toggleHasImages() {
    return {
        type: 'TOGGLE_HAS_IMAGES'
    }
}

function resetSideBarSelections() {
    return {
        type: 'RESET_SELECTIONS'
    }
}

function fetchCurrentPostData(postID) {
    return {
        type: 'FETCH_CURRENT_POST_DATA',
        data: postID
    }
}

function validateUsernameBackend(username) {
    return {
        type: 'VALIDATE_USERNAME_BACKEND',
        data: {username}
    }
}

function validateUsername(isValid) {
    return {
        type: 'VALIDATE_USERNAME',
        data: isValid
    }
}

function isSignInSuccessful(isSuccessful) {
    return {
        type: 'SIGN_IN_VALIDATION',
        data: isSuccessful
    }
}

function userSignedOut() {
    return {
        type: 'SIGN_OUT'
    }
}

function shouldShowUserPosts(toggle) {
    return {
        type: 'SHOW_USER_POSTS',
        data: toggle
    }
}

function deletePost(postID) {
    return {
        type: "DELETE_POST",
        data: {postID}
    }
}

function updateUserLocation(userLocation) {
    return {
        type: "UPDATE_USER_LOCATION",
        data: userLocation
    }
}

function searchForReleventPosts(searchInput) {
    return {
        type: "SEARCH_POSTS",
        data: searchInput
    }
}

function updateSearchOutput(searchOutput) {
    return {
        type: 'UPDATE_SEARCH_OUTPUT',
        data: searchOutput
    }
}

function searchBarStatus(isActive) {
    return {
        type: "SEARCH_STATUS",
        data: isActive
    }
}

function updateUserPosts(posts) {
    return {
        type: 'UPDATE_USER_POSTS',
        data: posts
    }
}

function showPostOnMap(post) {
    return {
        type: 'SHOW_POST_ON_MAP',
        data: post,
    }
}

function resetMapPosts() {	
    return {	
        type: 'RESET_MAP_POSTS'	
    }	
}

function appWillMount() {
    return {
        type: 'APP_WILL_MOUNT',
    }
}


export default {
    appWillMount,
    resetMapPosts,
    showPostOnMap,
    updateUserPosts,
    searchBarStatus,
    updateSearchOutput,
    searchForReleventPosts,
    updateUserLocation,
    deletePost,
    shouldShowUserPosts,
    userSignedOut,
    isSignInSuccessful,
    validateUsernameBackend,
    validateUsername,
    onSignInClick,
    signIn,
    changeDisplayStyle,
    toggleModal,
    onSignUpClick,
    updateClickedPost,
    addNewPost,
    appMounted,
    getPosts,
    handleClickedImage,
    updateClickedImage,
    toggleSideBar,
    updateCategory,
    updateCity,
    resetSideBarSelections,
    toggleNewest,
    toggleHasImages,
    fetchCurrentPostData
}