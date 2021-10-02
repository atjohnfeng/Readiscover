import React from 'react';
import NavbarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';

class NotFound extends React.Component {

    render() {
        return (
            <div>
                <div className="header-div">
                    <NavbarContainer />
                </div>
                    <div className="not-found">
                        <div className="nf-poem">
                            <div className="nf-header">
                                Sorry, you've reached the end of the sidewalk.
                            </div>
                            <br /><br />
                            <div className="nf-quote">
                                Yes we'll walk with a walk that is measured and slow,
                                <br />
                                And we'll go where the chalk-white arrows go,
                                <br />
                                For the children, they mark, and the children, they know
                                <br />
                                The place where the sidewalk ends.
                            </div>
                            <br /><br />
                            <div className="nf-author">
                                -- Shel Silverstein, <i>Where the Sidewalk Ends</i>
                            </div>
                            <br /><br />
                            <button>
                                <Link className="nf-button"
                                    to="/home">Back to the Readiscover homepage
                                </Link>
                            </button>
                        </div>
                        <div className="nf-images">
                            <img className="shel"
                                src="https://s.gr-assets.com/assets/error_pages/not_found/sidewalk_author-3fea6f0f59ee4acb7b4ec42a1a9b2996.png"
                                alt="shel" />
                            <img className="giving-tree"
                                src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1168052448l/30119._SX318_.jpg"
                                alt="giving-tree-cover" />
                        </div>
                    </div>
                <div className="footer-div"></div>
            </div>
        )
    }
}

export default NotFound;
