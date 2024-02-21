import React, { Component } from 'react';

// Child component to display user information
const UserInfo = ({ username }) => (
  <div>
    <h1>Welcome, {username}!</h1>
    <p>Thank you for logging in.</p>
  </div>
);

// Child component to display a login form
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username === 'admin' && password === 'admin123') {
      this.props.onLogin(username);
    } else {
      alert('Thats the wrong password bro');
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div> 
            <h1>
                Simple login form with conditional rendering
            </h1>
            <p>
                Username: admin
            </p>
            <p>
                Password: admin123
            </p>
        </div>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    );
  }
}

class AdvancedConditionalRenderingWithInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: '',
    };
  }

  handleLogin = (username) => {
    this.setState({ loggedIn: true, username });
  };

  render() {
    const { loggedIn, username } = this.state;

    return (
      <div>
        {loggedIn ? (
          <UserInfo username={username} />
        ) : (
          <LoginForm onLogin={this.handleLogin} />
        )}
      </div>
    );
  }
}

export default AdvancedConditionalRenderingWithInput;
