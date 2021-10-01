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
                    <div className="book-show-book-info">

                    </div>
                    <div className="book-show-book-description">

                    </div>
                </div>
            </div>
        )
    }

}

export default Book;