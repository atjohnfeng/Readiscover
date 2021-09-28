import React from 'react';
import { AuthRoute, ProtRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';

const App = () => {
    return (
        <div>
            <header>
                <h1>Readiscover</h1>
                <AuthRoute exact path="/" component={SplashContainer}/>
                <ProtRoute exact path="/home" component={HomeContainer}/>
            </header>
        </div>
    )
}

export default App;