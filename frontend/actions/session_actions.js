import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
// export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

// const receiveSessionErrors = errors => {
//     return {
//         type: RECEIVE_SESSION_ERRORS,
//         errors
//     }
// }

export const signup = user => dispatch => (
    SessionApiUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    // ), errors => (
    //     dispatch(receiveSessionErrors(errors.responseJSON))
    ))
)

export const login = user => dispatch => (
    SessionApiUtil.login(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), errors => (
        dispatch(receiveSessionErrors(errors.responseJSON))
    ))
)

export const logout = () => dispatch => (
    SessionApiUtil.logout().then(payload => (
        dispatch(logoutCurrentUser())
    ))
)