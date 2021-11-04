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

    componentDidMount() {
        if (!!this.props.currentUser) {
            this.props.getBookshelf(this.props.currentUser)
        }
    }

    updateShelving(status) {
        if (!this.props.currentUser) {
            this.props.history.push(`/login`)
        }

        // const shelving = {
        //     userId: this.props.currentUser,
        //     bookId,
        //     shelvingId,
        //     shelf: status
        // }
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
                    <span onClick={() => this.updateShelving('Want to Read')}>Want to Read</span>
                    <button className="fa fa-caret-down" onClick={() => this.handleDropdown()}></button>
                </span>
            )
        } else {
            return (
                <span className="default-shelving" onClick={() => this.handleDropdown()}>
                    <span onClick={() => this.updateShelving(this.state.shelf)}>{this.state.shelf}</span>
                    <button className="fa fa-caret-down"></button>
                </span>
            )
        }
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