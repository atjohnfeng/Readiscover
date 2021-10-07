import { connect } from 'react-redux';
import { createReview, editReview } from '../../actions/review_actions';
import StarForm from './star_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    errors: state.errors.reviewErrors,
    bookId: ownProps.bookId,
    reviews: state.entities.reviews
})

const mapDispatchToProps = dispatch => ({
    createReview: review => dispatch(createReview(review)),
    editReview: review => dispatch(editReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(StarForm);