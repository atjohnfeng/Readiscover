import { connect } from 'react-redux';
import { createShelving, reshelveBook, getShelving, reset } from '../../actions/bookshelf_actions';
import ShelvingForm from './shelving_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    bookId: ownProps.bookId
});

const mapDispatchToProps = dispatch => ({
    createShelving: shelving => dispatch(createShelving(shelving)),
    reshelveBook: (userId, shelvingId) => dispatch(reshelveBook(userId, shelvingId)),
    getShelving: (userId, shelvingId) => dispatch(getShelving(userId, shelvingId)),
    reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShelvingForm);