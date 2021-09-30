export const getBook = book => (
    $.ajax({
        method: 'get',
        url: `api/books/${book.id}`,
        data: { book }
    })
);