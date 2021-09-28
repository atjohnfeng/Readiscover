import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
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
                <p>Already a member? Log in.</p>
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
            </div>
        )
    }
}

export default LoginForm;