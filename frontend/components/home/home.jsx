import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUser(Object.values(this.props.currentUser)[0]);
        console.log(Object.values(this.props.currentUser)[0])
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
        const books = this.props.books;
        if (reviews.length > 0) {
            return (
                <ul className="book-show-reviews">
                    {reviews.slice(0).reverse().map((review, i) => {
                        if (!review) {
                            return null;
                        }
                        const book = books[review.book_id];
                        let cover;
                        let title;
                        if (book) {
                            title = book.title;
                            cover = book.cover_img_url;
                        }
                        return (
                            <li key={`review-${i}`}
                                className={`user-review review-${review.id}`}
                                onClick={() => this.redirect(book.id)}>
                                <div className="book-info">
                                    <img src={cover}
                                        alt="profile-default-nav"
                                        className="review-cover" />
                                </div>
                                <div className="review-info">
                                    <h2>{title}</h2>
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
                    You have no reviews!<br />
                    <Link to="/books">Find your next read.</Link>
                </div>
            )
        }
    }

    redirect(book) {
        this.props.history.push(`/books/${book}`)
    }

    render() {
        return (
            <div>
                <div className="header-div"><NavbarContainer /></div>
                    <div className="home">
                        <div className="home-content-container">
                            <div className="home-left">
                                <div className="currently-reading">
                                    <h1>Currently Reading</h1>
                                    <br />
                                    Bookshelves Under Construction
                                </div>
                            </div>
                            <div className="users-reviews">
                                <h1>Your Recent Reviews &amp; Ratings</h1>
                                {this.renderReviews()}
                            </div>
                            <div className="home-right">
                                <div className="articles">
                                    <h1>News &amp; Interviews</h1><br />
                                    <article>
                                        <Link
                                            className="article-link">
                                            Top 5 Books to Add to Your List
                                        </Link>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="footer-div"></div>
            </div>
        )
    }
}

export default Home;