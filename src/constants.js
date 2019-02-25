const HOSTNAME = "http://127.0.0.1:5000/";
const UPLOADS_HOSTNAME = "http://127.0.0.1:5000/uploads/";

const DEFAULT_IMG_SRC = 'default.png';

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

const INDEX_FILE_SRC_AFTER_ROUTE_SPLIT = 4;

const SINGULAR_POST_PAGE_ROUTE = "post/";

const ACCOUNT_PAGE_ROUTE = 'account/';

const PHOTO_MODAL_POST_PAGE_STYLE = {
    'position': 'absolute',
    'top': 0,
    'left': 0
}

const PHOTO_MODAL_POST_GALLERY_STYLE = {
    'position': 'relative',
    'top': '50%',
    'left': '25%'
}

const MOCK_POST_POSITION = [
     [37.5881533, -122.3647577],
     [37.5860787, -122.3470779],
     [37.5929573, -122.3626341],
     [37.5989832, -122.3813015],
     [37.5981006, -122.38472],
     [37.6199786, -122.4003146],
     [37.6035175,-122.3986629],
     [37.6369483, -122.4086703],
     [37.6468027, -122.4037538],
     [37.7054535, -122.4515598],
     [37.7468307, -122.4604141],
     [37.7549878, -122.4408371],
     [37.7819551,-122.4258336],
     [37.7447087, -122.4772446],
     [37.7393152, -122.4762377,15],
     [37.7297857, -122.4732172],
     [37.7186107, -122.4614274],
     [37.7033833, -122.4770621],
     [37.694209, -122.4740416],
     [37.6862673, -122.4716706],
     [37.6767566, -122.4705014],
     [37.6707155, -122.4701441],
     [37.66128, -122.468033],
     [37.6508147, -122.4669612],
     [37.6300597, -122.4381525],
     [37.6140849, -122.4073775],
     [37.610288, -122.393592],
     [37.6001059, -122.3870218]
]

export default {
    MOCK_POST_POSITION,
    ACCOUNT_PAGE_ROUTE,
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
    POST_GALLERY_DEFAULT_IMAGE,
    DEFAULT_IMG_SRC,
    INDEX_FILE_SRC_AFTER_ROUTE_SPLIT,
    SINGULAR_POST_PAGE_ROUTE,
    PHOTO_MODAL_POST_PAGE_STYLE,
    PHOTO_MODAL_POST_GALLERY_STYLE
}

