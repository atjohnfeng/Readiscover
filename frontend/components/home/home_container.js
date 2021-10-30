import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import Home from './home';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    books: state.entities.books
});

const mapDispatchToProps = dispatch => ({
    getUser: user => dispatch(fetchUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);