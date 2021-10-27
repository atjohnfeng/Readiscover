import { connect } from 'react-redux';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    bookId: ownProps.bookId,
    reviews: ownProps.reviews
})

export default connect(mapStateToProps, null)(ReviewIndex);