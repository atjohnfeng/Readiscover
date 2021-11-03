import { connect } from 'react-redux';
import { createShelving, reshelveBook, getShelving, resetShelving } from '../../util/bookshelf_api_util';
import ShelvingForm from './shelving_form';

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.session.id,
    bookId: ownProps.match.params.bookId,
});

const mapDispatchToProps = dispatch => ({
    createShelving: shelving => dispatch(createShelving(shelving)),
    reshelveBook: (userId, shelvingId) => dispatch(reshelveBook(userId, shelvingId)),
    getShelving: (userId, shelvingId) => dispatch(getShelving(userId, shelvingId)),
    reset: () => dispatch(resetShelving())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShelvingForm);