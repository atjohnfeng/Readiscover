import * as ReviewApiUtil from '../util/review_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const DELETE_REVIEW = 'DELETE_REVIEW';

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

export const deleteReview = review => dispatch => (
    ReviewApiUtil.deleteReview(review).then(review => dispatch(destroyReview(review)),
        errors => dispatch(receiveReviewErrors(errors.responseJSON)))
)