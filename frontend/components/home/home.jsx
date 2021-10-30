import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Redirect } from 'react-router-dom';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    renderStars(rating) {
        if (rating > 0) {
            return (
                <div>
                    <span className={1 <= rating ? "fa fa-star checked"
                        : "fa fa-star"} />
                    <span className={2 <= rating ? "fa fa-star checked"
                        : "fa fa-star"} />
                    <span className={3 <= rating ? "fa fa-star checked"
                        : "fa fa-star"} />
                    <span className={4 <= rating ? "fa fa-star checked"
                        : "fa fa-star"} />
                    <span className={5 <= rating ? "fa fa-star checked"
                        : "fa fa-star"} />
                </div>
            )
        }
    }

    renderDate(date) {
        let months = ['January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        const year = date.slice(0, 4);
        const month = date.slice(5, 7);
        const day = date.slice(8, 10);
        return months[month - 1] + ' ' + day + ', ' + year + ' UTC';
    }

    renderReviews() {
        const reviews = Object.values(this.props.currentUser.users_reviews);
        console.log(reviews)
        if (reviews.length > 0) {
            return (
                <ul className="book-show-reviews">
                    {reviews.slice(0).reverse().map((review, i) => {
                        if (!review) {
                            return null;
                        }
                        return (
                            <li key={`review-${i}`}
                                className={`user-review review-${review.id}`}>
                                <div className="user-info">
                                    <img src={window.navProfileDefault}
                                        alt="profile-default-nav"
                                        className="review-icon" />
                                    <h2>{review.author}</h2>
                                    <h3>{review.review_count} reviews</h3>
                                </div>
                                <div className="review-info">
                                    <div className="rating-info">
                                        <h4>{this.renderStars(review.rating)}</h4>
                                        {review.created_at === review.updated_at ?
                                            this.renderDate(review.created_at) :
                                            'Edited '
                                            + this.renderDate(review.updated_at)}
                                    </div>
                                    <div>{review.body}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )
        } else {
            return (
                <div className="no-reviews">
                    There are no reviews yet for this book.<br />
                    {!this.props.currentUser ? <Link to="/signup">Sign up and write your own!</Link> : <Link to={`${this.props.bookId}/review`}>Write your own!</Link>}
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="header-div"><NavbarContainer /></div>
                    <div className="home">
                        <div className="home-content-container">
                            <div className="home-left">

                            </div>
                            <div className="users-reviews">
                                <h1>Your Recent Activity</h1>
                                {this.renderReviews()}
                            </div>
                            <div className="home-right">

                            </div>
                        </div>
                    </div>
                <div className="footer-div"></div>
            </div>
        )
    }
}

export default Home;