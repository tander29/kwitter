import CustomHeader from "./Components/CustomHeader";
import CustomFooter from "./Components/CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
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
import { Login, Register, Auth } from "./Components/Login.jsx";

import {
  Container,
  Header,
  List,
  Sticky,
  Modal,
  Button,
  Grid,
  Card,
  Divider
} from "semantic-ui-react";

// make skeleton leave header here, add footer, sections for each component
class App extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          <CustomHeader />
          <Sticky>
            <NavBar />
          </Sticky>
          <Grid centered>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Card centered>
                  <Message
                    getMessages={this.props.getMessages}
                    getMessageID={this.props.getMessageID}
                    user={this.props.getUser}
                    post={this.props.newPost}
                  />
                </Card>
                <Card centered>
                  <Message
                    getMessages={this.props.getMessages}
                    getMessageID={this.props.getMessageID}
                    user={this.props.getUser}
                    post={this.props.newPost}
                  />
                </Card>
                <Card centered>
                  <Message
                    getMessages={this.props.getMessages}
                    getMessageID={this.props.getMessageID}
                    user={this.props.getUser}
                    post={this.props.newPost}
                  />
                </Card>
              </Grid.Column>
              <Divider vertical />
              <Grid.Column centered verticalAlign="middle">
                <Container className="register" textAlign={"center"}>
                <Sticky>
                  <Card centered>
                    <Modal trigger={<Button>Login</Button>} closeIcon>
                      <Login test={this.props.login}/>
                    </Modal>
                    <Divider horizontal>Or</Divider>
                    <Modal />
                    <Modal trigger={<Button>Register</Button>} closeIcon>
                      <Register />
                    </Modal>
                  </Card>
                  </Sticky>
                </Container>
              </Grid.Column>
              <CustomFooter />
            </Grid.Row>
          </Grid>
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
