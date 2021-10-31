import React from 'react';
import { AuthRoute, ProtRoute } from '../util/route_util';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import HomeContainer from './home/home_container';
import NotFound from './home/not_found';
import SignupContainer from './signup/signup_container';
import LoginContainer from './login/login_container';
import BookIndexContainer from './books/book_index_container';
import BookShowContainer from './books/book_show_container';
import ReviewFormContainer from './reviews/review_form_container';
import ArticleOne from './articles/article_one';

const App = () => {
    return (
        <div>
            <header>
                <Switch>
                    <AuthRoute exact path="/" component={SplashContainer} />
                    <AuthRoute exact path="/signup" component={SignupContainer} />
                    <AuthRoute exact path="/login" component={LoginContainer} />
                    <ProtRoute exact path="/home" component={HomeContainer} />
                    <ProtRoute path="/books/:bookId/review" component={ReviewFormContainer} />
                    <Route exact path="/books" component={BookIndexContainer} />
                    <Route path="/books/:bookId" component={BookShowContainer} />
                    <Route path="/articleone" component={ArticleOne} />
                    <Route path="/*" component={NotFound} />
                </Switch>
            </header>
        </div>
    )
}

export default App;