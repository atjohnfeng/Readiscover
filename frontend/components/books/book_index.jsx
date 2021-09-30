import React from 'react';
import NavbarContainer from '../navbar/navbar_container';

class BookIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBooks;
    }

    render() {
        return (
            <div className="book-index">
                <NavbarContainer />
            </div>
        )
    }
    
}

export default BookIndex;