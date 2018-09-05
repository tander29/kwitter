
import React, { Component } from "react";

import ProfileInfo from "./ProfileInfo";

import { Menu, TextArea, Modal, Button } from "semantic-ui-react";
import {
  login,
  register,
  getLogout,
  getUser
} from "../Redux/Actions";
import { connect } from "react-redux";




export class NavBar extends Component {
  // export const NavBar = (props) => {

  state = {
    text: "",
  }

  handlePost = (event) => {
    if (event.key === 'Enter') {
      this.props.postMessage(this.state.text, this.props.token)
      event.target.value = null
      this.setState({ text: "" })
      // this.props.reloadMessages()
    }
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ text: event.target.value })
  }





  render() {
    return (
      <Menu>
        <Menu.Menu>
          <Menu.Item>
            <Modal trigger={<Button >Profile</Button>}>
              <ProfileInfo></ProfileInfo>
            </Modal>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item><Button color='vk'>Aboot Kwitter</Button></Menu.Item>
        </Menu.Menu>

        <Menu.Item>
          <Modal trigger={<Button color='twitter'>New Kweet</Button>} closeIcon><TextArea onChange={this.handleChange} onKeyPress={this.handlePost} placeholder="New Kweet" style={{ width: '100%' }} /></Modal>
        </Menu.Item>

        <Menu.Item><Button onClick={this.props.getLogout} color='teal'>Logout</Button></Menu.Item>
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
