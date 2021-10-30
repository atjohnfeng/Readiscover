import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import StarContainer from '../reviews/star_container';
import { Link } from 'react-router-dom';

class Book extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getBook(this.props.match.params.bookId);
        this.props.getReviews(this.props.match.params.bookId);
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.reviews) 
            !== JSON.stringify(prevProps.reviews)) {
            this.props.getReviews(this.props.match.params.bookId);
        }
    }
    
    renderStarContainer() {
        if (!this.props.currentUser) {
            return (
                <div className="star-rating-container">
                    <form className="star-rating-form">
                        <Link to="/login"><span className="fa fa-star" /></Link>
                        <Link to="/login"><span className="fa fa-star" /></Link>
                        <Link to="/login"><span className="fa fa-star" /></Link>
                        <Link to="/login"><span className="fa fa-star" /></Link>
                        <Link to="/login"><span className="fa fa-star" /></Link>
                    </form>
                    <h2>Rate this book</h2>
                </div>
            )
        } else {
            return (
                <div className="star-rating-container">
                    <StarContainer bookId={this.props.match.params.bookId} />
                    <h2>Rate this book</h2>
                </div>
            )
        }
    }

    renderReviews() {
        const reviews = Object.values(this.props.reviews);
        if (reviews.length > 0) {
            return (
                <ul className="book-show-reviews">
                    {reviews.slice(0).reverse().map((review, i) => {
                        if (!review || !review.author) {
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
                                    <div>{this.renderBody(review)}</div>
                                </div>
                            </li>
                        )
                    })}
                </ul>  
            )
        }
    }

    renderStars(rating) {
       if (rating > 0) {
           return (
                <div>
                    <span className={1 <= rating ? "fa fa-star checked" 
                        : "fa fa-star" } />
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
        return months[month-1] + ' ' + day + ', ' + year + ' UTC';
    }

    renderBody(review) {
        if (!review.spoiler_flag) {
            return review.body ? review.body : '' 
        } else {
            return (
                <div className={`hidden-review ${review.id}`}>
                    <h6>This entire review has been hidden because of spoilers.
                        </h6>
                    <p onClick={() => this.showReview(review)}>Show full review
                        </p>
                </div>
                )
        }
    }

    showReview(review) {
        // insert dom manipulation here
    }

    componentWillUnmount() {
        this.props.reset();
    }

    renderReviewLink() {
        if (this.props.currentUser) {
            return (
                <div className="divider">
                    <Link to={`${this.props.bookId}/review`}>Review this Book
                    </Link>
                </div>
            )
        } else {
            return (
                <div className="divider">
                    <Link to={`/login`}>Log in to Add a Review</Link>
                </div>
            )
        }
    }

    render() {
        if (!this.props.book) {
            return null;
        }

        const { book } = this.props;

        return (
            <div>
                <div className="header-div"><NavbarContainer /></div>
                    <div className="book-show">
                        <div className="book-show-left">
                            <div className="book-show-book-cover">
                                <img className="book-show-book-cover"
                                    src={book.cover_img_url}
                                    alt={book.title} />
                            </div>
                            {this.renderStarContainer()}
                        </div>
                        <div className="book-show-right">
                            <div className="book-show-book-info-top">
                                <ul className="book-info-list-top">
                                    <li className="book-title">
                                        {book.title}
                                    </li>
                                    <li className="book-author">
                                        {book.author}
                                    </li>
                                </ul>
                            </div>
                            <div className="book-show-book-description">
                                {book.description}
                            </div>
                            <div className="book-show-book-info-bottom">
                                <ul className="book-info-list-bottom">
                                    <li className="page-count">
                                        {book.page_count} pages
                                    </li>
                                    <li className="book-publish-date">
                                        Published {book.published_date}
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {this.renderReviewLink()}
                            </div>
                            <div className="reviews-container">
                                <h1>Community Reviews</h1>
                                {this.renderReviews()}
                            </div>
                        </div>
                    </div>
                <div className="footer-div"></div>
            </div>
        )
    }

}

export default Book;