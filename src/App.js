<<<<<<< HEAD
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { login, register, like, newPost, deleteMessage, getMessages, getMessageID, getLogout, getUser } from './Redux/Actions'
import Message from './Components/Message'
import { Register, Auth, Login } from './Components/Login.jsx'
import NavBar from "./Components/NavBar";

=======
import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home";
import {
  login,
  register,
  like,
  newPost,
  deleteMessage,
  getMessages,
  getMessageID,
  getLogout,
  getUser
} from "./Redux/Actions";
import Message from "./Components/Message";
import NavBar from "./Components/NavBar";
import { Login, Register } from "./Components/Login";
>>>>>>> 9bf983a1bc00d289826865fc15683b610456697c


// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
<<<<<<< HEAD
    return (
      <div className="App">
        <div>This is from APP</div>
        <Container>
          <Header></Header>
          <NavBar></NavBar>
          <Message getMessages={this.props.getMessages} getMessageID={this.props.getMessageID} user={this.props.getUser}></Message>
          <Register></Register>
          <Auth></Auth>
          <Login></Login>
        </Container>
      </div >
    );
=======
    return <Home />;
>>>>>>> 9bf983a1bc00d289826865fc15683b610456697c
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    },
    register: (displayName, username, password) => {
      dispatch(register());
    },
    newPost: () => {
      dispatch(newPost());
    },
    like: () => {
      dispatch(like());
    },
    deleteMessage: () => {
      dispatch(deleteMessage());
    },
    getMessages: () => {
      dispatch(getMessages());
    },
    getMessageID: () => {
      dispatch(getMessageID());
    },
    getLogout: () => {
      dispatch(getLogout());
    },
    getUser: () => {
      dispatch(getUser());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default Connect;
