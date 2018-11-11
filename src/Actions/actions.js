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

function shouldDisplayModal(){
    return {
        type: 'DISPLAY_MODAL',
    }
}

function hideModal() {
    return {
        type: 'HIDE_MODAL',
    }
}

export default {
    isSearchBoxOnFocus,
    changeDisplayStyle,
    shouldDisplayModal,
    hideModal
}