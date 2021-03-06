import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import reviewsReducer from './reviews_reducer';
import bookshelvesReducer from './bookshelves_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    reviews: reviewsReducer,
    bookshelf: bookshelvesReducer
});

export default entitiesReducer;