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


// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
    return <Home />;
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
