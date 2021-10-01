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

        return (
            <div className="book-show">
                <NavbarContainer />
                <div className="book-show-container">
                    {<img className="book-show-book-cover"
                        src={this.props.book.cover_img_url}
                        alt={this.props.book.cover_img_url} /> 
                        // console.log(this.props.book)
                        }
                </div>
            </div>
        )
    }

}

export default Book;