import React, { Component } from "react";
import { connect } from "react-redux";
import {
  login,
  register
} from "../Redux/Actions.jsx";
import { Switch, Route, Link } from "react-router";

export class Login extends Component {
  state = {
    isLoggedIn: true 
  }
  render() {
    return (
      <React.Fragment>
        <header className="loginheader">Login</header>
        
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
          <button className="submit" onClick={this.props.test} >Submit</button>
        
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
