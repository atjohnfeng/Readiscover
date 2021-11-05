import { connect } from 'react-redux';
import { createShelving, reshelveBook, getBookshelf, reset, deleteShelving } from '../../actions/bookshelf_actions';
import ShelvingForm from './shelving_form';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    bookId: ownProps.bookId,
    bookshelf: state.entities.bookshelf,
});

const mapDispatchToProps = dispatch => ({
    createShelving: shelving => dispatch(createShelving(shelving)),
    reshelveBook: (userId, shelvingId) => dispatch(reshelveBook(userId, shelvingId)),
    getBookshelf: (userId) => dispatch(getBookshelf(userId)),
    reset: () => dispatch(reset()),
    deleteShelving: (userId, shelvingId) => dispatch(deleteShelving(userId, shelvingId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShelvingForm));