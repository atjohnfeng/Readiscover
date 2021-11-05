import {
    RECEIVE_SHELVING,
    RECEIVE_BOOKSHELF,
    DELETE_SHELVING,
    RESET_SHELVING
} from '../actions/bookshelf_actions'

const bookshelvesReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SHELVING:
            console.log(action);
            return Object.assign({}, action.shelving);
        case RECEIVE_BOOKSHELF:
            return action.bookshelf;
        case DELETE_SHELVING:
            let nextState = Object.assign({}, state);
            delete nextState[action.shelving.id];
            return nextState;
        case RESET_SHELVING:
            return {};
        default:
            return state;
    }
};

export default bookshelvesReducer;