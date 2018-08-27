import CustomHeader from "./Components/CustomHeader";
import CustomFooter from "./Components/CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
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
import { Login, Register, Auth } from "./Components/Login";

import { Container, Header } from "semantic-ui-react";

// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <CustomHeader />
          <NavBar />
          <div>This is from APP</div>
          <Message
            getMessages={this.props.getMessages}
            getMessageID={this.props.getMessageID}
            post={this.props.newPost}
            user={this.props.getUser}
          />
          <Register></Register>
          <Auth></Auth>
          <Login></Login>
          <CustomFooter />

        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { messages: state.messages };
};

function mapDispatchToProps(dispatch) {
  return {
    login: () => {
      dispatch(login());
    },
    register: () => {
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
