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

export default {
    isSearchBoxOnFocus,
    changeDisplayStyle,
    toggleModal
}