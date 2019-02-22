import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
    'modalShown': "",
    'isPageMaskShown': false,
    'currentClickedImage': 'none',
    'images': [],
    'isSignUpUsernameValid': true,
    'isSignInSuccessful': true,
});

function ModalReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case('SHOW_MODAL'):
            return state.set('modalShown', action.data).set('isPageMaskShown', true);
        case('HIDE_MODAL'):
            if (!state.get("isSignInSuccessful")) {
                return state.set('isSignInSuccessful', true).set('modalShown', "").set('isPageMaskShown', false);
            } else {
                return state.set('modalShown', "").set('isPageMaskShown', false);
            }
        case('POST_IMAGE_CLICKED'):
            return state.set('currentClickedImage', action.data.currentViewingImage).set('images', action.data.postImages);
        case('UPDATE_CURRENT_CLICKED_IMAGE'):
            return state.set('currentClickedImage', action.data)
        case('VALIDATE_USERNAME'):
            return state.set('isSignUpUsernameValid', action.data)
        case('SIGN_IN_VALIDATION'):
            return state.set('isSignInSuccessful', action.data)
        default:
            return state
    }
}

export default ModalReducer;