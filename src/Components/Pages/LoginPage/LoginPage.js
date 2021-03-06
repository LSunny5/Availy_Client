import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.css';

export class LoginPage extends Component {
  render() {
    return (
      <div id="logInContent">
        <form id="accountForm">
          <h3 className="formHeader">Log into your account!</h3>

          <section className="loginInfo">
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input id="password" type="password" name="password" />
            </div>
          </section>

          <div className="formAccess">
            <div>
              <label htmlFor="keepID">Keep me signed in</label>
              <input id="keepID" type="checkbox" name="keepID" />
            </div>
            <a href="#">Reset Password</a>
          </div>

          <div className="formButtons">
            <button>Login</button>
            <hr />
            <button className="fbButton">Continue with Facebook</button>
            <button className="googButton">Continue with Google</button>
          </div>
          <p className="altAcct">No account yet? <Link to="/signup">Sign Up!</Link></p>
        </form>
      </div>
    )
  }
}

export default LoginPage
