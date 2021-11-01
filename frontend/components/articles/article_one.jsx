import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class ArticleOne extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            book_one: null,
            book_two: null,
            book_three: null,
            book_four: null,
            book_five: null
        }
    }

    componentDidMount() {
        console.log(this.props.books)
    }

    render() {
        return (
            <div>
                <div className="header-div">
                    <NavbarContainer />
                </div>
                <div className="article-one">
                    {/* <h1>Five Books You Should Read Next</h1>
                    <h2>Posted by John Feng on October 31, 2021</h2>
                    <img src="" alt="john-profile"/> */}

                    <article>
                        {/* Little Fires Everywhere by Celeste Ng */}
                    </article>

                    <article>

                    </article>

                    <article>

                    </article>

                    <article>

                    </article>

                    <article>

                    </article>
                </div>
                <div className="footer-div"></div>
            </div>
        )
    }
}

export default ArticleOne;
