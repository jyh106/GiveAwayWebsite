import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
    posts: List([]),

    displayStyle: 'Gallery',
    clickedListPost: {}
})


function PostBoardReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case('CHANGE_DISPLAY_STYLE'):
            return state.set('displayStyle', action.data)
        case('UPDATE_CLICKED_POST'):
            return state.set('clickedListPost', action.data)
        case('GET_POSTS'):
            return state.set('posts', List(action.data));
        default:
            return state
    }
}

export default PostBoardReducer;