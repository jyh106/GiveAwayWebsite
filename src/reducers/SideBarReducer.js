import { Map, List } from 'immutable';

const INITIAL_STATE = Map({
    'sideBarShown': true,
    'currentSelectedCity': 'All cities',
    'currentSelectedCategories': List(['All categories']),
});

function SideBarReducer (state = INITIAL_STATE, action) {
    switch(action.type){
    case('UPDATE_CITY'):
        return state.set('currentSelectedCity', action.data)
    case('TOGGLE_SIDE_BAR'):
        return state.set('sideBarShown', !state.get('sideBarShown'))
    case('UPDATE_CATEGORY'):
        return updateCategory(state, action);
    case('RESET_SELECTIONS'):
        return state.set('currentSelectedCity', 'All cities').set('currentSelectedCategories', List(['All categories']))
    default:
        return state
    }
}

function updateCategory(state, action) {
    //if all is selected again, then no changes to the category list
    if (action.data === 'All categories') {
        return state.set('currentSelectedCategories', List(['All categories']));
    }

    const currentStateCategoryList = state.get('currentSelectedCategories');

    //if at first only 'all categories' in list,  erase 'all categories', then add new category to list 
    if (currentStateCategoryList.get(0) === 'All categories' ) {
        return state.set('currentSelectedCategories', List([action.data]))
    }

    const isCategorySelected = currentStateCategoryList.includes(action.data);
    if (isCategorySelected) { 
        //if that is the only category selected, then auto select 'all categories'
        if (currentStateCategoryList.length === 1) {
            return state.set('currentSelectedCategories', List(['All categories']));
        }
        //unselect
        const updatedCategories = currentStateCategoryList.filter(
            category => category !== action.data);
        return state.set('currentSelectedCategories', updatedCategories)    
    }
    return state.update('currentSelectedCategories', list => list.push(action.data));
}

export default SideBarReducer;