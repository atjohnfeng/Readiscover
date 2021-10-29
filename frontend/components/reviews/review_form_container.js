import { connect } from 'react-redux';
import { createReview, editReview, getReview } from '../../actions/review_actions';
import { getBook } from '../../actions/book_actions';
import StarForm from './star_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    errors: state.errors.reviewErrors,
    bookId: ownProps.match.params.bookId,
    reviews: state.entities.reviews
})

const mapDispatchToProps = dispatch => ({
    getBook: bookId => dispatch(getBook(bookId)),
    createReview: review => dispatch(createReview(review)),
    editReview: (review, reviewId) => dispatch(editReview(review, reviewId)),
    getReview: (book_id, user_id) => dispatch(getReview(book_id, user_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);