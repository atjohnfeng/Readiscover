import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    errors: errorsReducer,
    session: sessionReducer,
});

export default entitiesReducer;