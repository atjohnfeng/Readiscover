import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getUser(Object.values(this.props.currentUser)[0]);
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
                                    <h1>News &amp; Resources</h1><br />
                                    <article>
                                        <Link to="/articleone"
                                            className="article-link">
                                            <h5>Five Books You Should Read Next</h5>
                                            <img src={window.articleOne} 
                                                alt="five-books"/>
                                        </Link>
                                        <h6>posted by John Feng</h6>
                                    </article>
                                    <article>
                                        <a href="https://librarytechnology.org/libraries/" 
                                            className="article-link"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <h5>Find a Library Near You</h5>
                                            <img src={window.libraryPhoto}
                                                alt="article-one"/>
                                            <h6>librarytechnology.org</h6>
                                        </a>
                                    </article>
                                    <article className="last">
                                        <a href="https://www.indiebound.org/indie-store-finder" 
                                            className="article-link"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            <h5>Support a Local Bookstore</h5>
                                            <img src={window.indieBookstore}
                                                alt="article-one" />
                                            <h6>indiebound.org</h6>
                                        </a>
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