export const getBook = book => (
    $.ajax({
        method: 'get',
        url: `/api/books/${book.id}`,
        data: { book }
    })
);

export const getBooks = () => (
    $.ajax({
        method: 'get',
        url: '/api/books',
    })
);