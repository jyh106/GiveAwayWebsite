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
        }
    ]
})


function postBoardReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        default:
            return state
    }
}

export default postBoardReducer;