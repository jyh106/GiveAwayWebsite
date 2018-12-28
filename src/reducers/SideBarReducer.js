import { Map, List } from 'immutable';
import Constants from '../constants'

const INITIAL_STATE = Map({
    'sideBarShown': false,
    'currentSelectedCity': Constants.CITY_ALL.name,
    'currentSelectedCategories': List(Constants.CATEGORY_LIST),
    'hasImages': false,
    'newest': false
});

function SideBarReducer (state = INITIAL_STATE, action) {
    switch(action.type){
    case('TOGGLE_SIDE_BAR'):
        return state.set('sideBarShown', !state.get('sideBarShown'))
    case('UPDATE_CATEGORY'):
        return updateCategory(state, action);
    case('UPDATE_CITY'):
        return state.set('currentSelectedCity', action.data)
    case('TOGGLE_HAS_IMAGES'):
        return state.set('hasImages', !state.get('hasImages'))
    case('TOGGLE_NEWEST'):
        return state.set('newest', !state.get('newest'))
    case('RESET_SELECTIONS'):
        return state.set('currentSelectedCity', Constants.CITY_ALL.name).set('currentSelectedCategories', List(Constants.CATEGORY_LIST));
    default:
        return state
    }
}

function resetSelectionToAllCategories(state) {
    return state.set('currentSelectedCategories', List(Constants.CATEGORY_LIST));
}

function updateCategory(state, action) {
    //if all is selected again, then no changes to the category list
    if (action.data === Constants.CATEGORY_ALL.name) {
        return resetSelectionToAllCategories(state);
    }

    const currentStateCategoryList = state.get('currentSelectedCategories');

    //if at first only 'all categories' in list,  erase 'all categories', then add new category to list 
    if (currentStateCategoryList.size === Constants.CATEGORY_LIST_LENGTH) {
        return state.set('currentSelectedCategories', List([action.data]))
    }

    const isCategorySelected = currentStateCategoryList.includes(action.data);
    if (isCategorySelected) { 
        //if that is the only category selected, then auto select 'all categories'
        if (currentStateCategoryList.size === 1) {
            return resetSelectionToAllCategories(state);
        }
        //unselect
        const updatedCategories = currentStateCategoryList.filter(
            category => category !== action.data);
        return state.set('currentSelectedCategories', updatedCategories)    
    }
    //else is just adding a new category into the list
    return state.update('currentSelectedCategories', list => list.push(action.data));
}

export default SideBarReducer;