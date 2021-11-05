import React from 'react';

class ShelvingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shelvingId: null,
            shelf: null,
            dropdown: false,
        }
    }

    componentDidMount() {
        let shelving;
        if (!!this.props.currentUser) {
            this.props.getBookshelf(this.props.currentUser).then(bookshelf => {
                shelving = Object.values(bookshelf.bookshelf).filter(shelving => {
                    return this.props.bookId == shelving.book_id
                })
                if (!shelving.length) {
                    return null;
                }
                this.setState({
                    shelvingId: shelving[0].id,
                    shelf: shelving[0].shelf
                })
            })
        }
    }

    updateShelving(status) {
        if (!this.props.currentUser) {
            this.props.history.push(`/login`)
            return
        }

        const shelving = {
            user_id: this.props.currentUser,
            book_id: this.props.bookId,
            shelf: status
        }

        if (!this.state.shelvingId) {
            this.props.createShelving(shelving)
                .then(shelving => {
                this.setState({
                    shelvingId: shelving.shelving.id
                })
            });
            this.setState({
                shelf: shelving.shelf,
                dropdown: false
            })
            if (this.state.dropdown) {
                this.handleDropdown();
            }
        } else {
            this.props.reshelveBook(shelving, this.state.shelvingId);
            this.setState({
                shelf: shelving.shelf,
                dropdown: false
            })
            if (this.state.dropdown) {
                this.handleDropdown();
            }        
        }
    }

    handleDropdown() {
        const dropdown = document.getElementById('dropdown-menu');
        if (!this.state.dropdown) {
            dropdown.className = "revealed-menu";
            this.setState({
                dropdown: true
            });
        } else {
            dropdown.className = "shelving-menu"
            this.setState({
                dropdown: false
            });
        }
    }

    renderDefault() {
        if (!this.state.shelf || !this.props.currentUser) {
            return (
                <span className="default-shelving" >
                    <span onClick={() => this.updateShelving('Want to Read')}>Want to Read</span>
                    <button className="fa fa-caret-down" onClick={() => this.handleDropdown()}></button>
                </span>
            )
        } else {
            return (
                <span className="default-shelving">
                    <span id="shelved-span" onClick={() => this.deleteShelving()}>{this.state.shelf}</span>
                    <button id="shelved-span" className="fa fa-caret-down" onClick={() => this.handleDropdown()}></button>
                </span>
            )
        }
    }

    deleteShelving() {
        if (!this.props.currentUser) {
            this.props.history.push(`/login`)
            return
        }

        this.props.deleteShelving(this.state.currentUser, this.state.shelvingId);
        this.setState({
            shelf: null,
            shelvingId: null
        })
    }

    componentWillUnmount() {
        this.props.reset();
    }

    render() {

        return (
            <div className="shelving-form">
                <div>
                    {this.renderDefault()}
                </div>
                <div className="shelving-menu" id="dropdown-menu">
                    <ul>
                        <li onClick={() => this.updateShelving('Read')}>Read</li>
                        <li onClick={() => this.updateShelving('Currently Reading')}>Currently Reading</li>
                        <li onClick={() => this.updateShelving('Want to Read')}>Want to Read</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShelvingForm;