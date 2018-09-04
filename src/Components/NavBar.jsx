
import React, { Component } from "react";

import ProfileInfo from "./ProfileInfo";

import { Menu, TextArea, Modal, Button } from "semantic-ui-react";
import {
  login,
  register,
  newPost,
  getLogout,
  getUser
} from "../Redux/Actions";
import { connect } from "react-redux";




export class NavBar extends Component {
  // export const NavBar = (props) => {

  state = {
    text: "",
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.postMessage(this.state.text, this.props.token)
    } else {
      // console.log(event.key, this.props.postMessage, this.props.token)
      this.setState({ text: event.target.value })
    }

  }



  render() {
    return (
      <Menu>
        <Menu.Menu>
          <Menu.Item><Button color='facebook'>Profile Page</Button></Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item><Button color='vk'>Aboot Kwitter</Button></Menu.Item>
        </Menu.Menu>

        <Menu.Item>
          <Modal trigger={<Button color='twitter'>New Kweet</Button>} closeIcon><TextArea onKeyDown={this.handleKey} placeholder="New Kweet" style={{ width: '100%' }} /></Modal>
          </Menu.Item>
          </Menu>
 )
  }
}
  
  

const mapStateToProps = state => {
  return {
    logout: {
      success: state.success,
      message: state.message
    }
  };
};
  
  

function mapDispatchToProps(dispatch) {
  return {
    login: (username, password) => {
      dispatch(login(username, password));
    },
    register: (displayName, username, password) => {
      dispatch(register());
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
