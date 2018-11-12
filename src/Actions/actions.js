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

function toggleModal(toggle){
    return {
        type: 'TOGGLE_MODAL',
        data: toggle,
    }
}

function updateUserLocation(zipcode){
    return {
        type: 'UPDATE_USER_LOCATION',
        data: zipcode,
    }
}

export default {
    isSearchBoxOnFocus,
    changeDisplayStyle,
    toggleModal,
    updateUserLocation
}