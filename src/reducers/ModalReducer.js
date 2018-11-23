import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
    'modalShown': List([]),
    'isPageMaskShown': false,
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
        default:
            return state
    }
}

export default ModalReducer;