import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class BookIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBooks();
    }

    renderBooks() {
        return (
            <ul className="book-index-list">
                {this.props.books.map((book, i) =>
                <li key={`book-${i}`}>
                    <Link to={`/books/${book.id}`}>
                        <img className="book-index-book-cover"
                            src={book.cover_img_url} 
                            alt={book.cover_img_url} />
                    </Link>
                </li>)}
            </ul>
        )
    }

    render() {
        return (
            <div className="book-index">
                <NavbarContainer />
                <div className="book-index-container">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }
    
}

export default BookIndex;