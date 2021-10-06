import React from 'react';

class StarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: null,
            rating: null,
            bookId: this.props.bookId,
            userId: this.props.currentUser
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const review = this.props.getReview(this.props.bookId, this.props.currentUser)
        if (!!review) {
            this.setState({
                review: review,
                rating: review.rating
            })
        }
    }

    update(value) {
        return e => {
            this.setState({
                rating: value
            });
            this.handleSubmit();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let rating;
        if (!this.state.review) {
            rating = Object.assign({}, this.state.rating, this.state.userId, this.state.bookId)
        }
        this.props.createReview(rating);
    }

    render() {
        return (
            <div className="star-rating-form-container">
                <form className="star-rating-form">
                    <input type="radio" onClick={this.update(1)}
                        value="1" className="rating-button">
                    </input>
                    <input type="radio" onClick={this.update(2)}
                        value="2" className="rating-button">
                    </input>
                    <input type="radio" onClick={this.update(3)}
                        value="3" className="rating-button">
                    </input>
                    <input type="radio" onClick={this.update(4)}
                        value="4" className="rating-button">
                    </input>
                    <input type="radio" onClick={this.update(5)}
                        value="5" className="rating-button">
                    </input>
                </form>
            </div>
        )
    }
}

export default StarForm;