import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import { PagesContainer } from './Pages';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoggedIn: false,
      showSignIn: false
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    this.setState({ isLoggedIn: true, showSignIn: false });
    // You can perform additional logic here, such as authentication
    // or sending the username and password to a server.
  };

  toggleSignIn = () => {
    this.setState(prevState => ({
      showSignIn: !prevState.showSignIn
    }));
  };

  render() {
    const { username, password, isLoggedIn, showSignIn } = this.state;

    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/home">
          <img src={logo} alt="logo" className="nav-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5 body">
            <h3>The ShoeBox</h3>
          </li>
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link body">
              <PagesContainer>
                <span className="mr-2">MEN</span>
              </PagesContainer>
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link body">
              <PagesContainer>
                <span className="mr-2">WOMEN</span>
              </PagesContainer>
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link body">
              <PagesContainer>
                <span className="mr-2">KIDS</span>
              </PagesContainer>
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/products" className="nav-link body">
              <PagesContainer>
                <span className="mr-2">UNISEX</span>
              </PagesContainer>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i class="fas fa-shopping-cart" />
            </span>
          </ButtonContainer>
        </Link>
        <ButtonContainer>
          <span className="mr-2">
            <i class="fa fa-search" aria-hidden="true"></i>
          </span>
        </ButtonContainer>
        <span className="button" onClick={this.toggleSignIn}>
          {isLoggedIn ? 'Sign Out' : 'Sign In'}
        </span>
        {showSignIn && (
          <div className="modal-bg">
            <div id="modal" className="modal-center">
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
                <br/>
                <a id="forgot-link" href="#">
                  Forgot password?
                </a>
                <br/>
                <br/>
                <button className='btn btn-outline-danger text-uppercase mb-3 px-5' name="submit" id="submit" type="submit">
                  Sign in
                </button>
              </form>
            </div>
          </div>
        )}
        {isLoggedIn && (
          <div className="nav-item ml-5">
            <div>
              <h3>Welcome, {username}!</h3>
            </div>
          </div>
        )}
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  
  .modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  #modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
  }
  
  .modal-center {
    max-width: 500px;
  }
`;
