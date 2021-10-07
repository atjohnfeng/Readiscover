import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import StarContainer from '../reviews/star_container';
import { Link } from 'react-router-dom';

class Book extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBook(this.props.match.params.bookId)
    }

    renderStarContainer() {
        if (!this.props.currentUser) {
            return (
                <div className="star-rating-container">
                    <form className="star-rating-form">
                        <Link to="/login"><span class="fa fa-star" /></Link>
                        <Link to="/login"><span class="fa fa-star" /></Link>
                        <Link to="/login"><span class="fa fa-star" /></Link>
                        <Link to="/login"><span class="fa fa-star" /></Link>
                        <Link to="/login"><span class="fa fa-star" /></Link>
                    </form>
                    <h2>Rate this book</h2>
                </div>
            )
        } else {
            return (
                <div className="star-rating-container">
                    <StarContainer bookId={this.props.book.id} />
                    <h2>Rate this book</h2>
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
                                    alt={book.cover_img_url} />
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
                        </div>
                    </div>
                <div className="footer-div"></div>
            </div>
        )
    }

}

export default Book;