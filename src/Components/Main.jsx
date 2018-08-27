import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
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
} from "../Redux/Actions";
import Message from "./Message";
import NavBar from "./NavBar";
import { Login, Register, Auth } from "./Login";
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

class Main extends Component {
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
                  />
                </Card>
                <Card centered>
                  <Message
                    getMessages={this.props.getMessages}
                    getMessageID={this.props.getMessageID}
                    user={this.props.getUser}
                  />
                </Card>
                <Card centered>
                  <Message
                    getMessages={this.props.getMessages}
                    getMessageID={this.props.getMessageID}
                    user={this.props.getUser}
                  />
                </Card>
                <Card centered>
                  <Message
                    getMessages={this.props.getMessages}
                    getMessageID={this.props.getMessageID}
                    user={this.props.getUser}
                  />
                </Card>
                <Card centered>
                  <Message
                    getMessages={this.props.getMessages}
                    getMessageID={this.props.getMessageID}
                    user={this.props.getUser}
                  />
                </Card>
                <Card centered>
                  <Message
                    getMessages={this.props.getMessages}
                    getMessageID={this.props.getMessageID}
                    user={this.props.getUser}
                  />
                </Card>
              </Grid.Column>
              <Divider vertical />
              <Grid.Column centered>
                <Container className="register" textAlign={"center"}>
                  <Sticky>
                    <Card centered>
                      <Modal trigger={<Button>Login</Button>} closeIcon>
                        <Login />
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

export default Main;
