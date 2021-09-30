import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    loginDemoUser() {
        const user = {
            username: 'demo',
            password: 'demolicious'
        }
        this.props.login(user);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map(error => <li>{error}</li>)}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <div className="logo">
                    <Link to="/">
                        <img className="logo"
                            src={window.logoURL}
                            alt="readiscover-logo-image" />
                    </Link>
                </div>
                <div className="form-container">
                    <div className="form">
                        <h1>Sign in to Readiscover</h1>
                        <form className="splash-log-in-form"
                            onSubmit={this.handleSubmit}>
                            <label>Username:
                                <input type="text"
                                    value={this.state.username}
                                    placeholder="Username"
                                    onChange={this.update("username")}
                                    required />
                            </label>
                            <label>
                                Password:
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update("password")}
                                    required />
                            </label>
                            <button>Sign in</button>
                        </form>
                        <button className="demo-button" onClick={this.loginDemoUser}>Sign in with Demo User</button>
                        <p className="form-footer">Not a member? <Link to="/signup">Sign up</Link></p>
                    </div>
                    {this.renderErrors()}
                </div>
                {/* <div className="form-footer">
                </div> */}
            </div>
        )
    }

    componentWillUnmount() {
        this.props.reset();
    }
}

export default LoginForm;