import * as BookshelfApiUtil from '../util/bookshelf_api_util';

export const RECEIVE_SHELVING = 'RECEIVE_SHELVING';
export const RECEIVE_BOOKSHELF = 'RECEIVE_BOOKSHELF';
export const DELETE_SHELVING = 'DELETE_SHELVING';
export const RESET_SHELVING = 'RESET_SHELVING';

const receiveShelving = shelving => {
    return {
        type: RECEIVE_SHELVING,
        shelving
    }
}

const receiveBookshelf = bookshelf => {
    return {
        type: RECEIVE_BOOKSHELF,
        bookshelf
    }
}

const destroyShelving = shelving => {
    return {
        type: DELETE_SHELVING,
        shelving
    }
}

const resetShelving = () => {
    return {
        type: RESET_SHELVING
    }
}
 
export const getShelving = (userId, id) => dispatch => (
    BookshelfApiUtil.getShelving(userId, id).then(shelving => dispatch(receiveShelving(shelving)))
)

export const getBookshelf = userId => dispatch => (
    BookshelfApiUtil.getBookshelf(userId).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
)

export const reshelveBook = (userId, id) => dispatch => (
    BookshelfApiUtil.reshelveBook(userId, id).then(shelving => dispatch(receiveShelving(shelving)))
)

export const deleteShelving = (userId, id) => dispatch => (
    BookshelfApiUtil.destroyShelving(userId, id).then(shelving => dispatch(destroyShelving(shelving)))
)

export const resetShelving = () => dispatch => (
    dispatch(resetShelving())
)