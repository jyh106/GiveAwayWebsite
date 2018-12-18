function getCurrentCity(state) {
    return state.SideBar.get('currentSelectedCity');
}

function getCurrentSelectedCategories(state) {
    return state.SideBar.get('currentSelectedCategories');
}

function getShowingModals(state) {
    return state.Modal.get('modalShown');
}

function getDate() {
    let date = new Date();
    let month = date.getUTCMonth() + 1;
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();
    return month + "/" + day + "/" +  year;
}

export default {
    getCurrentCity,
    getShowingModals,
    getDate,
    getCurrentSelectedCategories
}