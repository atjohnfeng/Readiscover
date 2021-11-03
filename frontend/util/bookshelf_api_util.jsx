export const createShelving = shelving => (
    $.ajax({
        method: 'post',
        url: `/api/users/${shelving.user_id}/bookshelves`,
        data: { shelving }
    })
)