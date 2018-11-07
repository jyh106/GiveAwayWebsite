import { Map } from 'immutable';

const INITIAL_STATE = Map({
    posts: Map({
        'Books': {'date':'11/7/2018', 
                    'address':'123 Apple street, Free, CA, 91234',
                    'note':'none',
                },
        'Shoes': {'date':'11/7/2018', 
                'address':'123 Apple street, Free, CA, 91234',
                'note':'none',
                },
        'Containers': {'date':'11/7/2018', 
                'address':'123 Apple street, Free, CA, 91234',
                'note':'none',
                },
        'Kitchenwares': {'date':'11/7/2018', 
                'address':'123 Apple street, Free, CA, 91234',
                'note':'none',
                },
    }),
});

function postBoardReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        default:
            return state
    }
}

export default postBoardReducer;