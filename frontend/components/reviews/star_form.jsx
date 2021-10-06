import React from 'react';

class StarForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rating: '',
            book_id: this.props.bookId,
            user_id: this.props.currentUser,
            formType: 'create'
        }
        this.updateRating = this.updateRating.bind(this);
    }

    componentDidMount() {
        // let review;
        // if (!this.props.getReview(this.props.bookId, this.props.currentUser)) {
        //     return null;
        // } else {
        //     review = this.props.getReview(this.props.bookId, this.props.currentUser)
        // }
        // if (!!review) {
        //     this.setState({
        //         title: review.title,
        //         body: review.body,
        //         rating: review.rating,
        //         // formType: 'edit',
        //     })
        // } else {
        //     this.setState({
        //         // formType: 'create',
        //     })
        // }
        // console.log(this.state.bookId)
    }

    updateRating(value) {
        const review = {
            rating: value,
            book_id: this.props.bookId,
            user_id: this.props.currentUser
        }
        debugger
        this.props.createReview(review);
    }


    render() {
        if (!this.props.bookId) {
            return null;
        }

        return (
            <div className="star-rating-form-container">
                <form className="star-rating-form">
                    <label>Rating
                        <input type="radio" onChange={() => this.updateRating(1)}
                            name="rating" value={1} className="rating-button">
                        </input>
                        <input type="radio" onChange={() => this.updateRating(2)}
                            name="rating" value={2} className="rating-button">
                        </input>
                        <input type="radio" onChange={() => this.updateRating(3)}
                            name="rating" value={3} className="rating-button">
                        </input>
                        <input type="radio" onChange={() => this.update(4)}
                            name="rating" value={4} className="rating-button">
                        </input>
                        <input type="radio" onChange={() => this.update(5)}
                            name="rating" value={5} className="rating-button">
                        </input>
                    </label>
                </form>
            </div>
        )
    }
}

export default StarForm;