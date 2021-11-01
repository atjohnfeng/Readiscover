import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const RESET_REVIEWS = 'RESET_REVIEWS';
export const RESET_REVIEW_ERRORS = 'RESET_REVIEW_ERRORS';

const receiveReview = review => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

const receiveReviews = reviews => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

const receiveReviewErrors = errors => {
    return {
        type: RECEIVE_REVIEW_ERRORS,
        errors
    }
}

const destroyReview = review => {
    return {
        type: DELETE_REVIEW,
        review
    }
}

const resetReviews = () => {
    return {
        type: RESET_REVIEWS
    }
}

const resetErrors = () => {
    return {
        type: RESET_REVIEW_ERRORS
    }
}

export const getReviews = bookId => dispatch => (
    ReviewApiUtil.getReviews(bookId).then(reviews => dispatch(receiveReviews(reviews)),
        errors => dispatch(receiveReviewErrors(errors.responseJSON)))
)

export const getReview = (bookId, id) => dispatch => (
    ReviewApiUtil.getReview(bookId, id).then(review => dispatch(receiveReview(review)),
        errors => dispatch(receiveReviewErrors(errors.responseJSON)))
)

export const createReview = review => dispatch => (
    ReviewApiUtil.createReview(review).then(review => dispatch(receiveReview(review)),
        errors => dispatch(receiveReviewErrors(errors.responseJSON)))
)

export const editReview = (review, reviewId) => dispatch => (
    ReviewApiUtil.editReview(review, reviewId).then(review => dispatch(receiveReview(review)),
        errors => dispatch(receiveReviewErrors(errors.responseJSON)))
)

export const deleteReview = (bookId, reviewId) => dispatch => (
    ReviewApiUtil.deleteReview(bookId, reviewId).then(review => dispatch(destroyReview(review)),
        errors => dispatch(receiveReviewErrors(errors.responseJSON)))
)

export const reset = () => dispatch => (
    dispatch(resetReviews())
)

export const resetReviewErrors = () => dispatch => (
    dispatch(resetErrors())
)