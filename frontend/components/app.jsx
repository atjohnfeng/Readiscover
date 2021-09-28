import React from 'react';
import { AuthRoute, ProtRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import NotFound from './home/not_found';

const App = () => {
    return (
        <div>
            <header>
                <h1>Readiscover</h1>
                <Switch>
                    <AuthRoute exact path="/" component={SplashContainer}/>
                    <ProtRoute exact path="/home" component={HomeContainer}/>
                    <Route path="/*" component={NotFound}/>
                </Switch>
            </header>
        </div>
    )
}

export default App;