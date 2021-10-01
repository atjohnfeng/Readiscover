export const getBook = bookId => (
    $.ajax({
        method: 'get',
        url: `/api/books/${bookId}`,
    })
);

export const getBooks = () => (
    $.ajax({
        method: 'get',
        url: '/api/books',
    })
);