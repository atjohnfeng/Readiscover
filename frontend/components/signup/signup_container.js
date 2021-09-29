import { connect } from 'react-redux';
import { signup, reset } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = state => ({
    errors: state.errors.sessionErrors
})

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user)),
    reset: () => dispatch(reset())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);