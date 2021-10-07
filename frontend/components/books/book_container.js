import { connect } from 'react-redux';
import Book from './book';
import { getBook } from '../../actions/book_actions';

const mapStateToProps = (state, ownProps) => ({
    book: state.entities.books[ownProps.match.params.bookId],
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    getBook: bookId => dispatch(getBook(bookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Book);