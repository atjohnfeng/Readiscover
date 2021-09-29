import { connect } from 'react-redux';
import { login, reset } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => ({
    errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);