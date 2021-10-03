import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getBooks } from '../../actions/book_actions';
import Navbar from './navbar';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    getBooks: () => dispatch(getBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);