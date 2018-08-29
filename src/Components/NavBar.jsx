import React from "react";
import { Menu, Input, TextArea, Modal, Button } from "semantic-ui-react";
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
} from "../Redux/Actions";




export const NavBar = () => (

  <Menu>
    <Menu.Menu>
      <Menu.Item><Button>Profile Page</Button></Menu.Item>
    </Menu.Menu>
    <Menu.Menu>
      <Menu.Item><Button>Aboot Kwitter</Button></Menu.Item>
    </Menu.Menu>

      <Menu.Item>
        <Modal trigger={<Button>New Message</Button>} closeIcon><TextArea placeholder="New Kweet" style={{ width: '100%' }}/></Modal>
        </Menu.Item>
    
    <Menu.Menu position="right">
      <Menu.Item><Button onClick={getLogout}>Logout</Button></Menu.Item>
    </Menu.Menu>
  </Menu>
);

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
)(NavBar);
export default Connect;
