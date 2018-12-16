const HOSTNAME = "http://127.0.0.1:5000/";

const MODAL_TYPES = {
    'MODAL_NEWFORM': 'newForm', 
    'MODAL_SIGNIN':'signIn', 
    'MODAL_SIGNUP':'signUp', 
    'MODAL_POST':'post',
    'MODAL_PHOTODISPLAY': 'photos'
}

const CITIES = [
    {
    'name':'All cities',
    'className': 'allCities'
    },{
    'name':'San Francisco',
    'className': 'sanFrancisco'
    }, {
    'name':'Berkeley',
    'className': 'berkeley'
    }, {
    'name':'Oakland',
    'className': 'oakland'
    }, {
    'name':'San Bruno',
    'className': 'sanBruno'
    }, {
    'name':'Burlingame',
    'className': 'burlingame'
    }
]

const CATEGORIES = [
    {
        'name':'All categories',
        'className': 'allCategories'
    },{
        'name':'kids related',
        'className': 'kidsRelated'
    }, {
        'name':'furniture',
        'className': 'furniture'
    }, {
        'name':'clothes',
        'className': 'clothes'
    }, {
        'name':'kitchenwares',
        'className': 'kitchenwares'
    }, {
        'name':'organizers',
        'className': 'organizers'
    }, {
        'name': 'garden related',
        'className': 'gardenRelated'
    }, {
        'name': 'sports/fitness',
        'className': 'sportsAndFitness'
    }, {
        'name': 'electronics',
        'className': 'electronics'
    }
]

const NONE_SCROLLABLE_THUMBS = 5;

export default {
    CITIES,
    HOSTNAME,
    MODAL_TYPES,
    CATEGORIES,
    NONE_SCROLLABLE_THUMBS
}