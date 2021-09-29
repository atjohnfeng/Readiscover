import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            // errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    update(field) { 
        return e => {
            this.setState( { [field]: e.target.value } )
        }
    }

    render() {
        return (
            <div className="form">
                <h1>Signup &amp; Readiscover</h1>
                <form className="splash-sign-up-form"
                    onSubmit={this.handleSubmit}>
                    <label>Username: 
                        <input type="text" 
                            value={this.state.username}
                            placeholder="Username"
                            onChange={this.update("username")} 
                            required/>
                    </label>
                    <label>E-mail Address: 
                        <input type="text" 
                        value={this.state.email} 
                        placeholder="you@yours.com"
                        onChange={this.update("email")} 
                        required/>
                    </label>
                    <label>
                        Password:
                        <input type="password"
                        value={this.state.password}
                        onChange={this.update("password")}
                        pattern=".{6,}" 
                        title="Password must be six or more characters."
                        required/>
                    </label>
                    <button>Sign up</button>
                </form>
                <p className="form-footer">Already a member? <Link to="/login">Sign in</Link></p>
            </div>
        )
    }
}

export default SignupForm;