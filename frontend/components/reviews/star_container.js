import { connect } from 'react-redux';
import { getReview, createReview, editReview } from '../../actions/review_actions';
import StarForm from './star_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    errors: state.errors.reviewErrors,
    bookId: ownProps.match.params.bookId
})

const mapDispatchToProps = dispatch => ({
    getReview: (bookId, id) => dispatch(getReview(bookId, id)),
    createReview: review => dispatch(createReview(review)),
    editReview: review => dispatch(editReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(StarForm);