import { Map } from 'immutable';

const INITIAL_STATE = Map({
    // TODO this does not allow readable code to reach into data structure
    // No guarantee that order is preserved in a Map
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

/**
 * Posts is a list of posts. Not a map.
 * [
 *  {
 *    cateogry: 'books',
 *    date: '11/8',
 *    note: 'skadjf'
 *  }
 * ]
 */

function postBoardReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        default:
            return state
    }
}

export default postBoardReducer;