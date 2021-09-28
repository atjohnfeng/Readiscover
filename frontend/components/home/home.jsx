import React from 'react';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.props.logout}>Sign Out</button>
            </div>
        )
    }
}

export default Home;