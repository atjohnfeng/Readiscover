import { RECEIVE_REVIEW, 
    RECEIVE_REVIEWS, 
    DELETE_REVIEW,
    RESET_REVIEWS } from '../actions/review_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return Object.assign({}, state, action.review);
        case DELETE_REVIEW:
            let nextState = Object.assign({}, state);
            delete nextState[action.review.id];
            return nextState;
        case RESET_REVIEWS:
            return {};
        default:
            return state;
    }
};

export default reviewsReducer;