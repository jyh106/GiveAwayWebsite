// TODO don't need a lot/or any of these toggles
function toggleDisplayStylingMenu(toggle) {
    return {
      type: 'TOGGLE_STYLING_MENU',
      data: toggle
    };
  }

function toggleFilterMenu(toggle) {
    return {
        type: 'TOGGLE_FILTER_MENU',
        data: toggle
    }
}

function searchBoxClicked(toggle){
    return {
        type: 'TOGGLE_SEARCH',
        data: toggle,
    }
}

  export default {
      toggleDisplayStylingMenu,
      toggleFilterMenu,
      searchBoxClicked
  }