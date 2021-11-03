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