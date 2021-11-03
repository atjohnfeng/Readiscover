import React from 'react';

class ShelvingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shelvingId: null,
            shelf: null
        }
    }

    componentDidUpdate() {

    }

    updateShelving(status) {
        if (!this.props.currentUser) {

        }

        const shelving = {
            userId,
            bookId,
            shelvingId,
            shelf: status
        }
    }

    handleDropdown() {
        const dropdown = document.getElementsByClassName('shelving-menu');
        const revealed = document.getElementsByClassName('revealed-menu');

        if (!revealed) {
            
        }
    }

    renderDefault() {
        if (!this.state.shelf) {
            return (
                <span className="default-shelving" onClick={() => this.handleDropdown()}>
                    Want to Read
                    <button class="fa fa-caret-down"></button>
                </span>
            )
        }
    }

    render() {
        if (!this.props.currentUser) {
            return null;
        }

        return (
            <div className="shelving-form">
                <div>
                    {this.renderDefault()}
                </div>
                <div className="shelving-menu">
                    <span>Read</span>
                    <span>Current Reading</span>
                    <span>Want to Read</span>
                </div>
            </div>
        )
    }
}

export default ShelvingForm;