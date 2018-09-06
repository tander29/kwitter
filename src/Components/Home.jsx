import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import { login, register } from "../Redux/Actions";
import Messageboard from "./Messageboard";
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



export class Home extends Component {


  render() {
    return (
      <Container fluid>
        <div className="App">

          <CustomHeader />
          <Container style={{ marginTop: '2vh' }}>
            <Grid centered>
              <Grid.Row columns={2}>
                <Grid.Column>

                  <Messageboard location={this.props.location}></Messageboard>

                </Grid.Column>

                <Grid.Column>
                  <Container className="register" textAlign={"center"}>
                    <Sticky>
                      <Card centered>
                        <Modal size='tiny' trigger={<Button color='teal'>Login</Button>} closeIcon>
                          <Login whatever={this.props.login} />
                        </Modal>
                        <Divider horizontal>Or</Divider>
                        <Modal />
                        <Modal size='tiny' trigger={<Button color='teal'>Register</Button>} closeIcon>
                          <Register test={this.props.register} />
                        </Modal>
                      </Card>
                    </Sticky>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
                <CustomFooter />
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