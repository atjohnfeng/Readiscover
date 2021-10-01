import * as BookApiUtil from '../util/book_api_util';

export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';

const receiveBook = book => {
    return {
        type: RECEIVE_BOOK,
        book
    }
}

const receiveBooks = books => {
    return {
        type: RECEIVE_BOOKS,
        books
    }
}

export const getBook = book => dispatch => (
    BookApiUtil.getBook(book)
        .then(book => dispatch(receiveBook(book)))
)

export const getBooks = () => dispatch => (
    BookApiUtil.getBooks()
        .then(books => dispatch(receiveBooks(books)))
)