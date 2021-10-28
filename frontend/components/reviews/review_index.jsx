import React from 'react';

class ReviewIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getReviews(this.props.bookId);
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(this.props.reviews) !== JSON.stringify(prevProps.reviews)) {
            this.props.getReviews(this.props.bookId);
        }
    }

    render() {
        let reviews;

        if (Object.values(this.props.reviews).length === 0) {
            return null;
        } else if (Object.values(this.props.reviews).length > 0) {
            reviews = Object.values(this.props.reviews);
            if (reviews[0].book_id != this.props.bookId) {
                return null;
            }
        }

        return (
            <div className="book-show-reviews">
                <h1>Community Reviews</h1>
                <ul className="book-show-reviews">
                    {reviews.map((review, i) => {
                        if (!review || !review.user_id || !review.rating) {
                            return null;
                        }
                        return <li key={`review-${i}`}>
                            <h2>Reviewed by: {review.user_id}</h2>
                            <h2>Rating: {review.rating}</h2>
                        </li>
                    })}
                </ul>  
            </div>
        )
    }
}

export default ReviewIndex;