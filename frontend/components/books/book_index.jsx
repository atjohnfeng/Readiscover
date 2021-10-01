import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

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
                    <img className="book-index-cover"
                        src={`${book.coverImgUrl}`} 
                        alt={`book-${i}-cover`} />
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