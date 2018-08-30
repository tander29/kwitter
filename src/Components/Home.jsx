import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { login, register } from "../Redux/Actions";
import Message from "./Message";
import { Login, Register } from "./Login";
import {
  Container,
  Sticky,
  Modal,
  Button,
  Grid,
  Card,
  Divider
} from "semantic-ui-react";

import { Link } from 'react-router-dom'

export class Home extends Component {
  render() {
    return (
      <Container>
        <div className="App">
          This is home page.
          <Container className='headerNav' style={{ marginBottom: '2vh' }}>
            <CustomHeader />
          </Container>
          <Grid centered>
            <Grid.Row columns={2}>
              <Grid.Column>

                <Message
                  getMessages={this.props.getMessages}
                  getMessageID={this.props.getMessageID}
                  user={this.props.getUser}
                  onClick={this.props.post}
                />

                <Message
                  getMessages={this.props.getMessages}
                  getMessageID={this.props.getMessageID}
                  user={this.props.getUser}
                />

                <Message
                  getMessages={this.props.getMessages}
                  getMessageID={this.props.getMessageID}
                  user={this.props.getUser}
                />

                <Message
                  getMessages={this.props.getMessages}
                  getMessageID={this.props.getMessageID}
                  user={this.props.getUser}
                />

              </Grid.Column>

              <Grid.Column>
                <Container className="register" textAlign={"center"}>
                  <Sticky offset={100}>
                    <Card centered>
                      <Modal trigger={<Button>Login</Button>} closeIcon>
                        <Login whatever={this.props.login} />
                      </Modal>
                      <Divider horizontal>Or</Divider>
                      <Modal />
                      <Modal trigger={<Button>Register</Button>} closeIcon>
                        <Register test={this.props.register} />
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
  return { messages: state.messages, profile: state.profile };
};

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    },
    register: (displayName, username, password) => {
      dispatch(register(displayName, username, password));
    },
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
export default Connect;