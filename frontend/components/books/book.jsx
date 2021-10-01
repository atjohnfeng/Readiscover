import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class Book extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBook(this.props.match.params.bookId)
    }

    render() {
        if (!this.props.book) {
            return null;
        }

        const { book } = this.props;

        return (
            <div className="book-show">
                <NavbarContainer />
                <div className="book-show-container">
                    <div className="book-show-book-cover">
                        <img className="book-show-book-cover"
                        src={book.cover_img_url}
                        alt={book.cover_img_url} />
                    </div>
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
        )
    }

}

export default Book;