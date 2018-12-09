import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
    'modalShown': List([]),
    'isPageMaskShown': false,
    'currentClickedImage': 'none',
    'images': []
});

function ModalReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case('SHOW_MODAL'):
            // when modal and page mask toggle together
            return state.update('modalShown', list=>list.push(action.data)).set('isPageMaskShown', true);
        case('HIDE_MODAL'):
            if(state.get('modalShown').includes(action.data)){
                const index = state.get('modalShown').indexOf(action.data);
                return state.update('modalShown', list => list.splice(index, 1)).set('isPageMaskShown', false);
            }
            return state;
        case('POST_IMAGE_CLICKED'):
            return state.set('currentClickedImage', action.data.currentClickedImage).set('images', action.data.images);
        case('UPDATE_CURRENT_CLICKED_IMAGE'):
            return state.set('currentClickedImage', action.data)
        default:
            return state
    }
}

export default ModalReducer;