export const createShelving = shelving => (
    $.ajax({
        method: 'post',
        url: `/api/users/${shelving.user_id}/bookshelves`,
        data: { shelving }
    })
)

export const deleteShelving = (userId, shelvingId) => (
    $.ajax({
        method: 'delete',
        url: `/api/users/${userId}/bookshelves/${shelvingId}`
    })
)

export const getBookshelf = userId => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}/bookshelves`,
        // data: { bookshelf }
    })
)

export const getShelving = (userId, shelvingId) => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}/bookshelves/${shelvingId}`,
        data: { shelving }
    })
)

export const reshelveBook = (shelving, shelvingId) => (
    $.ajax({
        method: 'patch',
        url: `/api/users/${shelving.user_id}/bookshelves/${shelvingId}`,
        data: { shelving }
    })
)