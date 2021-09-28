import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import Splash from './splash';

const mapStateToProps = state => ({
    currentUser: state.session.id
})

export default connect(mapStateToProps)(Splash);