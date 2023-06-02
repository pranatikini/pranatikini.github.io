import React, { Component } from 'react';
import video from './shoes 2.mp4';
import './Video.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.setState({ isLoggedIn: true });
    // You can perform additional logic here, such as authentication
    // or sending the username and password to a server.
  };

  render() {
    const { username, password, isLoggedIn } = this.state;

    return (
      <React.Fragment>
        <span className="button" onClick={() => this.setState({ isLoggedIn: false })}>
          {isLoggedIn ? 'Sign Out' : 'Sign In'}
        </span>
        {isLoggedIn ? (
          <div className="modal-bg">
            <div id="modal">
              <h3>Welcome, {username}!</h3>
              <p>Username: {username}</p>
              <p>Password: {password}</p>
            </div>
          </div>
        ) : (
          <div className="modal-bg">
            <div id="modal">
              <form onSubmit={this.handleSubmit}>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleInputChange}
                  required
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleInputChange}
                  required
                />
                <a id="forgot-link" href="#">
                  Forgot password?
                </a>
                <button name="submit" id="submit" type="submit">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
