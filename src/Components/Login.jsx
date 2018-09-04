import React, { Component } from "react";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleSubmit = () => {
    this.props.whatever(this.state.username, this.state.password)
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <header className="loginheader">Login</header>
        <input
          className="username"
          placeholder="Username"
          type="text"
          value={this.state.username}
          name="username"
          onChange={this.updateUsername}
        />
        <input
          className="password"
          placeholder="Password"
          type="password"
          value={this.state.password}
          name="password"
          onChange={this.updatePassword}
        />
        <button className="submit" onClick={this.handleSubmit} >Submit</button>
      </React.Fragment>
    );
  }
}

export class Register extends Component {
  state = {
    displayName: "",
    username: "",
    password: ""
  }

  handleSubmit = () => {
    this.props.test(this.state.displayName, this.state.username, this.state.password)
  }

  updateDisplayName = (event) => {
    this.setState({
      displayName: event.target.value
    })
  }

  updateUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  updatePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <header className="registerheader">Register</header>
        <input
          className="displayName"
          placeholder="Display Name"
          type="text"
          name="displayName"
          value={this.state.displayName}
          onChange={this.updateDisplayName}
        />
        <input
          className="username"
          placeholder="Username"
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.updateUsername}
        />
        <input
          className="password"
          placeholder="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.updatePassword}
        />
        <button className="submit" onClick={this.handleSubmit}>Submit</button>
      </React.Fragment>
    );
  }
}


