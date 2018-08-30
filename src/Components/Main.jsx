import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Profile from "./Profile";
import Messageboard from './Messageboard'
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
import {
  Container,
  Sticky,
  Grid,
  Card
} from "semantic-ui-react";

export class Main extends Component {

  componentDidMount() {

    // console.log('I was triggered during componentDidMount', this.props.profile)
  }
  render() {
    return (
      <Container fluid>
        <div className="App">
          < Container className='headerNav' style={{ marginBottom: '2vh', }} fluid>
            <CustomHeader />
            <Sticky>
              <NavBar />
            </Sticky>
          </Container>
          <Grid centered>
            <Grid.Row columns={3}>
              <Grid.Column width={4}>
                <Sticky offset={75}>
                  <Card centered>
                    <Profile name={this.props.profile.username} />
                  </Card>
                </Sticky>
              </Grid.Column>

              <Grid.Column width={9}>
                <Container className="register" textAlign={"center"}>


                  <Messageboard></Messageboard>



                </Container>
              </Grid.Column>
              <Grid.Column width={3}>
                <Sticky offset={75}>
                  <CustomFooter />
                </Sticky>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container >
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
    getUser: () => {
      dispatch(getUser());
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
export default Connect;
