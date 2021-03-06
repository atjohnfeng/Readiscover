import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class BookIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
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
            <div>
                <div className="header-div"><NavbarContainer /></div>
                    <div className="book-index">
                        <div className="book-index-container">
                            {this.renderBooks()}
                        </div>
                    </div>
                <div className="footer-div"></div>
            </div>
        )
    }
    
}

export default BookIndex;