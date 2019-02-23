import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
    posts: List([]),
    displayStyle: 'Gallery',
    clickedListPost: {},
    showUserPosts: false
})


function PostBoardReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case('CHANGE_DISPLAY_STYLE'):
            return state.set('displayStyle', action.data)
        case('UPDATE_CLICKED_POST'):
            return state.set('clickedListPost', action.data)
        case('ADD_NEW_POST'):
            return state.update('posts', list => list.push(action.data))
        case('GET_POSTS'):
            return state.set('posts', List(action.data));
        case('SHOW_USER_POSTS'):
            return state.set('showUserPosts', action.data)
        case("DELETE_POST"):
            const postIndex = state.get('posts').findIndex((post)=>post.id === action.data['postID']);
            const updatedPosts = state.get('posts').delete(postIndex);
            return state.set('posts', updatedPosts)
        default:
            return state
    }
}


export default PostBoardReducer;