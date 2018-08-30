import React from "react";
import { Menu, TextArea, Modal, Button } from "semantic-ui-react";
import {connect} from 'react-redux'
import {getLogout} from '../Redux/Actions'


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
      <Menu.Item><Button onClick={this.props.getLogout}>Logout</Button></Menu.Item>
    </Menu.Menu>
  </Menu>
);

const mapStateToProps = state => {
  return { messages: state.messages };
};

function mapDispatchToProps(dispatch) {
  return {

    getLogout: () => {
      dispatch(getLogout());
    
    }
  };
}

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
export default Connect;
