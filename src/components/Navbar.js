import React, { Component } from 'react';
class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>
              <li className="logo">AI Based Online Lawyer</li>
          </ul>
          <ul>
              <li><a href="/AboutUs">About</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/Register">Sign up</a></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;


