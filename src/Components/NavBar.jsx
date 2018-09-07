import React, { Component } from "react";

import ProfileInfo from "./ProfileInfo";
import CustomFooter from "./CustomFooter";
import scrumteam1sp from '../images/scrumteam1sp.png';

import { Menu, TextArea, Modal, Button, Card, Image } from "semantic-ui-react";
import {
  getLogout,
  getUser
} from "../Redux/Actions";
import { connect } from "react-redux";



export class NavBar extends Component {


  state = {
    open: false,
    text: "",
    user: {
      about: '',
      createdAt: '',
      displayName: '',
      username: '',
      id: null,
    }
  }

  handlePost = (event) => {
    if (event.key === 'Enter' & event.target.value !== null) {
      this.props.postMessage(this.state.text, this.props.token)
      event.target.value = null
      this.setState({ text: "", open: false })
    }
  }

  handleChange = (event) => {


    this.setState({ text: event.target.value })
  }
  componentDidMount() {
    this.props.getUser()
  }

  showModal = () => {
    this.setState({ open: true })
  }

  close = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    return (
      <Menu style={{ marginBottom: '2vh', backgroundColor: "#EDF5E1" }}>
        <Menu.Menu>
          <Menu.Item>
            <Modal trigger={<Button color='red'>Profile</Button>}>
              {this.props.userInfo !== undefined ?
                <ProfileInfo

                  key={this.props.userInfo.id}
                  displayName={this.props.userInfo.displayName}
                  username={this.props.userInfo.username}
                  about={this.props.userInfo.about}
                  createdAt={this.props.userInfo.createdAt}
                /> : null}
            </Modal>
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu>
          <Menu.Item> <Modal size='tiny' trigger={<Button style={{ backgroundColor: '#379683', color: 'white' }}>Aboot Kwitter</Button>}>
            <Image src={scrumteam1sp}></Image>
          </Modal></Menu.Item>
        </Menu.Menu>

        <Menu.Item>
          <Modal size='tiny' open={open} onClose={this.close} trigger={<Button onClick={this.showModal} style={{ backgroundColor: '#379683', color: 'white' }}>New Kweet</Button>} closeIcon>
            <Card fluid>
              <TextArea autoFocus='true' onChange={this.handleChange} onKeyPress={this.handlePost} placeholder="New Kweet" />
            </Card>
          </Modal>
        </Menu.Item>

        <Menu.Item position='right'><Button onClick={this.props.getLogout} style={{ backgroundColor: '#379683', color: 'white' }}>Logout</Button></Menu.Item>
      </Menu>
    )
  }
}

const mapStateToProps = state => {
  const userFilter = () => {
    let userInfo = state.users.filter(user =>
      user.id === state.profile.id
    )[0]

    return userInfo
  }
  return {
    logout: {
      success: state.success,
      message: state.message
    },
    userInfo: userFilter(),
    profile: state.profile
  }
};


function mapDispatchToProps(dispatch) {
  return {

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
