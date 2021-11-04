import React from 'react';

class ShelvingForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shelvingId: null,
            shelf: null,
            dropdown: false
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
        if (!this.state.shelf) {
            return (
                <span className="default-shelving" >
                    <span>Want to Read</span>
                    <button className="fa fa-caret-down" onClick={() => this.handleDropdown()}></button>
                </span>
            )
        } else {
            return (
                <span className="default-shelving" onClick={() => this.handleDropdown()}>
                    <span>{this.state.shelf}</span>
                    <button className="fa fa-caret-down"></button>
                </span>
            )
        }
    }

    componentWillUnmount() {
        this.props.reset();
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
                <div className="shelving-menu" id="dropdown-menu">
                    <ul>
                        <li>Read</li>
                        <li>Current Reading</li>
                        <li>Want to Read</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ShelvingForm;