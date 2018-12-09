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

export default {
    CITIES,
    HOSTNAME,
    MODAL_TYPES
}