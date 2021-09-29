import React from 'react';

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

    render() {
        return (
            <div>
                <label>Sign in to Readiscover</label>
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
            </div>
        )
    }
}

export default LoginForm;