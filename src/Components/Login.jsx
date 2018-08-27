import React, { Component } from "react";
import { connect } from "react-redux";
import {
  login,
  register
} from "../Redux/Actions.jsx";
import { Switch, Route, Link } from "react-router-dom";

export class Auth extends Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <React.Fragment>
        <header className="authheader">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </header>
        <section className="authmain">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </section>
      </React.Fragment>
    );
  }
}

export class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="loginheader">Login</header>
        <form className="loginform">
          <input
            className="username"
            placeholder="Username"
            type="text"
            name="username"
          />
          <input
            className="password"
            placeholder="Password"
            type="password"
            name="password"
          />
          <button className="submit" onClick={this.props.login} >Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="registerheader">Register</header>
        <form className="registerform">
          <input
            className="displayName"
            placeholder="Display Name"
            type="text"
            name="displayName"
          />
          <input
            className="username"
            placeholder="Username"
            type="text"
            name="username"
          />
          <input
            className="password"
            placeholder="Password"
            type="password"
            name="password"
          />
          <button className="submit" onClick={this.props.register}>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
