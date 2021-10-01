import React from 'react';
import { AuthRoute, ProtRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import NotFound from './home/not_found';
import SignupContainer from './signup/signup_container';
import LoginContainer from './login/login_container';
import BookIndexContainer from './books/book_index_container';
import BookContainer from './books/book_container';

const App = () => {
    return (
        <div>
            <header>
                <Switch>
                    <AuthRoute exact path="/" component={SplashContainer} />
                    <AuthRoute exact path="/signup" component={SignupContainer} />
                    <AuthRoute exact path="/login" component={LoginContainer} />
                    <ProtRoute exact path="/home" component={HomeContainer} />
                    <Route exact path="/books" component={BookIndexContainer} />
                    <Route path="/books/:bookId" component={BookContainer} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </header>
        </div>
    )
}

export default App;