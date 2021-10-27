export const getReview = (bookId, userId) => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/reviews/${userId}`
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

export const editReview = review => (
    $.ajax({
        method: 'patch',
        url: `/api/books/${review.book_id}/reviews/${review.id}`,
        data: { review }
    })
);

export const deleteReview = review => (
    $.ajax({
        method: 'delete',
        url: `/api/books/${review.book_id}/reviews/${review.id}`
    })
);