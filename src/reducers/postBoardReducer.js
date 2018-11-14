import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
    posts: List([
        {
            'name': 'Books',
            'date':'11/7/2018', 
            'address':'123 Apple street,Freedom,CA,91234',
            'note':'More than 100,000 consumers have used the researchers’ Wehe smartphone app to test internet connections. Information from those tests are aggregated and analyzed by the researchers to check if data speeds are being slowed, or throttled, for specific mobile services.',
        }, {
            'name': 'Shoes',
            'date':'11/7/2018', 
            'address':'123 Apple street,Freedom,CA,91234',
            'note':'Among leading U.S. carriers, Sprint was the only one to throttle Skype, the study found. The throttling was detected in 34 percent of 1,968 full tests -- defined as those in which a user ran two tests in a row -- conducted between Jan. 18 and Oct. 15. It happened regularly, and was spread geographically across the U.S. Android phone users were more affected than owners of Apple Inc.’s iPhones.',
        }, {
            'name': 'Containers',
            'date':'11/7/2018', 
            'address':'123 Apple street,Freedom,CA,91234',
            'note':'none',
        }, {
            'name': 'Kitchenware',
            'date':'11/7/2018', 
            'address':'123 Apple street,Freedom,CA,91234',
            'note':'none',
        }, {
            'name': 'Clothes',
            'date':'11/7/2018', 
            'address':'123 Apple street,Freedom,CA,91234',
            'note':'none',
        }
    ]),

    displayStyle: 'Gallery',
    clickedListPost: {}
})


function PostBoardReducer (state = INITIAL_STATE, action) {
    switch(action.type){
        case('CHANGE_DISPLAY_STYLE'):
            return state.set('displayStyle', action.data)
        case('UPDATE_CLICKED_POST'):
            return state.set('clickedListPost', action.data)
        case('ADD_NEW_POST'):
            return state.update('posts', list => list.push(action.data));
        default:
            return state
    }
}

export default PostBoardReducer;