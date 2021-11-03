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

export const getShelf = userId => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}`,
        data: { shelf }
    })
)

export const getShelving = (userId, shelvingId) => (
    $.ajax({
        method: 'get',
        url: `/api/users/${userId}/bookshelves/${shelvingId}`,
        data: { shelving }
    })
)

export const reshelve = (userId, shelvingId) => (
    $.ajax({
        method: 'patch',
        url: `/api/users/${userId}/bookshelves/${shelvingId}`,
        data: { shelving }
    })
)