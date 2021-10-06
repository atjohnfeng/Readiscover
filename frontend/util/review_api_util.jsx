export const getReview = (bookId, id) => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/reviews/${id}`
    })
);

export const getReviews = bookId => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}/reviews/`
    })
);

export const createReview = bookId => (
    $.ajax({
        method: 'post',
        url: `/api/books/${bookId}/reviews`,
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