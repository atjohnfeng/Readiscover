import { connect } from 'react-redux';
import { createReview, editReview, getReview, getReviews, deleteReview } from '../../actions/review_actions';
// import { getBook } from '../../actions/book_actions';
import { reset, resetReviewErrors } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    errors: state.errors.reviewErrors,
    bookId: ownProps.match.params.bookId,
    books: state.entities.books,
    reviews: state.entities.reviews,
    book: state.entities.books[ownProps.match.params.bookId],
    errors: state.errors.reviewErrors
})

const mapDispatchToProps = dispatch => ({
    // getBook: bookId => dispatch(getBook(bookId)),
    createReview: review => dispatch(createReview(review)),
    editReview: (review, reviewId) => dispatch(editReview(review, reviewId)),
    getReviews: bookId => dispatch(getReviews(bookId)),
    // getReview: (book_id, user_id) => dispatch(getReview(book_id, user_id)),
    reset: () => dispatch(reset()),
    resetErrors: () => dispatch(resetReviewErrors()),
    deleteReview: (bookId, reviewId) => dispatch(deleteReview(bookId, reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);