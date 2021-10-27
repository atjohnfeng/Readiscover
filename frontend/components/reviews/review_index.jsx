import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let reviews;

        if (!this.props.reviews) {
            return null;
        } else {
            reviews = Object.values(this.props.reviews);
        }

        return (
            <ul className="book-show-reviews">
                {reviews.map((review, i) => {
                    if (!review) {
                        return null;
                    }
                    return <li key={`review-${i}`}>
                        <h2>Reviewed by: {review.user_id}</h2>
                        <h2>Rating: {review.rating}</h2>
                    </li>
                })}
            </ul>        
        )
    }
}

export default ReviewIndex;