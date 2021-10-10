import { connect } from 'react-redux';
import Book from './book';
import { getBook } from '../../actions/book_actions';
import { getReviews } from '../../actions/review_actions'

const mapStateToProps = (state, ownProps) => ({
    book: state.entities.books[ownProps.match.params.bookId],
    currentUser: state.session.id,
    reviews: state.entities.reviews
})

const mapDispatchToProps = dispatch => ({
    getBook: bookId => dispatch(getBook(bookId)),
    getReviews: bookId => dispatch(getReviews(bookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Book);