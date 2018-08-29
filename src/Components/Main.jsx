import CustomHeader from "./CustomHeader";
import CustomFooter from "./CustomFooter";
import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import Profile from "./Profile";
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
  render() {
    return (
      <Container>
        <div className="App">
        <Container className='headerNav' style={{marginBottom: '2vh'}}>
          <CustomHeader />
          <Sticky>
            <NavBar />
          </Sticky>
          </Container>
          <Grid centered>
            <Grid.Row columns={3}>
              <Grid.Column width={4}>
                <Card centered>
                  <Profile />
                </Card>
              </Grid.Column>

              <Grid.Column width={9}>
                <Container className="register" textAlign={"center"}>
                  
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
                  
                </Container>
              </Grid.Column>
              <Grid.Column width={3}>
                <CustomFooter />
              </Grid.Column>
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
)(Main);
export default Connect;
