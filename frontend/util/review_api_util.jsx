export const getReview = (bookId, reviewId) => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/reviews/${reviewId}`
    })
);

export const getReviews = bookId => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/reviews`
    })
);

export const createReview = bookId => (
    $.ajax({
        method: 'post',
        url: `/api/books/${bookId}/reviews`,
        data: { review }
    })
)