import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <div className="logo">
                        <Link to="/">
                            <img className="logo"
                                src={window.logoURL}
                                alt="readiscover-logo-image" />
                        </Link>
                    </div>
                </div>
                <button onClick={this.props.logout}>Sign Out</button>
            </div>
        )
    }
}

export default Home;