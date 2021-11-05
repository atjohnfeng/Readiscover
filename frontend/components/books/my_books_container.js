import { connect } from 'react-redux';
import { getBookshelf } from '../../actions/bookshelf_actions';
import MyBooks from './my_books';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    shelvings: state.entities.bookshelf
});

const mapDispatchToProps = dispatch => ({
    getBookshelf: userId => dispatch(getBookshelf(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);