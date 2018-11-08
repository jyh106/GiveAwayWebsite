import { Map } from 'immutable';

const INITIAL_STATE = Map({
    posts: [
        {
            'name': 'Books',
            'date':'11/7/2018', 
            'address':'123 Apple street, Free, CA, 91234',
            'note':'none',
        }, {
            'name': 'Shoes',
            'date':'11/7/2018', 
            'address':'123 Apple street, Free, CA, 91234',
            'note':'none',
        }, {
            'name': 'Containers',
            'date':'11/7/2018', 
            'address':'123 Apple street, Free, CA, 91234',
            'note':'none',
        }, {
            'name': 'Kitchenware',
            'date':'11/7/2018', 
            'address':'123 Apple street, Free, CA, 91234',
            'note':'none',
        }, {
            'name': 'Kitchenware',
            'date':'11/7/2018', 
            'address':'123 Apple street, Free, CA, 91234',
            'note':'none',
        }
    ],

    displayStyle: 'Gallery',

})


function postBoardReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case('CHANGE_DISPLAY_STYLE'):
            return state.set('displayStyle', action.data)
        default:
            return state
    }
}

export default postBoardReducer;