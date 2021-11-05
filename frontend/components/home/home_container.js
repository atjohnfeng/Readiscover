import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import { getBookshelf } from '../../actions/bookshelf_actions';
import Home from './home';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    books: state.entities.books,
    bookshelf: state.entities.bookshelf
});

const mapDispatchToProps = dispatch => ({
    getUser: user => dispatch(fetchUser(user)),
    getBookshelf: userId => dispatch(getBookshelf(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);