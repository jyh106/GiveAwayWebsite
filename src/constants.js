const HOSTNAME = "http://127.0.0.1:5000/";
const UPLOADS_HOSTNAME = "http://127.0.0.1:5000/uploads/";

const MODAL_TYPES = {
    'MODAL_SIGNIN':'signIn', 
    'MODAL_SIGNUP':'signUp', 
    'MODAL_POST':'post',
    'MODAL_PHOTODISPLAY': 'photos'
}

const CITY_ALL = {
    'name':'All cities',
    'className': 'allCities'
};

const CITY_SANFRAN = {
    'name':'San Francisco',
    'className': 'sanFrancisco'
};

const CITY_BERKELEY = {
    'name':'Berkeley',
    'className': 'berkeley'
};

const CITY_OAKLAND = {
    'name':'Oakland',
    'className': 'oakland'
};

const CITY_SANBRUNO = {
    'name':'San Bruno',
    'className': 'sanBruno'
};

const CITY_BURLINGAME = {
    'name':'Burlingame',
    'className': 'burlingame'
};

const CITIES = [
    CITY_ALL,
    CITY_SANFRAN, 
    CITY_BERKELEY, 
    CITY_OAKLAND, 
    CITY_SANBRUNO, 
    CITY_BURLINGAME
]

const CATEGORY_ALL = {
    'name':'All categories',
    'className': 'allCategories'
};

const CATEGORY_KIDS = {
    'name':'kids related',
    'className': 'kidsRelated'
};

const CATEGORY_FURNITURE = {
    'name':'furniture',
    'className': 'furniture'
};

const CATEGORY_WEARABLES = {
    'name':'wearables',
    'className': 'wearables'
};

const CATEGORY_KITCHEN = {
    'name':'kitchenwares',
    'className': 'kitchenwares'
};

const CATEGORY_ORGANIZERS = {
    'name':'organizers',
    'className': 'organizers'
};

const CATEGORY_GARDEN = {
    'name': 'garden related',
    'className': 'gardenRelated'
};

const CATEGORY_SPORTS = {
    'name': 'sports/fitness',
    'className': 'sportsAndFitness'
};

const CATEGORY_ELECTRONICS = {
    'name': 'electronics',
    'className': 'electronics'
};

const CATEGORY_OTHERS = {
    'name': 'others',
    'className': 'others'
};

const CATEGORIES = [
    CATEGORY_ALL,
    CATEGORY_KIDS, 
    CATEGORY_FURNITURE, 
    CATEGORY_WEARABLES, 
    CATEGORY_KITCHEN,
    CATEGORY_ORGANIZERS, 
    CATEGORY_GARDEN, 
    CATEGORY_SPORTS, 
    CATEGORY_ELECTRONICS, 
    CATEGORY_OTHERS
];

const CATEGORY_LIST = (CATEGORIES.slice(1,CATEGORIES.length)).map((category) => category.name);

const CATEGORY_LIST_LENGTH = CATEGORY_LIST.length;

const NONE_SCROLLABLE_THUMBS = 5;

const POST_GALLERY_DEFAULT_IMAGE = "default.png";

export default {
    CITIES,
    HOSTNAME,
    UPLOADS_HOSTNAME,
    MODAL_TYPES,
    CATEGORIES,
    NONE_SCROLLABLE_THUMBS,
    CATEGORY_ALL,
    CATEGORY_KIDS, 
    CATEGORY_FURNITURE, 
    CATEGORY_WEARABLES, 
    CATEGORY_KITCHEN,
    CATEGORY_ORGANIZERS, 
    CATEGORY_GARDEN, 
    CATEGORY_SPORTS, 
    CATEGORY_ELECTRONICS, 
    CATEGORY_OTHERS,
    CITY_ALL,
    CITY_SANFRAN, 
    CITY_BERKELEY, 
    CITY_OAKLAND, 
    CITY_SANBRUNO, 
    CITY_BURLINGAME,
    CATEGORY_LIST_LENGTH,
    CATEGORY_LIST,
    POST_GALLERY_DEFAULT_IMAGE
}

