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

  export default {
      toggleDisplayStylingMenu,
      toggleFilterMenu
  }