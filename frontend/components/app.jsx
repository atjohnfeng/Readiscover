import React from 'react';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';

const App = () => {
    return (
        <div>
            <header>
                <h1>Readiscover</h1>
                <Route exact path="/" component={SplashContainer}/>
            </header>
        </div>
    )
}

export default App;