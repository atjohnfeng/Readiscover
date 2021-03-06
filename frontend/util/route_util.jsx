import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from "react-router";

const Auth = ({component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn? <Component {...props} /> : <Redirect to="/home" /> 
        } />
);

const Protected = ({component: Component, path, loggedIn, exact}) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        } />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};

export const AuthRoute = withRouter(
    connect(mapStateToProps)(Auth)
);

export const ProtRoute = withRouter(
    connect(mapStateToProps)(Protected)
);