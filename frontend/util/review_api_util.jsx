export const getReview = (bookId, reviewId) => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/reviews/${reviewId}`
    })
);

export const getReviews = bookId => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/reviews/`
    })
);

export const createReview = review => (
    $.ajax({
        method: 'post',
        url: `/api/books/${review.book_id}/reviews`,
        data: { review }
    })
);

export const editReview = (review, reviewId) => (
    $.ajax({
        method: 'patch',
        url: `/api/books/${review.book_id}/reviews/${reviewId}`,
        data: { review }
    })
);

export const deleteReview = (bookId, reviewId) => (
    $.ajax({
        method: 'delete',
        url: `/api/books/${bookId}/reviews/${reviewId}`
    })
);