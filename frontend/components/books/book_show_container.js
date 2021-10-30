import { connect } from 'react-redux';
import Book from './book_show';
import { getBook } from '../../actions/book_actions';
import { getReviews, reset } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
    book: state.entities.books[ownProps.match.params.bookId],
    currentUser: state.session.id,
    reviews: state.entities.reviews,
    bookId: ownProps.match.params.bookId
})

const mapDispatchToProps = dispatch => ({
    getBook: bookId => dispatch(getBook(bookId)),
    getReviews: bookId => dispatch(getReviews(bookId)),
    reset: () => dispatch(reset())
})

export default connect(mapStateToProps, mapDispatchToProps)(Book);