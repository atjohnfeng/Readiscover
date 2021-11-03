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
        const shelving = {
            userId,
            bookId,
            shelvingId,
            shelf: status
        }
    }

    renderDefault() {
        if (!this.state.shelf) {
            return (
                <span>
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
            <div>
                <div>
                    {this.renderDefault()}
                </div>
                <div>
                    <span>Read</span>
                    <span>Current Reading</span>
                    <span>Want to Read</span>
                </div>
            </div>
        )
    }
}

export default ShelvingForm;